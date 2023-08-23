import React, { useState } from 'react';

const FormValidator = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const [passwordConfirm, setPasswordConfirm] = useState('');
const [validateEmail, setvalidateEmail]  = useState(false);

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setvalidateEmail(validateEmailFormat(newEmail));
    
  
  };
  const validateEmailFormat = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (!validatePassword(newPassword)) 
    {setPasswordConfirm(true)};
   

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
          {/* {emailError && <p>{emailError}</p>} */}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
          {/* {passwordError && <p>{passwordError}</p>} */}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidator;
