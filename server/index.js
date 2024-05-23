const express = require('express');
const connectDb = require("./DB/Connect");
const bodyParser = require('body-parser');
const cors = require('cors');
// const Beauty = require('./Pages/Beautypro');


// add a stripe key
const stripe = require('stripe')("sk_test_51PIkTWSIoegrYwWK0OKVuJPhNJ4pxsWsR9dtBXWVJ85b2uJGlYowDkyCtZA1NYuHoxRhYA6tZFMNtAGcPV8He6wJ00FewUhuTE");
const { v4: uuidv4 } = require('uuid');


const app = express();
app.use(bodyParser.json());
// connectDb();

// middle ware
app.use(express.json());
app.use(cors()); 

// routes
app.get('/', (req, res) => {
    res.send("IT WORKS AT LEARNCODEONLINE");
});

app.post('/Payment', (req, res) => {
    const {product, token} = req.body;
    console.log("PRODUCT", product);
    console.log("PRICE", product.price);
    // const idempontencyKey = uuid()

    return stripe.customers.create({
        email: token.email,
        source: token.id,
    }).then(customer => {
         stripe.charges.create({
        //     amount: product.price * 100,
        //     currency: 'usd',
        //     customer: customer.id,
        //     receipt_email: token.email,
            // description: `purchase of product.name`,
            // shipping: {
            //     name: token.card.name,
            //     address: {
            //         country: token.card.address_country
            //     }
            // }
        // }, {idempontencyKey})
        amount: product.price * 100,
            currency: "LKR",
            customer: customer.id,
            receipt_email: token.email,
            description: `purchase of ${product.name}`,
            shipping: {
                name: token.card.name,
                address: {
                    country: token.card.address_country,
                }
            }
        }, 
        // { idempotencyKey }
    );
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err) )
})

// listen
// app.listen(3002, () => console.log("LISTENING AT PORT 3002"));


connectDb()

// console.log("Hello")
















// BEAUTICIAN FETCHING
// import React, { useState, useEffect } from 'react';
// import Navbar from '../Components/nav';
// import Footer from '../Components/Footer';
// import './Beauticians.css';

// function Beautician() {
//   // State to store the fetched beautician data
//   const [beauticians, setBeauticians] = useState([]);

//   // Effect to fetch beautician data when the component mounts
//   useEffect(() => {
//     // Fetch data from your backend API endpoint
//     fetch('http://localhost:5000/api/beauticians')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Set the fetched data to the state
//         setBeauticians(data);
//       })
//       .catch(error => {
//         // Handle error
//         console.error('Error fetching beauticians:', error);
//       });
//   }, []); // Empty dependency array to run this effect only once on component mount

//   return (
//     <div className='beauty'>
//       <Navbar />
//       <h1 style={{ marginTop: '30px' }}>Beautician Team</h1>
//       <div className="card-container">
//         {beauticians.map(beautician => (
//           <div className="card" key={beautician.id} style={{ width: '18rem' }}>
//             <img src={beautician.imageUrl} className="card-img-top" alt="..." style={{ padding: '10px', width: '285px', height: '220px' }} />
//             <div className="card-body">
//               <h5 className="card-title">{beautician.name}</h5>
//               {/* Displaying rating stars */}
//               <div>
//                 {[...Array(beautician.rating)].map((_, index) => (
//                   <span key={index} className="fa fa-star checked" style={{ color: 'yellow' }} />
//                 ))}
//               </div>
//               <br /><br />
//               <a href="/Beauty"><button className='btn12'>View Profile</button></a>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Beautician;






// EACH ONE BY ONE BEAUTICIAN PROFILE
// // Import necessary modules
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Navbar from '../Components/nav';
// import Footer from '../Components/Footer';
// import BeauticianProfile from './BeauticianProfile'; // Import the component for displaying individual beautician's profile

