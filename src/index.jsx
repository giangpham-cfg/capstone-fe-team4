// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './src/components/Home';
// import Login from './src/components/Login';
// import { setupNavbar } from './src/Navigation/index';
// import './index.css';

// const App = () => {
//   const [isLoggedin, setIsLoggedin] = useState(false);

//   const handleLogin = (username, password) => {
//     console.log('Username:', username);
//     console.log('Password:', password);
//     setIsLoggedin(true);
//   };

//   useEffect(() => {
//     setupNavbar();
//   }, []);

//   return (
//     <BrowserRouter>
//       <React.StrictMode>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login onLogin={setIsLoggedin} />} />
//         </Routes>
//         {isLoggedin ? <SomeLoggedInComponent /> : <SomeLoggedOutComponent />}
//       </React.StrictMode>
//     </BrowserRouter>
//   );
// };
