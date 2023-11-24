import PropTypes from "prop-types";

export const InputField = (props) => {
  return (
    <div className={`mb-4 md:min-w-[${props.width}]`}>
      <label
        htmlFor={props.id}
        className="block text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <input
        type="text"
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className="w-full border border-gray-300 p-2 rounded-md mt-1"
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
};
