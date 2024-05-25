// const mongoose = require('mongoose');
// // const Beauty = require('./Beauty');




// const workSchema = new mongoose.Schema({
//   imageFile: {
//     type: String,
//   },
//   imageUrl: {
//     type: String,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
// });

// const profileSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   title: { type: String, required: true },
//   experience: { type: String, required: true },
//   location: { type: String, required: true },
//   image: { type: String, required: true },
//   services: {
//     HairCutting, 
//     NailArt, 
//     Manicure, 
//     Facial, 
//     Pedicure, 
//     EyebrowShape, 
//     HairColoring, 
//     NormalMakeup, 
//     BridalMakeup, 
//     HairStyle, 
//     SareeDraping, 
//     NailEnhancements
//   },
//   email: { type: String, required: true },
//   instagram: { type: String, required: true },
//   businessHours: [
//     {
//       day: { type: String, required: true },
//       time: { type: String, required: true },
//     },
//   // 
//   works: [workSchema],
//   services: [servicesSchema],
// });

// module.exports = mongoose.model('Profile', profileSchema);


// server/Models/Beauticianprofile.model.js
// const Mongoose = require('mongoose');
// const {
//   HairCutting,
//   NailArt,
//   Manicure,
//   Facial,
//   Pedicure,
//   EyebrowShape,
//   HairColoring,
//   NormalMakeup,
//   BridalMakeup,
//   HairStyle,
//   SareeDraping,
//   NailEnhancements
// } = require('./beauty');

// // const beauticianSchema = new Mongoose.Schema({
// //   name: String,
// //   packages: [String],
// // });



// const workSchema = new Mongoose.Schema({
//   id:{
//     type:Mongoose.Schema.Types.ObjectId
// },
//   imageFile: {
//     type: String,
//   },
//   imageUrl: {
//     type: String,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
// });

// const profileSchema = new Mongoose.Schema({    
// //   id:{
// //   type:Mongoose.Schema.Types.ObjectId
// // },
//   name: { type: String, required: true },
//   title: { type: String, required: true },
//   experience: { type: String, required: true },
//   location: { type: String, required: true },
//   image: { type: String, required: true },
//   services:{
//     type:[String]
//   },
//   email: { type: String, required: true },
//   instagram: { type: String, required: true },
//   businessHours: [
//     {
//       day: { type: String, 
//         // required: true 
//       },
//       time: { type: String,
//         //  required: true 
//         },
//     },
//   ],
//   works: [workSchema],
//   // Beautician: [beauticianSchema],
// });

// const profile = Mongoose.model('Profile', profileSchema);
// // const Beautician = mongoose.model('Beautician', beauticianSchema);
// module.exports = profile


const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
  imageFile: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
});

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  experience: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  services: {
    type: Array,
    default: [],
  },
  email: { type: String, required: true },
  instagram: { type: String, required: true },
  businessHours: [
    {
      day: { type: String, required: true },
      time: { type: String, required: true },
    },
  ],
  works: [workSchema],
});

module.exports = mongoose.model('Profile', profileSchema);


