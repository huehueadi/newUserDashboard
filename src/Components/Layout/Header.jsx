// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function Header() {
//   const [userName, setUserName] = useState(''); // State to store user's first name
//   const [isLoading, setIsLoading] = useState(true); // Optional: to handle loading state

//   // Fetch user details on component mount
//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       const token = localStorage.getItem('authToken');
//       if (token) {
//         try {
//           const response = await axios.get('https://zencia-finalbackend.vercel.app/api/user', {
//             headers: {
//               'Authorization': `${token}`,
//             },
//           });
//           const { firstName } = response.data.data;
//           setUserName(firstName);
//         } catch (error) {
//           console.error('Error fetching user details:', error);
       
//           setUserName('User'); 
//         } finally {
//           setIsLoading(false);
//         }
//       } else {
//         setIsLoading(false); 
//       }
//     };

//     fetchUserDetails();
//   }, []);

//   return (
//     <div className="header">
//       <div className="welcome-text">
//         <h1>
//           {isLoading ? 'Loading...' : `Welcome, ${userName || 'User'}!`}
//         </h1>
//         <p>Manage your Zencia Account</p>
//       </div>
//       <div className="header-actions">
//         <button className="btn btn-primary">
//           <span>Get Started</span>
//           <span>→</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Header;



import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Header() {
  const [userName, setUserName] = useState(''); // State to store user's first name
  const [isLoading, setIsLoading] = useState(true); // Optional: to handle loading state

  // Fetch user details on component mount
  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const response = await axios.get('https://zencia-finalbackend.vercel.app/api/user', {
            headers: {
              'Authorization': `${token}`, // Adjust if backend expects 'Bearer ${token}'
            },
          });
          const { firstName } = response.data.data;
          setUserName(firstName); // Set the user's first name
        } catch (error) {
          console.error('Error fetching user details:', error);
          setUserName('User'); // Fallback if API fails
        } finally {
          setIsLoading(false); // Done loading
        }
      } else {
        setIsLoading(false); // No token, skip loading
      }
    };

    fetchUserDetails();
  }, []);

  // Handle logout


  return (
    <div className="header">
      <div className="welcome-text">
        <h1>
          {isLoading ? 'Loading...' : `Welcome, ${userName || 'User'}!`}
        </h1>
        <p>Manage your Zencia Account</p>
      </div>
      <div className="header-actions">
        <button className="btn btn-primary">
          <span>Get Started</span>
          <span>→</span>
        </button>
      
      </div>
    </div>
  );
}

export default Header;
