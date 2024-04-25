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
  
})
const Model = Mongoose.model('users',schema);
module.exports = Model;