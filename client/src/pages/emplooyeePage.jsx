import React from 'react'
import EmployeesList from '../components/employeesList'
import Navbar from '../components/navbar'

function EmployeePage() {
  return (
    <div>
        <Navbar/>
        <EmployeesList/>
    </div>
  )
}

export default EmployeePage