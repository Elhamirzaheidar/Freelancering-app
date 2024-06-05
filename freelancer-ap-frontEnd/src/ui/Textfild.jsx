
function Textfild({value,onChange,name,label}) {
  return (
    <div>
          <label className="mb-1" htmlFor={name}>
        {label}
          </label>
          <input
            value={value}
            onChange={onChange}
            id={name}
            name={name}
            autoComplete="off"
            className="textFild_input
             "
            type="text"
          />
        </div>
  )
}

export default Textfild