// import React, { useState } from 'react';
// import axios from 'axios';
// import '../Pages/Profile.css';

// function Profile() {
//     const [formData, setFormData] = useState({
//       name: 'John Mary',
//       title: 'Senior Beautician | Licensed Cosmetologist',
//       experience: '5 Years',
//       location: 'Vavuniya',
//       image: 'https://t4.ftcdn.net/jpg/03/69/47/87/240_F_369478756_SkWCRczifgskGOYA7HWQ4NjGYeFwqNI9.jpg',
//       services: {
//         HairCutting: false,
//         NailArt: false,
//         Manicure: false,
//         Facial: false,
//         Pedicure: false,
//         EyebrowShape: false,
//         HairColoring: false,
//         NormalMakeup: false,
//         BridalMakeup: false,
//         HairStyle: false,
//         SareeDraping: false,
//         NailEnhancements: false,
//       },
//       email: 'mary@example.com',
//       instagram: '@mary_beauty',
//       businessHours: [{ day: '', time: '' }],
//       works: [
//         {
//           imageFile: null,
//           imageUrl: 'https://i.ytimg.com/vi/IHn--eG--ZM/maxresdefault.jpg',
//           description: 'Wedding hair styling'
//         },
//         {
//           imageFile: null,
//           imageUrl: 'https://e0.pxfuel.com/wallpapers/833/31/desktop-wallpaper-bridal-makeup-makeup-wedding.jpg',
//           description: 'Bridal makeup'
//         },
//         {
//           imageFile: null,
//           imageUrl: 'https://alexsa.co.uk/wp-content/uploads/treatment.jpg',
//           description: 'Facial treatment'
//         },
//       ],
//     });
  
//     const handleChange = (e) => {
//       const { name, value, type, checked } = e.target;
//       setFormData((prevData) => ({
//         ...prevData,
//         [type === 'checkbox' ? 'services' : name]: type === 'checkbox' ? { ...prevData.services, [name]: checked } : value,
//       }));
//     };
  
//     const handleBusinessHoursChange = (index, e) => {
//       const { name, value } = e.target;
//       const newBusinessHours = [...formData.businessHours];
//       newBusinessHours[index][name] = value;
//       setFormData((prevData) => ({
//         ...prevData,
//         businessHours: newBusinessHours,
//       }));
//     };
  
//     const addBusinessHour = () => {
//       setFormData((prevData) => ({
//         ...prevData,
//         businessHours: [...prevData.businessHours, { day: '', time: '' }],
//       }));
//     };
  
//     const removeBusinessHour = (index) => {
//       const newBusinessHours = formData.businessHours.filter((_, i) => i !== index);
//       setFormData((prevData) => ({
//         ...prevData,
//         businessHours: newBusinessHours,
//       }));
//     };
  
//     const handleWorkChange = (index, e) => {
//       const { name, value, files } = e.target;
//       const newWorks = [...formData.works];
//       if (name === 'imageFile') {
//         const file = files[0];
//         const imageUrl = URL.createObjectURL(file);
//         newWorks[index] = { ...newWorks[index], imageFile: file, imageUrl };
//       } else {
//         newWorks[index][name] = value;
//       }
//       setFormData((prevData) => ({
//         ...prevData,
//         works: newWorks,
//       }));
//     };
  
//     const addWork = () => {
//       setFormData((prevData) => ({
//         ...prevData,
//         works: [...prevData.works, { imageFile: null, imageUrl: '', description: '' }],
//       }));
//     };
  
//     const removeWork = (index) => {
//       const newWorks = formData.works.filter((_, i) => i !== index);
//       setFormData((prevData) => ({
//         ...prevData,
//         works: newWorks,
//       }));
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
      
//       const data = new FormData();
//       console.log(data)
//       data.append('data', JSON.stringify({
//           ...formData,
//           works: formData.works.map(work => ({
//               description: work.description,
//               imageFile: undefined
//           }))
//       }));
  
//       formData.works.forEach((work, index) => {
//           if (work.imageFile) {
//               data.append(`works[imageFile]`, work.imageFile);
//           }
//       });
  
//       fetch('http://localhost:3005/beauticianprofile/create', {
//           method: 'POST',
//           body: data,
//       })
//       .then(response => response.json())
//       .then(data => {
//           console.log('Profile saved:', data);
//       })
//       .catch(error => {
//           console.error('There was an error saving the profile!', error);
//       });
//   };
  

