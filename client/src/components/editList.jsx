import React from 'react'

function EditList() {
  return (
    <div>
         <section className="bg-gray-100">
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div >
       
  
        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form action="" className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="name">Contract No</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Contract No"
                type="text"
                id="name"
              />
            </div>
  
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">site</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="site"
                  type="email"
                  id="email"
                />
              </div>
  
              <div>
                <label className="sr-only" htmlFor="phone">Reciept No</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Receipt No"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">Plate no</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Plate no"
                  type="email"
                  id="email"
                />
              </div>
  
              <div>
                <label className="sr-only" htmlFor="phone">Renewal Date </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder=" Renewal Date"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">Payment Mode</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Payment Mode"
                  type="email"
                  id="email"
                />
              </div>
  
              <div>
                <label className="sr-only" htmlFor="phone"> Auth Code</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Auth Code "
                  type="text"
                  id="phone"
                />
              </div>
            </div>
               

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">Amout</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Amount"
                  type="email"
                  id="email"
                />
              </div>
  
              <div>
                <label className="sr-only" htmlFor="phone"> Cleaner Name</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Cleaner Name "
                  type="text"
                  id="phone"
                />
              </div>
            </div>

            

            
  
           
  
            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default EditList