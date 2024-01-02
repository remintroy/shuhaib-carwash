const express =require('express')
const router=express.Router()

const {addPendingList,getAllLists
    ,editList,
    getSingleData,
    getallRenewedList,
    downloadReneiwedData
} = require('../controller/adminController')

router.post('/pendingList',addPendingList)
router.get('/getPendingList',getAllLists)
router.get('/getListById:id',getSingleData)
router.post('/editList',editList)
router.get('/renewedList',getallRenewedList)
router.get('/downloadData',downloadReneiwedData)
module.exports= router
