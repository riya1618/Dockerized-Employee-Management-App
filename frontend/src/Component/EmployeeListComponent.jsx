import React,{useEffect, useState} from 'react'
import { deleteEmployee, employeeList } from '../services/EmployeeService'
import { useNavigate,useParams } from 'react-router-dom'

const EmployeeListComponent = () => {

 const [employees, setEmployees] = useState([])
 const navigator = useNavigate();

 useEffect (() => {
  getAllEmployees();
 },[])

 function getAllEmployees(){
   employeeList().then((response) => {
    setEmployees(response.data);
  }).catch(error => {
    console.error(error);
  })
 }

function addNewEmployee(){
  navigator('/add-employee')

}
function updateEmployee(id){
  navigator(`/edit-employee/${id}`)
}

function removeEmployee(id){
  
  deleteEmployee(id).then((response)=>{
    getAllEmployees();
  }).catch(error=>{
    console.error(error);
  })
}

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">List Of Employees</h2>
      <button className="btn btn-primary mb-2" onClick={addNewEmployee} >Add Employee</button>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
        <tr>
          <th>Employee Id</th>
          <th>Employee First Name</th>
          <th>Employee last name</th>
          <th>Employee Emial id</th>
          <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-striped">
          {
            employees.map(employee =>
            <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.email}</td>
            <td>
              <button className='btn btn-info' onClick={()=>updateEmployee(employee.id)}>update</button>
              <button className='btn ms-2 btn-danger' onClick={()=>removeEmployee(employee.id)}>Delete</button>
            </td>
            </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}
export default EmployeeListComponent