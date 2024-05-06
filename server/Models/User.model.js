const Mongoose = require ("mongoose");
const schema = new Mongoose.Schema({
    email:{
        type:String
    },
    name:{
        type:String
    },
    password:{
        type:String
    }
})

const Users = Mongoose.model('Users',schema);
module.exports = Users;