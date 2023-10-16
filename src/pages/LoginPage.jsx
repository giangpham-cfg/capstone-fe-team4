// import React, { useState } from 'react';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onLogin(username, password);
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <input type="submit" value="Sign In" />
//         <p>Don't have an account? <a href="#">Sign-up here</a></p>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import { useState } from "react";

// import { useNavigate, useOutletContext } from "react-router-dom";
// import { API } from "../api";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   // console.log(username, password);

//   const { setToken } = useOutletContext();

//   const navigate = useNavigate();

//   async function handleLogin(e) {
//     e.preventDefault();

//     const res = await fetch(`${API}/users/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username,
//         password,
//       }),
//     });
//     const info = await res.json();

//     if (!info.success) {
//       return setError(info.error);
//     }
//     // console.log(info);
//     setToken(info.token);
//     localStorage.setItem("token", info.token);
//     // redirect user to "/"
//     navigate("/");
//   }

//   return (
//     <div>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Username"
//           onChange={(e) => setUsername(e.target.value)}
//           value={username}
//         />
//         <input
//           type="text"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//           value={password}
//         />
//         <button>Login</button>
//       </form>
//       <p>{error}</p>
//     </div>
//   );
// }
