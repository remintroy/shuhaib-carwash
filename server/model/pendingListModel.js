const mongoose=require('mongoose')

const pendingListSchema=mongoose.Schema({
    contractNo:{
        type:Number,
        required:true,
        unique:true
    },
    mobile:{
        type:Number,
        required:true
    },
    building:{
        type:String,

    },
    plateNo:{
        type:Number
    },
    flatNo:{
        type:Number
    },
    lotNo:{
        type:Number
    
    },
    VAT:{
        type:Number
    },
    renewalDate:{
        type:Date
    },
    sun:{
           type:String
    },
    mon:{
        type:String
 },
 tue:{
    type:String
},
wed:{
    type:String
},
thr:{
    type:String
},
fri:{
    type:String
},
Status:{
   type:String
},
pem:{
   type:String

},
cleaner:{
    type:String
},
site:{
    type:String
}
})

module.exports=mongoose.model('Admin',pendingListSchema)