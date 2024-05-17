const Mongoose = require ("mongoose");
const schema = new Mongoose.Schema({
    experience:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    packages:{
        type:String,
        require:true,
    },
    works:{
        type:String,
        require:true,
    },
})

const Beauticianprofile = Mongoose.model('Beauticianprofile',schema);
module.exports = Beauticianprofile;