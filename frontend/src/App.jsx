import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import EmployeeListComponents from './Component/EmployeeListComponent'
import HeaderComponent from './Component/HeaderComponent';
import FooterComponent from './Component/FooterComponent';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AddEmployeeComponent from './Component/AddEmployeeComponent';

function App() {
 

  return (
    <>
    <BrowserRouter>
     <HeaderComponent/>
        <Routes>
        {/* //http://localhost:3000 */}
          <Route path='/' element={<EmployeeListComponents/>}></Route>
          {/* //http://localhost:3000/employees */}
          <Route path='/employees' element={<EmployeeListComponents/>}></Route>
          {/* //http://localhost:3000/add-amployee */}
          <Route path='/add-employee' element={<AddEmployeeComponent/>}></Route>
          {/* //http://localhost:3000/edit-employee/1 */}
          <Route path='/edit-employee/:id' element={<AddEmployeeComponent/>}></Route>
        </Routes>
     

     <FooterComponent/>
     </BrowserRouter>
    </>
  )
}

export default App