// function Beautician() {
//     return (
//         <div className='beauty'>
//             <Router>
//                 <Navbar />
//                 <h1 style={{ marginTop: '30px' }}>Beautician Team</h1>
//                 <div className="card1" style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '50px' }}>
//                     {/* Loop through your list of beauticians */}
//                     {beauticians.map((beautician, index) => (
//                         <div key={index}>
//                             <div className="card" style={{ width: '18rem' }}>
//                                 <img src={beautician.image} className="card-img-top" alt="..." style={{ padding: '10px', width: '285px', height: '220px' }} />
//                                 <div className="card-body">
//                                     <h5 className="card-title">{beautician.name}</h5>
//                                     {/* Display star ratings */}
//                                     <div>
//                                         {Array.from({ length: beautician.rating }, (_, i) => (
//                                             <span key={i} className="fa fa-star checked" style={{ color: 'yellow' }} />
//                                         ))}
//                                     </div>
//                                     <br /><br />
//                                     {/* Link to the profile page of the beautician */}
//                                     <Link to={`/beautician/${index}`}><button className='btn12'>View Profile</button></Link>
//                                 </div>
//                             </div><br />
//                         </div>
//                     ))}
//                 </div>
//                 {/* Define routes for each beautician's profile */}
//                 <Switch>
//                     {beauticians.map((beautician, index) => (
//                         <Route key={index} path={`/beautician/${index}`}>
//                             <BeauticianProfile beautician={beautician} />
//                         </Route>
//                     ))}
//                 </Switch>
//                 <Footer />
//             </Router>
//         </div>
//     )
// }

// // Sample data for beauticians
// const beauticians = [
//     {
//         name: "Ann Julie",
//         image: "https://img.freepik.com/premium-photo/beautician-with-female-client-parlor-gorgeous-bridal-makeup_94574-2254.jpg",
//         rating: 5, // Sample rating
//         // Add other profile information
//     },
//     // Add other beauticians
// ];

// export default Beautician;







// PACKAGE OF BEAUTICIAN
// import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../Components/nav';
// import Footer from '../Components/Footer';
// import '../Pages/Packages.css';

// // Import the list of beauticians
// import { beauticians } from './Beauticians';

// function Packages() {
//   // Function to filter beauticians based on the package they offer
//   const getBeauticiansByPackage = (packageType) => {
//     return beauticians.filter(beautician => beautician.packages.includes(packageType));
//   };

//   // Define package types
//   const packageTypes = [
//     { name: "Hair Cutting", image: "https://www.onlinedegree.com/wp-content/uploads/2017/02/beautician.jpg" },
//     { name: "Nail Art", image: "https://media.istockphoto.com/id/1289189250/photo/fashionable-multicolored-manicure.jpg?s=612x612&w=0&k=20&c=2G0Zcpt4VvkLxdz77XH-IECSdM-pnReuREBzYobCSLs=" },
//     { name: "Manicure", image: "https://www.bodycraft.co.in/wp-content/uploads/manicurist-master-makes-manicure-woman-s-hands-spa-treatment-concept.jpg" },
//     // Add more package types as needed
//   ];

//   return (
//     <div className='beauty'>
//       <Navbar />
//       <h1 style={{ marginTop: '30px' }}>Beautician's Packages</h1>
//       <div className="card1" style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '60px' }}>
//         {packageTypes.map((packageType, index) => (
//           <Link to={`/package/${index}`} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
//             <div className="card" style={{ width: '18rem' }}>
//               <img src={packageType.image} className="card-img-top" alt="..." style={{ padding: '10px', width: '285px', height: '220px' }} />
//               <div className="card-body">
//                 <h5 className="card-title">{packageType.name}</h5>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//       {/* Define routes for each package type */}
//       {packageTypes.map((packageType, index) => (
//         <Route key={index} path={`/package/${index}`}>
//           <PackageDetail packageType={packageType} beauticians={getBeauticiansByPackage(packageType.name)} />
//         </Route>
//       ))}
//       <Footer />
//     </div>
//   )
// }

// // Component to display beauticians offering a specific package
// const PackageDetail = ({ packageType, beauticians }) => {
//   return (
//     <div>
//       <h2>{packageType.name}</h2>
//       <div>
//         {beauticians.map((beautician, index) => (
//           <div key={index}>
//             <h3>{beautician.name}</h3>
//             {/* Display other details about the beautician */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Packages;


