// import React, { useState } from 'react';
// import Profile from './Beauticians';
// import Navbar from '../Components/nav';
// import Footer from '../Components/Footer';
// import '../Pages/Packages.css';

// function Packages() {
//   const [selectedPackage, setSelectedPackage] = useState(null);

//   const handlePackageClick = (packageName) => {
//     setSelectedPackage(packageName);
//   };

//   return (
//     <div className='beauty'>
//       <Navbar />
//       <h1 style={{ marginTop: '30px' }}>Beautician's Packages</h1>
//       <div className="card1" style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '60px' }}>
//         <div>
//           <div className="card" style={{ width: '18rem' }} onClick={() => handlePackageClick('Hair Cutting')}>
//             {/* Add your card content for Hair Cutting */}
//           </div>
//           {/* Render other package cards similarly */}
//         </div>
//       </div>
//       {selectedPackage && (
//         <div>
//           <h2>Beauticians offering {selectedPackage}:</h2>
//           <Profile package={selectedPackage} />
//         </div>
//       )}
//       <Footer />
//     </div>
//   );
// }

// export default Packages;
