const Mongoose = require ("mongoose");
const schema = new Mongoose.Schema ({
    Email: {
        type:String,
        require:true,
        unique:true,
    },
    Password: {
        type:String,
        require:true,
    },
    Name: {
        type:String,
        require:true,
    },
    Shopregistrationnumber: {
        type:String,
        require:true,
    },
    Shopplace: {
        type:String,
        require:true,
    },
    Coursecertificates: {
        type:String,
        require:true,
    },
  
})
const Model = Mongoose.model('beautician',schema);
module.exports = Model;