//   return (
//     <div className="pro-form">
//       <form onSubmit={handleSubmit}>
//         <div className="profile-header">
//           <img src={formData.image} alt="Beautician's Photo" />
//           <input
//             type="text"
//             name="image"
//             value={formData.image}
//             onChange={handleChange}
//             placeholder="Image URL"
//           />
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             style={{ fontWeight: '600', fontSize: '24px' }}
//           />
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             style={{ fontSize: '18px' }}
//           />
//           <input
//             type="text"
//             name="experience"
//             value={formData.experience}
//             onChange={handleChange}
//             style={{ fontSize: '18px' }}
//           />
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             style={{ fontSize: '18px' }}
//           />
//         </div>

//         <div className="container14">
//           {/* <h3 style={{ fontWeight: '800' }}>Service Offered</h3> */}
//            <a href='/Beauty'>  <button type="submit" className="btn btn-primary">Services</button></a>
//         </div>

//           {/* {Object.keys(formData.services).map((service, index) => (
//             <div key={index} style={{ display: 'flex', width: '250px',marginLeft:'50px' }}>
//               <input
//                 type="checkbox"
//                 name={service}
//                 checked={formData.services[service]}
//                 onChange={handleChange}
//               />
//               <label>{service.replace(/([A-Z])/g, ' $1').trim()}</label>
//             </div>
//           ))} */}
       

//         <div className="container portfolio">
//           <h2 style={{ fontWeight: '600', marginTop: '20px', textAlign: 'center' }}>Works</h2><br />
//           <div className="row">
//             {formData.works.map((work, index) => (
//               <div key={index} className="col-md-4" style={{ marginBottom: '20px' }}>
//                 {work.imageUrl && <img src={work.imageUrl} alt={`Work ${index + 1}`} />}
//                 <input
//                   type="file"
//                   name="imageFile"
//                   onChange={(e) => handleWorkChange(index, e)}
//                   style={{ marginTop: '10px', marginBottom: '10px' }}
//                 />
//                 <input
//                   type="text"
//                   name="description"
//                   value={work.description}
//                   onChange={(e) => handleWorkChange(index, e)}
//                   placeholder="Work Description"
//                   style={{ marginBottom: '10px' }}
//                 />
//                 <button type="button" onClick={() => removeWork(index)}>Remove</button>
//               </div>
//             ))}
//             <button type="button" onClick={addWork}>Add Work</button>
//           </div>
//         </div><br />

//         <div className="container contact">
//           <h2 style={{ fontWeight: '600' }}>Contact Information</h2><br />
//           <input
//             type="text"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//           />
//           <input
//             type="text"
//             name="instagram"
//             value={formData.instagram}
//             onChange={handleChange}
//             placeholder="Instagram"
//           />
//           <div>
//             <h3 style={{ fontWeight: '800',marginTop:'30px' }}>Business Hours</h3>
//             {formData.businessHours.map((hour, index) => (
//               <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//                 <input
//                   type="text"
//                   name="day"
//                   value={hour.day}
//                   onChange={(e) => handleBusinessHoursChange(index, e)}
//                   placeholder="Day"
//                   style={{ marginRight: '10px' }}
//                 />
//                 <input
//                   type="text"
//                   name="time"
//                   value={hour.time}
//                   onChange={(e) => handleBusinessHoursChange(index, e)}
//                   placeholder="Time"
//                   style={{ marginRight: '10px' }}
//                 />
//                 <button type="button" onClick={() => removeBusinessHour(index)}>Remove</button>
//               </div>
//             ))}
//             <button type="button" onClick={addBusinessHour}>Add Business Hour</button>
//           </div>
//         <a href='/showprofile'>  <button type="submit" className="btn btn-primary">Save Profile</button></a>
//         </div>
//       </form>
//     </div>
    
//   );
// }

// export default Profile;

// src/Pages/Profile.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../Pages/Profile.css';

