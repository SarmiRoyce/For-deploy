const Mongoose = require ("mongoose");
const schema = new Mongoose.Schema({
    experience:{
        type:String
    },
    name:{
        type:String
    },
    service:{
        type:String
    }
})

const Beauticianprofile = Mongoose.model('Beauticianprofile',schema);
module.exports = Beauticianprofile;