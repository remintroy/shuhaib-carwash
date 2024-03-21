const mongoose=require('mongoose')

const newListSchema = mongoose.Schema({
    serialNo:{
        type:String,
        required:true,
        
    },
    name:{
        type:String,
    },
    mobile:{
        type:String,
    },
    building:{
        type:String,

    },
    plateNo:{
        type:String
    },
    flat:{
        type:String
    },
    lotnumber:{
        type:String
    
    },
    paymentMethod:{
        type: String
    },
    amount:{
        type:String
    },
    authcode:{
        type: String
    },
    renewaldate:{
        type:String
    },
    schedule:{
        type:String

    },
    cleaner:{
        type:String

    },
    site:{
        type:String

    },
    date:{
        type:String 
    }
})

module.exports=mongoose.model('NewList',newListSchema)
