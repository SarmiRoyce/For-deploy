const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


// Create
exports.getPackage = (req, res) => {
  const package = Package.find()
       .then(packages => {
           res.status(200).json(packages);
       })
       .catch(err => {
           res.status(500).json({ message: 'Something went wrong' });
       });
};

// Post
exports.createPackage = async (req, res) => { 
  const package = new Package (req.body) 
  package.save()
  .then(() => {
      res.status(201).send(package);
  })
  .catch(err => {
      res.status(500).send(err);
  });
};
exports.getPackageid = async (req, res) => {
  try {
      const user = await Package.findById(req.params.id);
      res.status(200).json(user);
  }
  catch (error) {
      res.status(400).send(error);
  }
};


// // Update
// exports.updateUserid = async (req, res) => {
//   try {
//     const {id} = req.params
//     await User.findByIdAndUpdate(id, req.body);
//     const user = await User.findById(id);
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };


// // Delete
// exports.deleteUser = async (req, res) => {
//   const id = req.params.id;
//   try {
//       const user = await User.findOneAndDelete({ _id: id });
//       if (!user) {
//           return res.status(404).json({ message: 'User not found' });
//       }
//       res.status(200).json({ message: 'User deleted successfully' });
//   } catch (err) {
//       res.status(500).json({ message: 'Something went wrong' });
//   }
// };



// const beauticians = [
//   { id:1, name: 'Ann Julie', packages: ['Hair Cutting', 'Manicure'] },
//   { id:5, name: 'Shoba', packages: ['Hair Cutting', 'Nail Art'] },
//   { id:8, name: 'Meenakshi', packages: ['Facial', 'Pedicure'] },
// ];



app.get('/api/beauticians/:package', (req, res) => {
  const packageName = req.params.package;
  const offeringBeauticians = beauticians.filter(beautician => beautician.packages.includes(packageName));
  res.json(offeringBeauticians);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
