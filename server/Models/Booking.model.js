const Mongoose = require ("mongoose");
const schema = new Mongoose.Schema({
    beauticianname:{
        type:String
    },
    customername:{
        type:String
    },
    package:{
        type:String
    },
    date:{
        type:String
    },
    time:{
        type:String
    }
})

const Booking = Mongoose.model('Booking',schema);
module.exports = Booking;