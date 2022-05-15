function SubmitButton({ lebel, onButtonSubmit }) {
  return (
    <button 
      onClick={ onButtonSubmit } 
      className='border-2 font-bold border-gray-secondary rounded-md pr-2 pl-2 pt-1 pb-1 mt-3 hover:bg-gray-primary hover:text-white-primary'
    >
      { lebel }
    </button>
  );
}

export default SubmitButton;