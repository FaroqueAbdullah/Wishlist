import { FaTimes } from "react-icons/fa";
import  { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import BrandIcon from './BrandIcon';
import SubmitButton from './SubmitButton';
import LogIn from '../Pages/LogIn';
import SignUp from '../Pages/SignUp';

function AuthModel({ showModel, closeModel }) {
  const user = useSelector(state => state.user);

  const [isLogIn, setIsLogIn] = useState(true);
  const [serverError, setServerError] = useState('');

  const handleLoginOrSignUp = () => {
    setIsLogIn(!isLogIn);
  }

  useEffect(() => {
    if (!user.authenticated) {
      setServerError(user.msssage);
    } else if( showModel ) {
      closeModel()
    }
  }, [user, showModel, closeModel]);

  return (
    <>
    {
      showModel &&
        <div className="absolute top-0 left-0 w-full h-full z-30 bg-gray-tertiary flex justify-center items-center">
          <div className="w-full relative flex-col tablet:w-1/2 tablet:flex-row laptop:w-1/3 laptop:flex-row bg-white-primary m-2 opacity-100 flex rounded-md">
            <div className="absolute top-2 right-2 cursor-pointer" onClick={closeModel}><FaTimes /></div>
            <div className="w-full pt-5 tablet:pt-3 tablet:w-1/2 flex justify-center items-center flex-col">
              <BrandIcon />
              <SubmitButton lebel={ isLogIn ? "Sign In" : "Log In"} onButtonSubmit={ handleLoginOrSignUp }/>
              <p className="mt-1 text-red-primary">{ serverError }</p>
            </div>
            { isLogIn ? <LogIn /> : <SignUp /> }
          </div>
        </div>
    }
    </>
  );
}

export default AuthModel;