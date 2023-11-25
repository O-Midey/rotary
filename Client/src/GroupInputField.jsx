import PropTypes from "prop-types";

export const GroupInputField = (props) => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-4 mt-8 px-2 py-4 md:px-14">
          <div className="mb-4 md:mb-0 md:col-span-1">
            <label
              htmlFor={`input${props.number}`}
              className="block text-sm font-medium text-gray-700"
            >
              Full name of participant #{props.number}
            </label>
            <input
              type="text"
              id={`input${props.number}`}
              placeholder="Enter value"
              className="w-full border border-gray-300 p-2 rounded-md mt-1"
              onChange={(e) => props.onChange("fullName", e.target.value)}
            />
          </div>
          <div className="mb-4 md:mb-0 md:col-span-1">
            <label
              htmlFor={`input${props.number}`}
              className="block text-sm font-medium text-gray-700"
            >
              Call name of participant #{props.number}
            </label>
            <input
              type="text"
              id={`input${props.number}`}
              placeholder="Enter value"
              className="w-full border border-gray-300 p-2 rounded-md mt-1"
              onChange={(e) => props.onChange("fullName", e.target.value)}
            />
          </div>
          <div className="md:col-span-1">
            <label
              htmlFor={`input${props.number}`}
              className="block text-sm font-medium text-gray-700"
            >
              Medical Conditions
            </label>
            <input
              type="text"
              id={`input${props.number}`}
              placeholder="Enter value"
              className="w-full border border-gray-300 p-2 rounded-md mt-1"
              onChange={(e) => props.onChange("fullName", e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
GroupInputField.propTypes = {
  number: PropTypes.number.isRequired,
};
