// const User = require('../Models/Beauticianprofile.model');



// // Create
// exports.getBeautician = (req, res) => {
//    const beautician = User.find()
//         .then(users => {
//             res.status(200).json(beautician);
//         })
//         .catch(err => {
//             res.status(500).json({ message: 'Something went wrong' });
//         });
// };

// // Post
// exports.createBeautician = async (req, res) => { 
//     const beautician = new User (req.body) 
//     beautician.save()
//     .then(() => {
//         res.status(201).send(beautician);
//     })
//     .catch(err => {
//         res.status(500).send(err);
//     });
// };


// exports.getBeauticianid = async (req, res) => {
//     try {
//         const beautician = await User.findById(req.params.id);
//         res.status(200).json(beautician);
//     }
//     catch (error) {
//         res.status(400).send(error);
//     }
// };


// // Update
// exports.updateBeauticianid = async (req, res) => {
//     const id = req.params.id;
//     try {
//         const beautician = await User.findByIdAndUpdate({ _id: id });
//         if (!beautician) {
//             return res.status(404).json({ message: 'Beautician not found' });
//         }
//         res.status(200).json({ message: 'Beautician updated successfully' });
//     } catch (err) {
//         res.status(500).json({ message: 'Something went wrong' });
//     }
// };


// // Delete
// exports.deleteBeautician = async (req, res) => {
//     const id = req.params.id;
//     try {
//         const beautician = await Beautician.findOneAndDelete({ _id: id });
//         if (!beautician) {
//             return res.status(404).json({ message: 'Beautician  not found' });
//         }
//         res.status(200).json({ message: 'Beautician  deleted successfully' });
//     } catch (err) {
//         res.status(500).json({ message: 'Something went wrong' });
//     }
// };


// const Profile = require('../Models/Beauticianprofile.model');
// const path = require('path');
// // const Beauty = require('./Pages/Beautypro');
// // const Services = require('../Models/Beauticianprofile.model')

// exports.createProfile = async (req, res) => {
//   try {
//     const profileData = JSON.parse(req.body.data);
//     console.log(profileData)
//     // const works = req.files.map((file, index) => ({
//     //   imageFile: file.filename,
//     //   imageUrl: `/uploads/${file.filename}`,
//     //   description: profileData.works[index].description,
//     // }));

//     const profile = new Profile({
//       ...profileData,
//       // works,
//     });

//     await profile.save();
//     res.status(201).send(profile);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

// exports.getProfiles = async (req, res) => {
//   try {
//     const profile = await Profile.findOne(); 
//     res.json(profile);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.updateService = async (req, res) => {
//   const {id} = req.params
//   // const {services} = req.body
//   try {

//     // console.log(data.services)
//     // const beautyId = req.params.id;

//     console.log(id)
    

//     const beauty = await Profile.findByIdAndUpdate(
//       id,
//       req.body,
//       // {services:services},
//       {new:true}
//     );


//     console.log(beauty)
//     res.json(beauty)


//   } catch (error) {
//     res.status(500).json({ error: error.message });
//     console.log(error)
//   }
// };

// exports.viewProfiles = async (req, res) => {
//   try {
//     const beauticians = await Profile.find();
//     res.json(beauticians);
// } catch (err) {
//     res.status(500).json({ message: err.message });
// }
// };



// exports.getUniqueServices = async (req, res) => {
//   try {
//     const profiles = await Profile.find({}, 'services'); // Fetch only the services field from all profiles
//     const servicesSet = new Set();

//     profiles.forEach(profile => {
//       profile.services.forEach(service => {
//         servicesSet.add(service);
//       });
//     });

//     const uniqueServices = Array.from(servicesSet);
//     res.json(uniqueServices);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };






// exports.get('/beauticianprofile/view', async (req, res) => {
//   try {
//     const beauticians = await Beautician.find();
//     const packages = [...new Set(beauticians.flatMap(beautician => beautician.packages))];
//     res.json(packages);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// exports.get('/beauticians/package/:packageName', async (req, res) => {
//   try {
//     const { packageName } = req.params;
//     const beauticians = await Beautician.find({ packages: packageName });
//     res.json(beauticians);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });












// const User = require('../Models/Beauticianprofile.model');



// // Create
// exports.getBeautician = (req, res) => {
//    const beautician = User.find()
//         .then(users => {
//             res.status(200).json(beautician);
//         })
//         .catch(err => {
//             res.status(500).json({ message: 'Something went wrong' });
//         });
// };

// // Post
// exports.createBeautician = async (req, res) => { 
//     const beautician = new User (req.body) 
//     beautician.save()
//     .then(() => {
//         res.status(201).send(beautician);
//     })
//     .catch(err => {
//         res.status(500).send(err);
//     });
// };


// exports.getBeauticianid = async (req, res) => {
//     try {
//         const beautician = await User.findById(req.params.id);
//         res.status(200).json(beautician);
//     }
//     catch (error) {
//         res.status(400).send(error);
//     }
// };


// // Update
// exports.updateBeauticianid = async (req, res) => {
//     const id = req.params.id;
//     try {
//         const beautician = await User.findByIdAndUpdate({ _id: id });
//         if (!beautician) {
//             return res.status(404).json({ message: 'Beautician not found' });
//         }
//         res.status(200).json({ message: 'Beautician updated successfully' });
//     } catch (err) {
//         res.status(500).json({ message: 'Something went wrong' });
//     }
// };


// // Delete
// exports.deleteBeautician = async (req, res) => {
//     const id = req.params.id;
//     try {
//         const beautician = await Beautician.findOneAndDelete({ _id: id });
//         if (!beautician) {
//             return res.status(404).json({ message: 'Beautician  not found' });
//         }
//         res.status(200).json({ message: 'Beautician  deleted successfully' });
//     } catch (err) {
//         res.status(500).json({ message: 'Something went wrong' });
//     }
// };


const Profile = require('../Models/Beauticianprofile.model');
const path = require('path');

exports.createProfile = async (req, res) => {
  try {
    const profileData = JSON.parse(req.body.data);
    const works = req.files.map((file, index) => ({
      imageFile: file.filename,
      imageUrl: `/uploads/${file.filename}`,
      description: profileData.works[index].description,
    }));

    const profile = new Profile({
      ...profileData,
      works,
    });

    await profile.save();
    res.status(201).send(profile);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getProfiles = async (req, res) => {
  try {
    const profile = await Profile.findOne(); 
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateService = async (req, res) => {
  try {
    const data = req.body
    console.log(data.services)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getServices = async (req, res) => {
  try {
    const beauticians = await Services.find();
    res.json(beauticians);
} catch (err) {
    res.status(500).json({ message: err.message });
}
};

exports.viewProfiles = async (req, res) => {
  try {
    const beauticians = await Profile.find();
    res.json(beauticians);
} catch (err) {
    res.status(500).json({ message: err.message });
}
};
