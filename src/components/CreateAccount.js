import React, { useState } from "react";
import axios from "axios";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCreateAccount = () => {
    // Assuming you are using axios for API requests
    axios
      .post("/api/register", { username, password, email })
      .then((response) => {
        // Handle successful account creation
        console.log(response.data);
      })
      .catch((error) => {
        // Handle account creation error
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Create Account</h2>
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
};

export default CreateAccount;
