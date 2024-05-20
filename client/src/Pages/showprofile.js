import React, { useEffect, useState } from 'react';

function ViewProfile() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('http://localhost:3002/beauticianprofile/view');
        if (!response.ok) {
          throw new Error(`Failed to fetch profile data: ${response.statusText}`);
        }
        const data = await response.json();
        setProfileData(data);
      } catch (err) {
        setError(err.message);
        console.error('There was an error fetching the profile data!', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profileData) {
    return <div>No profile data available</div>;
  }

  return (
    <div>
      <div className="profile-header">
        <img src={profileData.image} alt="Beautician's Photo" />
        <h1>{profileData.name}</h1>
        <h2>{profileData.title}</h2>
        <p>{profileData.experience}</p>
        <p>{profileData.location}</p>
      </div>

      <div className="container">
        <h3 style={{ fontWeight: '800' }}>Services Offered</h3>
        <ul>
          {profileData.services && Object.keys(profileData.services).map((service, index) => (
            profileData.services[service] && <li key={index}>{service.replace(/([A-Z])/g, ' $1').trim()}</li>
          ))}
        </ul>
      </div>

      <div className="container portfolio">
        <h2 style={{ fontWeight: '600', marginTop: '20px', textAlign: 'center' }}>Works</h2><br />
        <div className="row">
          {profileData.works && profileData.works.map((work, index) => (
            <div key={index} className="col-md-4" style={{ marginBottom: '20px' }}>
              {work.imageUrl && <img src={work.imageUrl} alt={`Work ${index + 1}`} />}
              <p>{work.description}</p>
            </div>
          ))}
        </div>
      </div><br />

      <div className="container contact">
        <h2 style={{ fontWeight: '600' }}>Contact Information</h2><br />
        <p>Email: {profileData.email}</p>
        <p>Instagram: {profileData.instagram}</p>
        <div>
          <h3 style={{ fontWeight: '800' }}>Business Hours</h3>
          <ul>
            {profileData.businessHours && profileData.businessHours.map((hour, index) => (
              <li key={index}>{hour.day}: {hour.time}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ViewProfile;
