import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {getEmployees} from '../helpers/adminHelpers'
function EmployeesList() {
    const [employees,setEmployees]= useState([])
    useEffect(() => {
      getEmployees().then((data)=>{
        console.log(data.data,'namma data');
        if(data){
            setEmployees(data?.data)
        }
      })
    
     
    }, [])
    
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-4">
    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
      <div>
        <h2 className="text-lg font-semibold">Employees</h2>
       
      </div>
      <div>
        <Link to={'/editEmployee'}
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add new employee
        </Link>
      </div>
    </div>
    <div className="mt-6 flex flex-col">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden border border-gray-200 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {/* <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    <span>Employee</span>
                  </th> */}
                  <th
                    scope="col"
                    className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    UserName
                  </th>

                 

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    Site
                  </th>
                  {/* <th scope="col" className="relative px-4 py-3.5">
                    <span className="sr-only">Edit</span>
                  </th> */}
                </tr>
              </thead>
              {
                employees?.map((data)=>{
                    return(
                   
              <tbody className="divide-y divide-gray-200 bg-white">
                
                  <tr key='fhj'>
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="flex items-center">
                        
                        <div className="ml-4">
                          <div className="text-sm text-gray-700">{data.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-sm text-gray-900 ">{data?.site}</div>
                      
                    </td>
                   
                    {/* <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                      hjjh
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                      <a href="#" className="text-gray-700">
                        Edit
                      </a>
                    </td> */}
                  </tr>
                
              </tbody>
                   
                   )
                })
              }
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default EmployeesList