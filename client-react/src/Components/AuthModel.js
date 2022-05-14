import BrandIcon from './BrandIcon';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import LogIn from '../Pages/LogIn';
import SignUp from '../Pages/SignUp';

function AuthModel() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-30 bg-gray-tertiary flex justify-center items-center">
      <div className="w-full flex-col tablet:w-1/2 tablet:flex-row laptop:w-1/3 laptop:flex-row bg-white-primary m-2 opacity-100 flex rounded-md">
        <div className="w-full pt-4 tablet:pt-0 tablet:w-1/2 flex justify-center items-center flex-col">
          <BrandIcon />
          <SubmitButton lebel="Sign In" />
        </div>
        <SignUp />
      </div>
    </div>
  );
}

export default AuthModel;