// function Profile() {
//     const [formData, setFormData] = useState({
//         name: 'John Mary',
//         title: 'Senior Beautician | Licensed Cosmetologist',
//         experience: '5 Years',
//         location: 'Vavuniya',
//         // image: 'https://t4.ftcdn.net/jpg/03/69/47/87/240_F_369478756_SkWCRczifgskGOYA7HWQ4NjGYeFwqNI9.jpg',
//         services: {
//             HairCutting: false,
//             NailArt: false,
//             Manicure: false,
//             Facial: false,
//             Pedicure: false,
//             EyebrowShape: false,
//             HairColoring: false,
//             NormalMakeup: false,
//             BridalMakeup: false,
//             HairStyle: false,
//             SareeDraping: false,
//             NailEnhancements: false,
//         },
//         email: 'mary@example.com',
//         instagram: '@mary_beauty',
//         businessHours: [{ day: '', time: '' }],
//         works: [
//             {
//                 imageFile: null,
//                 imageUrl: 'https://i.ytimg.com/vi/IHn--eG--ZM/maxresdefault.jpg',
//                 description: 'Wedding hair styling'
//             },
//             {
//                 imageFile: null,
//                 imageUrl: 'https://e0.pxfuel.com/wallpapers/833/31/desktop-wallpaper-bridal-makeup-makeup-wedding.jpg',
//                 description: 'Bridal makeup'
//             },
//             {
//                 imageFile: null,
//                 imageUrl: 'https://alexsa.co.uk/wp-content/uploads/treatment.jpg',
//                 description: 'Facial treatment'
//             },
//         ],
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [type === 'checkbox' ? 'services' : name]: type === 'checkbox' ? { ...prevData.services, [name]: checked } : value,
//         }));
//     };

//     const handleBusinessHoursChange = (index, e) => {
//         const { name, value } = e.target;
//         const newBusinessHours = [...formData.businessHours];
//         newBusinessHours[index][name] = value;
//         setFormData((prevData) => ({
//             ...prevData,
//             businessHours: newBusinessHours,
//         }));
//     };

//     const addBusinessHour = () => {
//         setFormData((prevData) => ({
//             ...prevData,
//             businessHours: [...prevData.businessHours, { day: '', time: '' }],
//         }));
//     };

//     const removeBusinessHour = (index) => {
//         const newBusinessHours = formData.businessHours.filter((_, i) => i !== index);
//         setFormData((prevData) => ({
//             ...prevData,
//             businessHours: newBusinessHours,
//         }));
//     };

//     const handleWorkChange = (index, e) => {
//         const { name, value, files } = e.target;
//         const newWorks = [...formData.works];
//         if (name === 'imageFile') {
//             const file = files[0];
//             const imageUrl = URL.createObjectURL(file);
//             newWorks[index] = { ...newWorks[index], imageFile: file, imageUrl };
//         } else {
//             newWorks[index][name] = value;
//         }
//         setFormData((prevData) => ({
//             ...prevData,
//             works: newWorks,
//         }));
//     };

//     const addWork = () => {
//         setFormData((prevData) => ({
//             ...prevData,
//             works: [...prevData.works, { imageFile: null, imageUrl: '', description: '' }],
//         }));
//     };

//     const removeWork = (index) => {
//         const newWorks = formData.works.filter((_, i) => i !== index);
//         setFormData((prevData) => ({
//             ...prevData,
//             works: newWorks,
//         }));
//     };

//     const saveProfile = (formData) => {
//         const data = new FormData();
    
//         // Append the JSON data as a blob
//         const json = JSON.stringify({
//             ...formData,
//             works: formData.works.map(work => ({
//                 description: work.description,
//                 imageFile: undefined
//             }))
//         });
//         data.append('data', new Blob([json], { type: 'application/json' }));
    
//         // Append the image files
//         formData.works.forEach((work, index) => {
//             if (work.imageFile) {
//                 data.append(`works[${index}][imageFile]`, work.imageFile);
//             }
//         });
    
//         fetch('cat /proc/sys/fs/inotify/max_user_watches/beauticianprofile/create', {
//             method: 'POST',
//             body: data,
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Profile saved:', data);
//         })
//         .catch(error => {
//             console.error('There was an error saving the profile!', error);
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         saveProfile(formData);
//     };

//     return (
//         <div className="pro-form">
//             <form onSubmit={handleSubmit}>
//                 <div className="profile-header">
//                     {/* <img src={formData.image} alt="Beautician's Photo" />
//                     <input
//                         type="text"
//                         name="image"
//                         value={formData.image}
//                         onChange={handleChange}
//                         placeholder="Image URL"
//                     /> */}
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         style={{ fontWeight: '600', fontSize: '24px' }}
//                     />
//                     <input
//                         type="text"
//                         name="title"
//                         value={formData.title}
//                         onChange={handleChange}
//                         style={{ fontSize: '18px' }}
//                     />
//                     <input
//                         type="text"
//                         name="experience"
//                         value={formData.experience}
//                         onChange={handleChange}
//                         style={{ fontSize: '18px' }}
//                     />
//                     <input
//                         type="text"
//                         name="location"
//                         value={formData.location}
//                         onChange={handleChange}
//                         style={{ fontSize: '18px' }}
//                     />
//                 </div>

//                 <div className="container14">
//                     <Link to="/Beauty">
//                         <button type="button" className="btn btn-primary">Services</button>
//                     </Link>
//                 </div>

