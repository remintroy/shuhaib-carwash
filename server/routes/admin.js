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
    exportFormData,
    loginAdmin,
    addEmployee,
    getEmployeesList,
    loginEmp,
    getEmpPendList,
    getSearchData
} = require('../controller/adminController')

router.post('/pendingList',addPendingList)
router.get('/getPendingList',getAllLists)
router.get('/getListById:id',getSingleData)
router.post('/editList',editList)
router.get('/renewedList',getallRenewedList)
router.get('/downloadData',downloadReneiwedData)
router.post('/exportList',upload.single('excelFile'),exportFormData)
router.post('/loginAdmin',loginAdmin)
router.post('/addEmployees',addEmployee)
router.get('/getEmployees',getEmployeesList)
router.post('/empLogin',loginEmp)
router.get('/getEmplPendingList',getEmpPendList)
router.post('/searchTerm',getSearchData)

module.exports= router
