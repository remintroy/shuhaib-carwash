const express =require('express')
const router=express.Router()
const multer = require('multer');

//setting multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const {addPendingList,getAllLists
    ,editList,
    getSingleData,
    getallRenewedList,
    downloadReneiwedData,
    exportFormData
} = require('../controller/adminController')

router.post('/pendingList',addPendingList)
router.get('/getPendingList',getAllLists)
router.get('/getListById:id',getSingleData)
router.post('/editList',editList)
router.get('/renewedList',getallRenewedList)
router.get('/downloadData',downloadReneiwedData)
router.post('/exportList',upload.single('excelFile'),exportFormData)
module.exports= router
