const Mongoose = require ("mongoose");
const schema = new Mongoose.Schema({
    id:{
        type:String
    },
    name:{
        type:String
    },
    rating:{
        type:String
    }
})

const Rating = Mongoose.model('Rating',schema);
module.exports = Rating;