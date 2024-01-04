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

    ];
  
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

      });
    });
  
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=output.xlsx');
  
   await  workbook.xlsx.write(res);
  
   
    res.end();
    
  
    console.log('Excel file sent successfully');
  }


  //export Form Data

  exports.exportFormData = async (req, res) => {
    try {
        console.log('calling ');
   
     if(req.file.buffer){
        const result = await PendingList.deleteMany({});

        console.log(`${result.deletedCount} documents deleted`);
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(req.file.buffer);

        
        const sheetNames = workbook.worksheets.map(ws => ws.name);

        const worksheet = workbook.getWorksheet('Pending');
        if (!worksheet) {
            throw new Error("Worksheet 'Pending' not found in the workbook.");
        }

        const dataToImport = [];

        worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
            if (rowNumber === 1) {
                return;
            }

            const rowData = {
                contractNo: row.getCell(1).value === 'CONTRACT NO' ? '' : row.getCell(1).value,
                mobile: row.getCell(2).value === 'MOBILE ' ? '' : row.getCell(2).value,
                building: row.getCell(3).value === 'BUILDING ' ? '' : row.getCell(3).value,
                plateNo: row.getCell(4).value === 'PLATE NO ' ? '' : row.getCell(4).value,
                flatNo: row.getCell(5).value === 'FLAT NO ' ? '' : row.getCell(5).value,
                VAT: row.getCell(7).value === 'RATE OF MONTHLY CONTRACT INCLUDE VAT' ? '' : row.getCell(7).value,
                renewalDate: row.getCell(8).value === 'RENEWAL DATE' ? '' : row.getCell(8).value,
                status: row.getCell(15).value === 'CONTRACT STATUS' ? '' : row.getCell(15).value,
                cleaner: row.getCell(17).value === 'CLEANER NOW' ? '' : row.getCell(17).value,
                site: row.getCell(18).value === 'SITE ' ? '' : row.getCell(18).value,
            };
            dataToImport.push(rowData);
        });

        await PendingList.insertMany(dataToImport);

        res.status(200).json({ message: 'File uploaded and data imported successfully' });
     }else{
        console.log('something went wrong');
     }

    } catch (error) {
        console.error('Error processing file:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
