const Mongoose = require ("mongoose");
const schema = new Mongoose.Schema ({
    email: {
        type:String,
        require:true,
        unique:true,
    },
    password: {
        type:String,
        require:true,
    },
    name: {
        type:String,
        require:true,
    },
    shopregisternumber: {
        type:String,
        unique:true,
        require:true,
    },
    shopplace: {
        type:String,
        require:true,
    },
    coursecertificates: {
        type:String,
        require:true,
    },
  
})

const Beautician = Mongoose.model('Beautician',schema);
module.exports = Beautician;