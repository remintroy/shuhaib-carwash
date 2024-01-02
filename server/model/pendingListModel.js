const mongoose=require('mongoose')

const pendingListSchema=mongoose.Schema({
    contractNo:{
        type:Number,
        required:true,
       
    },
    mobile:{
        type:Number,
        
    },
    building:{
        type:String,

    },
    plateNo:{
        type:String
    },
    flatNo:{
        type:String
    },
    lotNo:{
        type:String
    
    },
    VAT:{
        type:String
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
status:{
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

module.exports=mongoose.model('PendingList',pendingListSchema)