//                 <div className="container portfolio">
//                     <h2 style={{ fontWeight: '600', marginTop: '20px', textAlign: 'center' }}>Works</h2><br />
//                     <div className="row">
//                         {formData.works.map((work, index) => (
//                             <div key={index} className="col-md-4" style={{ marginBottom: '20px' }}>
//                                 {work.imageUrl && <img src={work.imageUrl} alt={`Work ${index + 1}`} />}
//                                 <input
//                                     type="file"
//                                     name="imageFile"
//                                     onChange={(e) => handleWorkChange(index, e)}
//                                     style={{ marginTop: '10px', marginBottom: '10px' }}
//                                 />
//                                 <input
//                                     type="text"
//                                     name="description"
//                                     value={work.description}
//                                     onChange={(e) => handleWorkChange(index, e)}
//                                     placeholder="Work Description"
//                                     style={{ marginBottom: '10px' }}
//                                 />
//                                 <button type="button" onClick={() => removeWork(index)}>Remove</button>
//                             </div>
//                         ))}
//                         <button type="button" onClick={addWork}>Add Work</button>
//                     </div>
//                 </div><br />

//                 <div className="container contact">
//                     <h2 style={{ fontWeight: '600' }}>Contact Information</h2><br />
//                     <input
//                         type="text"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Email"
//                     />
//                     <input
//                         type="text"
//                         name="instagram"
//                         value={formData.instagram}
//                         onChange={handleChange}
//                         placeholder="Instagram"
//                     />
//                     <div>
//                         <h3 style={{ fontWeight: '800', marginTop: '30px' }}>Business Hours</h3>
//                         {formData.businessHours.map((hour, index) => (
//                             <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//                                 <input
//                                     type="text"
//                                     name="day"
//                                     value={hour.day}
//                                     onChange={(e) => handleBusinessHoursChange(index, e)}
//                                     placeholder="Day"
//                                     style={{ marginRight: '10px' }}
//                                 />
//                                 <input
//                                     type="text"
//                                     name="time"
//                                     value={hour.time}
//                                     onChange={(e) => handleBusinessHoursChange(index, e)}
//                                     placeholder="Time"
//                                     style={{ marginRight: '10px' }}
//                                 />
//                                 <button type="button" onClick={() => removeBusinessHour(index)}>Remove</button>
//                             </div>
//                         ))}
//                         <button type="button" onClick={addBusinessHour}>Add Business Hour</button>
//                     </div>
//                     <button type="submit" className="btn btn-primary" style={{ marginTop: '20px' }}>Save Profile</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Profile;







