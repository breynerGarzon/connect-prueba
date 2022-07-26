function SelectGeneric(props) {
  const { options, description, selected } = props;

  const handleChange = (event) => {
    props.optionSelected(event);
  };

  return (
    <div>
      <label>{description}</label>
      <select value={selected} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectGeneric;
