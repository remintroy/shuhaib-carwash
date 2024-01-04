import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getPendingList,exportList } from '../helpers/adminHelpers'

function PendingList() {
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  console.log(file,'file');


  
  const formData = new FormData();
  formData.append('excelFile', file);

 

  const [List,setList]= useState([])
  useEffect(()=>{
    console.log('calling');
    getPendingList().then((data)=>{
      console.log(data?.data?.data,'llistss');
      setList(data?.data?.data)
    })
  },[])
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">      Pending List</h2>
            <p className="mt-1 text-sm text-gray-700">
       
            </p>
          </div>
          <div>
          <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
            <Link 
            onClick={()=>{exportList(formData)}}
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
             Upload
            </Link>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span>Contract No</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Mobile
                      </th>
{/* /fjld */}
                    <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Building
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Plate No
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Flat No
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        LOT No
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Rate Of Monthly Contract 
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Renewal Date
                      </th>




                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Contract Status
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                     Cleaner Now
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Site
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>

                  {
                    List?.map((lists)=>{
                      const date = new Date(lists.renewalDate);

                      const year = date.getFullYear();
                      const month = (date.getMonth() + 1).toString().padStart(2, '0');
                      const day = date.getDate().toString().padStart(2, '0');
                      
                      const formattedDate = `${day}-${month}-${year}`;
                      return(
                    
                  <tbody className="divide-y divide-gray-200 bg-white">
                  
                      <tr key='' className="divide-x divide-gray-200">
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                           
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{lists?.contractNo}</div>
                             
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900">{lists?.mobile}</div>
                          
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900"> {lists?.building} </div>
                          
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900">{lists?.plateNo}</div>
                          
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900">{lists?.flatNo}</div>
                          
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900">{lists.lotNo}</div>
                          
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900">{lists?.VAT}</div>
                          
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900">{formattedDate}</div>
                          
                        </td>
                      {
                        lists?.status==='renewed'?
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {lists?.status}
                          </span>
                        </td>:
                        <td className="whitespace-nowrap px-4 py-4">
                        <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                          {lists?.status}
                        </span>
                      </td>
                      }
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900">{lists?.cleaner}</div>
                          
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900">{lists?.site}</div>
                          
                        </td>

                        {
                          lists.status==='renewed'?
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <button to={`/edit/${lists._id}`}   className=" text-gray-500" disabled >
                            Edit
                          </button>
                        </td>:
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                        <Link to={`/edit/${lists._id}`}  className="text-gray-500 hover:text-indigo-600">
                          Edit
                        </Link>
                      </td>
                        }
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
        <div className="mt-4 w-full border-gray-300">
          <div className="mt-2 flex items-center justify-end">
            <div className="space-x-2">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default PendingList