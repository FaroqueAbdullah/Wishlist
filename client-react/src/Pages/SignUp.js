import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUserRequest } from '../Redux/actions/user';

import InputField from '../Components/InputField';
import SubmitButton from '../Components/SubmitButton';

function SignUp() {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({ name:'', email: '', phoneNumber: '', password: '' });
  const [errors, setErrors] = useState({ name:'', email: '', phoneNumber: '', password: '' });

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
      name: !credentials.name ? 'Name is required' : '',
      email: !credentials.email ? 'Email is required' : '',
      phoneNumber: !credentials.phoneNumber ? 'Phone number is required' : '',
      password: !credentials.password ? 'Password is required' : ''
    });

    if ( !credentials.email || !credentials.password ) return;
    
    dispatch(signUpUserRequest(credentials));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full tablet:w-1/2 p-2 flex justify-center items-center flex-col mb-3">
      <InputField onChange={handleChange} type="text" lebel="Name" name="name" error={errors.name}/>
      <InputField onChange={handleChange} type="email" lebel="Email" name="email" error={errors.email} />
      <InputField onChange={handleChange} type="text" lebel="Phone Number" name="phoneNumber" error={errors.phoneNumber}/>
      <InputField onChange={handleChange} type="password" lebel="Password" name="password" error={errors.password}/>
      <SubmitButton lebel="Sign Up" />
    </form>
  );
}

export default SignUp;