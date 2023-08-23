import React, { useState } from 'react';

const FormValidator = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const validateEmail = (email) => {
    

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (!validateEmail(newEmail)) {
   
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (!validatePassword(newPassword)) {
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email) && validatePassword(password)) {

      console.log('Form submitted');
    }
  };

  return (
    <div>
      <h1>Khalil form validator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
          {emailError && <p>{emailError}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
          {passwordError && <p>{passwordError}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidator;
