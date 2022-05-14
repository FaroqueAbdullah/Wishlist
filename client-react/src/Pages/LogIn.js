import InputField from '../Components/InputField';
import SubmitButton from '../Components/SubmitButton';

function LogIn() {
  return (
    <div className="w-full tablet:w-1/2 p-2 flex justify-center items-center flex-col mb-3">
      <InputField lebel="Email" />
      <InputField lebel="Password"/>
      <SubmitButton lebel="Log In" />
    </div>
  );
}

export default LogIn;