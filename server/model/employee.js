const mongoose=require('mongoose')

const employeeSchema=mongoose.Schema({
    name:{
   type:String,

    },
    site:{
        type:String,
        // required:true,
     
    },
    

    password:{
        type:String,
        required:true
    },

    isEmploye:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('Employee',employeeSchema)