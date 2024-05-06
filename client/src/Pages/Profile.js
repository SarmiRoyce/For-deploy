import React from 'react';
import '../Pages/Profile.css'


function Profile() {
  return (
    <div>
        <div className='profile'>
            <div>
                <img src='' alt='' />
            </div>
            <h1>Profile</h1>

            <label>Name</label><br/>
            <input type='text' placeholder='Enter your name'></input><br/><br/>

            <label>Email Address</label><br/>
            <input type='email' placeholder='Enter your email'></input><br/><br/>

            <label>Shop Name</label><br/>
            <input type='text' placeholder='Enter your shop name'></input><br/>


            <img src='' />
        </div>
      
    </div>
  )
}

export default Profile









// class Profile extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             user: {
//                 name: 'John Mary',
//                 email: 'mary@example.com',
//             }
//         };
//     }

//     render() {
//         const { user } = this.state;

//         return (
//             <div className='design'>
//                 <h1>Profile</h1>
//                 <div style={{marginLeft:'150px'}}>
//                     <img src='' alt='....' />
//                 </div>
//                 <div className='contain1'>
//                     <label style={{fontWeight:'800'}}>Name:</label><br/><br/>
//                     <input type="text" value={user.name} readOnly />
//                 </div><br/>
//                 <div className='contain2'>
//                     <label style={{fontWeight:'800'}}>Email:</label><br/><br/>
//                     <input type="email" value={user.email} readOnly />
//                 </div>
//             </div>
//         );
//     }
// }

// export default Profile;

