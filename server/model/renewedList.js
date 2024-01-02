const mongoose = require('mongoose')

const renewedListSchema = mongoose.Schema({
    contractNo: {
        type: Number,
        required: true,

    },
    plateNo: {
        type: String
    },
    newDate: {
        type: Date
    },
    amount: {
        type: String
    },
    amountRecieved: {
        type: String
    },
    balance: {
        type: String
    },
    paymentMethod: {
        type: String
    },
    cleaner: {
        type: String
    },
    site: {
        type: String
    }
})
module.exports = mongoose.model('ReneewedList', renewedListSchema)
