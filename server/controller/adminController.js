const PendingList= require('../model/pendingListModel')
const RenewedList = require('../model/renewedList')
const ExcelJS = require('exceljs');

exports.addPendingList=async(req,res)=>{
    try {
const {contractNo,mobile,building,plateNo,flatNo,VAT,renewalDate,
    status,pem,cleaner,site,lotNo
}= req.body

const dateString = renewalDate;
const newDate = new Date(dateString);

const addlist = new PendingList ({
    contractNo,
    mobile,
    building,
    plateNo,
    flatNo,
    VAT,
    renewalDate:newDate,
    status,
    pem,
    site,
    cleaner,
    lotNo
})
addlist.save().then((result)=>{
    if(result){
        res.status(200).send({ success: "added" });
    }else{
        res.status(500).send({error:error.message})
    }
 })

    } catch (error) {
        console.log(error,'nmaa error');
    }
}

exports.getAllLists= async (req,res)=>{
    console.log('calling','back');
    try {
        const allPendingList = await PendingList.find({})
      
        if(allPendingList){
            res.status(200).send({data:allPendingList})
        }else{
            console.log('eroro');
        }
    } catch (error) {
        console.log(error,'namma error');
        res.send(error.message)
    }
}

exports.editList = async(req,res)=>{
    try {
       const {id}=req.body
      console.log(req.body,'namma body');
       const {Payment,contractNo,cleaner,VAT,site,plateNo,renewalDate,newDate,balance,amountRecieved}= req.body.values
       const dateString = newDate;
const updatedDate = new Date(dateString);
        const updateList = await PendingList.updateOne({_id:id},
            {
                $set:{
              renewalDate:updatedDate,
              status:'renewed'
                }
            })
     
        if(updateList){
            const renewedList = new RenewedList({
                contractNo,
                plateNo,
                amount:VAT,
                newDate:updatedDate,            
                site,
                cleaner,
                amountRecieved,
                balance,
                paymentMethod:Payment
            })
            renewedList.save().then((result)=>{
               
                res.status(200).send({success:'added'})
            }).catch((error)=>{
                console.log(error);
            })
           
        }
        res.status(200).send({data:updateList})

    } catch (error) {
    res.send(error)
        
    }
}

 
exports.getSingleData=async(req,res)=>{
try {
    const {id}= req.params

const singlData =await PendingList.findById(id)

if(singlData){
    res.status(200).send({data:singlData})
}
} catch (error) {
    res.send(error)
}
}

exports.getallRenewedList= async(req,res)=>{
    try {
        const allData = await RenewedList.find({})
       
        if(allData){
            res.status(200).send({data:allData})
        }
    } catch (error) {
        
    }
}

exports.downloadReneiwedData = async(req,res)=>{
    try {
        const allData =await RenewedList.find({})
        if(allData){
            exportToExcelAndSendResponse(allData,res)
        }
        
    } catch (error) {
        
    }
}
async function exportToExcelAndSendResponse(data, res) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');
  
    // Assuming data is an array of objects
    // You may need to customize this based on your schema
    worksheet.columns = [
      { header: 'Contract No', key: 'contractNo', width: 15 },
      { header: 'Plate No ', key: 'plateNo', width: 15 },
      { header: 'Renewal Date', key: 'RenewalDate', width: 15 },
      { header: 'Amount', key: 'amount', width: 15 },
      { header: 'Amount Recieved', key: 'amountRecieved', width: 15 },
      { header: 'Balance', key: 'balance', width: 15 },

      { header: 'Cleaner', key: 'cleaner', width: 15 },
      { header: 'Site ', key: 'site', width: 15 },
      { header: 'Payment methord ', key: 'PaymentMethord', width: 15 },





      // Add more columns as needed
    ];
  
    // Insert data into the worksheet
    data.forEach((item) => {
        console.log(item,'ietmss');
      worksheet.addRow({
        contractNo: item.contractNo,
        plateNo: item.plateNo,
        RenewalDate: item.newDate,
        amount: item.amount,
        amountRecieved: item.amountRecieved,
        balance: item.balance,

        cleaner: item.cleaner,
        site: item.site,
        PaymentMethord : item.paymentMethod,

        




        // Add more fields as needed
      });
    });
  
    // Set headers for the response
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=output.xlsx');
  
    // Write the workbook to the response stream
   await  workbook.xlsx.write(res);
  
    // End the response
    res.end();
  
    console.log('Excel file sent successfully');
  }