import InputField from '../Components/InputField';
import SubmitButton from '../Components/SubmitButton';

function SignUp() {
  return (
    <div className="w-full tablet:w-1/2 p-2 flex justify-center items-center flex-col mb-3">
      <InputField lebel="Name" />
      <InputField lebel="Email" />
      <InputField lebel="Phone Number"/>
      <InputField lebel="Password"/>
      <SubmitButton lebel="Sign Up" />
    </div>
  );
}

export default SignUp;