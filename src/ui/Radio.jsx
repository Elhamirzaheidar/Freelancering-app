function Radio({ label,value,name,onChange ,checked}) {
  return (
 
      <div className="flex items-center gap-x-2 text-gray-600 mt-6">
        <input
          className="cursor-pointer accent-green-600"
          type="radio"
          name={name}
          id={value}
          value={value}
          onChange={onChange}
          checked={checked}
        />
        <label htmlFor="owner">{label}</label>
      </div>
   
  );
}

export default Radio;
