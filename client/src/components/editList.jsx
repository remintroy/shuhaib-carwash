import React,{useState,useEffect} from 'react'
import { useFormik } from 'formik'
import toast, {Toaster} from 'react-hot-toast'

import { useParams,useNavigate,Link } from 'react-router-dom'

import {editList,getListbyId} from '../helpers/adminHelpers'


function EditList() {
  const navigate= useNavigate()
  const {id}=useParams()

const[singleData,setSingleData]= useState([])
const [contractNo,setcontractNo]=useState('')
const [cleaner,setCleaner]= useState('')
const[VAT,setVat]= useState('')
const [site,setSite] = useState('')
const [plateNo,setPlateNo]= useState('')
const [renewalDate,setRenewalDate]= useState('')

console.log(renewalDate,'renawaldate');

const [selectedValue, setSelectedValue] = useState('cash');
const date = new Date(singleData?.renewalDate);
const year = date.getFullYear();
const month = (date.getMonth() + 1).toString().padStart(2, '0');
const day = date.getDate().toString().padStart(2, '0');
const formattedDate = `${day}-${month}-${year}`

useEffect(()=>{
  
getListbyId(id).then((singleData=>{
  

  
formik.setValues({
    contractNo:singleData.data.data.contractNo,
    cleaner:singleData.data.data.cleaner,
    VAT:singleData.data.data.VAT,
    site:singleData.data.data.site,
    plateNo:singleData.data.data.plateNo,
    renewalDate:formattedDate
  })
   setSingleData(singleData.data.data)
  setCleaner(singleData.data.data.cleaner)
  setcontractNo(singleData.data.data.contractNo)
  setVat(singleData.data.data.VAT)
  setSite(singleData.data.data.site)
  setPlateNo(singleData.data.data.plateNo)
  setRenewalDate(formattedDate)
}))
},[])

const Change = (event) => {
  setSelectedValue(event.target.value);

  
};


//calculating balance
 const calculateBalance = (e) => {
  
    const amountReceived = parseFloat(e.target.value) || 0;
    const amount = parseFloat(VAT) || 0;
    console.log(amountReceived,'amountrecievd');
    console.log(amount,'amout');
    const balance = amount - amountReceived;
    console.log(balance,'balance');
    formik.setFieldValue('balance', balance.toFixed(2));
  };
  const validate = values => {
    const errors = {}

  }
const formik = useFormik({
initialValues:{
contractNo,
VAT,
renewalDate,
amountRecieved:'',
balance:'',
cleaner,
site,
newDate:'',
authCode:'',
Payment:selectedValue
},
validate,
validateOnBlur: false,
validateOnChange: false,
onSubmit: async values => {
  console.log(values,'formik values');
const datas ={values,id}
console.log(datas);
  let details = editList(datas)
  toast.promise(details, {
    loading: 'adding...',
    success: <b>successfully edited</b>,
    error: <b>failed to add </b>
  })
  details.then((data) => {
    console.log(data,'data frontednd');
    if(data){

      navigate('/')
    }
  })
}
})
  return (
    <div>
         {/* <section className="bg-gray-100">
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div >
       
  
        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <Toaster position='top-center' reverseOrder={false} ></Toaster> 
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="name">Contract No</label>
              <input
               name='contractNo'
               value={contractNo}
               {...formik.getFieldProps('contractNo')}
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
                  name='site'
                  value={site}
                  
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="site"
                  type="text"
                />
              </div>
  
              
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">Plate no</label>
                <input
                  name='plateNo'
                  value={plateNo}
                
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Plate no"
                  type="text"
                 
                />
              </div>
  
              <div>
                {
                  console.log(renewalDate,'fkfjkjf')
                }
                <label className="sr-only" htmlFor="phone">Renewal Date </label>
                <input
                  name='renewalDate'
                  value={renewalDate}
                 
                  
                 
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder=" Renewal Date"
                  type="text"
                  id="phone"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="phone">New Date </label>
                <input
                name='newDate'
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.newDate}
          
                 
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder=" New Date"
                  type="date"
                 
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
                  <label className="sr-only">Payment Methord</label>
                  <select
                    onChange={(e) => {
                      Change(e);
                      formik.handleChange(e)
                    }}
                  
                    name="Payment"
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  >
                    <option value="select one">select one</option>

                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                  </select>
                 
                </div>
  {
    selectedValue==='card'?
              <div>
                <label className="sr-only" htmlFor="phone"> Auth Code</label>
                <input
                  name='authCode' 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.authCode}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Auth Code "
                  type="text"
                  id="phone"
                />
              </div>:""
  }
            </div>
               

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
                    <label className="sr-only">Amount Received</label>
                    <input
                      name="amountRecieved"
                      onChange={(e) => {
                
                        formik.handleChange(e);
                        calculateBalance(e);
                      }}
                      onBlur={formik.handleBlur}
                      value={formik.values.amountRecieved}
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Amount Received"
                      type="text"
                      id="amount"
                    />
                  </div>
              <div>
                    <label className="sr-only">Balance</label>
                    <input
                      name="balance"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.balance}
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Balance"
                      type="text"
                      id="balance"
                    />
                  </div>
              <div>
                <label className="sr-only" htmlFor="email">Amount </label>
                <input
                  name='amount'
                  value={VAT}
                 
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Amount"
                  type="text"
                  id="email"
                />
              </div>
  
              <div>
                <label className="sr-only" htmlFor="phone"> Cleaner Name</label>
                <input
                  name='cleaner'
                  value={cleaner}
                  onChange={(e)=>{setCleaner(e.target.value)}}
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
  </section> */}
    </div>
  )
}

export default EditList