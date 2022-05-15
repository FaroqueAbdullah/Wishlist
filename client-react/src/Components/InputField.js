function InputField({ lebel, onChange, error, type, name }) {
  return (
    <div className="w-full mt-3 mb-1">
      <div className="font-bold text-gray-secondary">{ lebel }</div>
      <input onChange={onChange} type={type} name={name} className='w-full border-2 border-gray-secondary rounded-md' />
      <p className="text-xs h-1 text-red-primary">{error}</p>
    </div>
  );
}

export default InputField;