function InputGeneric(props) {
  const { description, valueField, fieldName, type } = props;

  const handleChange = (event) => {
    props.changeValue(event);
  };

  return (
    <div>
      <label>{description}</label>
      <input
        type={type}
        id={fieldName}
        value={valueField}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default InputGeneric;
