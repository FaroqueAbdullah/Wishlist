function InputField({ lebel }) {
  return (
    <div className="w-full mt-3 mb-1">
      <div className="font-bold text-gray-secondary">{ lebel }</div>
      <input className='w-full border-2 border-gray-secondary rounded-md' />
    </div>
  );
}

export default InputField;