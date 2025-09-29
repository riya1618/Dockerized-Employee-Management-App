import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate,useParams } from 'react-router-dom'

const AddEmployeeComponent = () => {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')

    const{id}=useParams();

    const [errors,setErrors] =useState({
      firstName:'',
      lastName:'',
      email:''
    })

    const navigator = useNavigate();

    useEffect(()=>{
      if(id){
        getEmployee(id).then((response)=>{
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        }).catch(error => {
          console.error(error);
        })
      }

    },[id])

        function saveOrUpdateEmployee(e){
            e.preventDefault();

            if(validateForm()){

              const employee={firstName,lastName,email}
                  console.log(employee)

              if(id){
                updateEmployee(id,employee).then((response)=>{
                  console.log(response);
                  navigator('/employees');
                }).catch(error=>{
                  console.error(error);
                })
              }else{
                  createEmployee(employee).then((Response) => {
                  console.log(Response.data);
                  navigator('/employees')
            }).catch(error=>{
               console.error(error);
            })
              }
            }
        }

        function validateForm(){
          let valid=true;
          const errorsCopy = {... errors}

          if(firstName.trim()){
            errorsCopy.firstName='';

          }else{
            errorsCopy.firstName="first name required";
            valid=false;
          }

          if(lastName.trim()){
            errorsCopy.lastName='';
          }else{
            errorsCopy.lastName="last name is required";
            valid=false;
          }

          if(email.trim()){
            errorsCopy.email='';
          }else{
            errorsCopy.email="email is required";
            valid=false;
          }
          setErrors(errorsCopy);
          return valid;
        }
        function pageTitle(){
          if(id){
            return <div className="text-center">
          <h3>Update Employee</h3>
        </div>
          }else{
           return <div className="text-center">
          <h3>Add Employee</h3>
        </div>
          }
        }

  return (
    <div className="container my-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card shadow-lg border-0 rounded-4">
      {
        pageTitle()
      }
        <div className="card-body p-4">
          <form>
            {/* First Name */}
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className={`form-control ${errors.firstName ? 'is-invalid':''}`}
                placeholder="Enter Employee First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
            </div>

            {/* Last Name */}
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className={`form-control ${errors.lastName ? 'is-invalid':''}`}
                placeholder="Enter Employee Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Employee Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-control ${errors.email ? 'is-invalid':''}`}
                placeholder="Enter Employee Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
            </div>

            {/* Submit Button */}
            <div className="d-grid">
              <button type="button" className="btn btn-success" onClick={saveOrUpdateEmployee}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default AddEmployeeComponent