import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../Pages/Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  const { serviceData } = location.state || { serviceData: [] };
  console.log(serviceData); // Log to check if serviceData is received

  const [formData, setFormData] = useState({
    name: 'John Mary',
    title: 'Senior Beautician | Licensed Cosmetologist',
    experience: '5 Years',
    location: 'Vavuniya',
    image: 'https://t4.ftcdn.net/jpg/03/69/47/87/240_F_369478756_SkWCRczifgskGOYA7HWQ4NjGYeFwqNI9.jpg',
    services: [],
    email: 'mary@example.com',
    instagram: '@mary_beauty',
    businessHours: [{ day: '', time: '' }],
    works: [
      {
        imageFile: null,
        imageUrl: 'https://i.ytimg.com/vi/IHn--eG--ZM/maxresdefault.jpg',
        description: 'Wedding hair styling',
      },
      {
        imageFile: null,
        imageUrl: 'https://e0.pxfuel.com/wallpapers/833/31/desktop-wallpaper-bridal-makeup-makeup-wedding.jpg',
        description: 'Bridal makeup',
      },
      {
        imageFile: null,
        imageUrl: 'https://alexsa.co.uk/wp-content/uploads/treatment.jpg',
        description: 'Facial treatment',
      },
    ],
  });
  const [isServiceDataReceived, setIsServiceDataReceived] = useState(false);

  useEffect(() => {
    if (!isServiceDataReceived && serviceData.length > 0) {
      setFormData(prevFormData => ({
        ...prevFormData,
        services: serviceData,
      }));
      setIsServiceDataReceived(true);
    }
  }, [serviceData, isServiceDataReceived]);

  console.log(formData.services); // Log to check if formData.services is populated

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [type === 'checkbox' ? 'services' : name]: type === 'checkbox' ? { ...prevData.services, [name]: checked } : value,
    }));
  };

  const handleBusinessHoursChange = (index, e) => {
    const { name, value } = e.target;
    const newBusinessHours = [...formData.businessHours];
    newBusinessHours[index][name] = value;
    setFormData((prevData) => ({
      ...prevData,
      businessHours: newBusinessHours,
    }));
  };

  const addBusinessHour = () => {
    setFormData((prevData) => ({
      ...prevData,
      businessHours: [...prevData.businessHours, { day: '', time: '' }],
    }));
  };

  const removeBusinessHour = (index) => {
    const newBusinessHours = formData.businessHours.filter((_, i) => i !== index);
    setFormData((prevData) => ({
      ...prevData,
      businessHours: newBusinessHours,
    }));
  };

  const handleWorkChange = (index, e) => {
    const { name, value, files } = e.target;
    const newWorks = [...formData.works];
    if (name === 'imageFile') {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      newWorks[index] = { ...newWorks[index], imageFile: file, imageUrl };
    } else {
      newWorks[index][name] = value;
    }
    setFormData((prevData) => ({
      ...prevData,
      works: newWorks,
    }));
  };

  const addWork = () => {
    setFormData((prevData) => ({
      ...prevData,
      works: [...prevData.works, { imageFile: null, imageUrl: '', description: '' }],
    }));
  };

  const removeWork = (index) => {
    const newWorks = formData.works.filter((_, i) => i !== index);
    setFormData((prevData) => ({
      ...prevData,
      works: newWorks,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    console.log(data);
    data.append('data', JSON.stringify({
      ...formData,
      works: formData.works.map(work => ({
        description: work.description,
        imageFile: undefined,
      })),
    }));

    formData.works.forEach((work, index) => {
      if (work.imageFile) {
        data.append(`works[imageFile]`, work.imageFile);
      }
    });

    fetch('cat /proc/sys/fs/inotify/max_user_watches/beauticianprofile/create', {
      method: 'POST',
      body: data,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Profile saved:', data);
      })
      .catch(error => {
        console.error('There was an error saving the profile!', error);
      });
  };
  return (
    <div className='pro-form5'>
    <div className="pro-form">
      <form onSubmit={handleSubmit}>
        <div className="profile-header">
          <img src={formData.image} alt="Beautician's Photo" />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ fontWeight: '600', fontSize: '24px' }}
          />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={{ fontSize: '18px' }}
          />
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            style={{ fontSize: '18px' }}
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            style={{ fontSize: '18px' }}
          />
        </div>

        <div className="container14">
            <Link to="/Beauty">
                <button type="button" className="btn btn-primary">Services</button>
            </Link>
        </div>


       

        <div className="container portfolio">
          <h2 style={{ fontWeight: '600', marginTop: '20px', textAlign: 'center' }}>Works</h2><br />
          <div className="row">
            {formData.works.map((work, index) => (
              <div key={index} className="col-md-4" style={{ marginBottom: '30px' }}>
                {work.imageUrl && <img src={work.imageUrl} alt={`Work ${index + 1}`} />}
                <input
                  type="file"
                  name="imageFile"
                  onChange={(e) => handleWorkChange(index, e)}
                  style={{ marginTop: '10px', marginBottom: '10px' }}
                />
                <input
                  type="text"
                  name="description"
                  value={work.description}
                  onChange={(e) => handleWorkChange(index, e)}
                  placeholder="Work Description"
                  style={{ marginBottom: '10px' }}
                />
                <button type="button" onClick={() => removeWork(index)}>Remove</button>
              </div>
            ))}
            <button type="button" onClick={addWork}>Add Work</button>
          </div>
        </div><br />

        <div className="container contact">
          <h2 style={{ fontWeight: '600' }}>Contact Information</h2><br />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="text"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            placeholder="Instagram"
          />
          <div>
            <h3 style={{ fontWeight: '800',marginTop:'30px' }}>Business Hours</h3>
            {formData.businessHours.map((hour, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <input
                  type="text"
                  name="day"
                  value={hour.day}
                  onChange={(e) => handleBusinessHoursChange(index, e)}
                  placeholder="Day"
                  style={{ marginRight: '10px' }}
                />
                <input
                  type="text"
                  name="time"
                  value={hour.time}
                  onChange={(e) => handleBusinessHoursChange(index, e)}
                  placeholder="Time"
                  style={{ marginRight: '10px' }}
                />
                <button type="button" onClick={() => removeBusinessHour(index)}>Remove</button>
              </div>
            ))}
            <button type="button" onClick={addBusinessHour}>Add Business Hour</button>
          </div>
        <a href='/showprofile'>  <button type="submit" className="btn btn-primary">Save Profile</button></a>
        </div>
      </form>
    </div>
    </div>
    
  );
}

export default Profile;
