import  { useState } from 'react';

import InputField from '../Components/InputField';
import SubmitButton from '../Components/SubmitButton';

function LogIn() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors({
      ...errors,
      email: !credentials.email ? 'Email is required' : '',
      password: !credentials.password ? 'Password is required' : ''
    });

    if ( !credentials.email || !credentials.password ) return;
    
    console.log('dsafsafd', credentials);
    
  };

  return (
    <form onSubmit={handleSubmit} className="w-full tablet:w-1/2 p-2 flex justify-center items-center flex-col mb-3">
      <InputField onChange={handleChange} type="email" lebel="Email" name="email" error={errors.email}/>
      <InputField onChange={handleChange} type="password" lebel="Password" name="password" error={errors.password}/>
      <SubmitButton lebel="Log In" />
    </form>
  );
}

export default LogIn;