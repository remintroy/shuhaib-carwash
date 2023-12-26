import React from 'react'

function PendingForm() {
  return (
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
                <label className="sr-only" htmlFor="email">Mobile</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Mobile"
                  type="email"
                  id="email"
                />
              </div>
  
              <div>
                <label className="sr-only" htmlFor="phone">Building</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Building"
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
                <label className="sr-only" htmlFor="phone">Flat no</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Flat no"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">Lot  No</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Lot no"
                  type="email"
                  id="email"
                />
              </div>
  
              <div>
                <label className="sr-only" htmlFor="phone"> VAT</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Rate of monthly Contract "
                  type="text"
                  id="phone"
                />
              </div>
            </div>
               

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">Renewal Date</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Renewal Date"
                  type="email"
                  id="email"
                />
              </div>
  
              <div>
                <label className="sr-only" htmlFor="phone"> Contract Status</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Contract Status "
                  type="text"
                  id="phone"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">PEM</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="PEM"
                  type="email"
                  id="email"
                />
              </div>
  
              <div>
                <label className="sr-only" htmlFor="phone"> Cleaner Now</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Cleaner Now"
                  type="text"
                  id="phone"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="phone"> site</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Site"
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
   
  )
}

export default PendingForm