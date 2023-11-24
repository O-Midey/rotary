export const GroupInputField = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-4 mt-8 px-2 py-4 md:px-14">
          <div className="mb-4 md:mb-0 md:col-span-1">
            <label
              htmlFor="input1"
              className="block text-sm font-medium text-gray-700"
            >
              Full name of participant #1
            </label>
            <input
              type="text"
              id="input1"
              placeholder="Enter value"
              className="w-full border border-gray-300 p-2 rounded-md mt-1"
            />
          </div>
          <div className="mb-4 md:mb-0 md:col-span-1">
            <label
              htmlFor="input2"
              className="block text-sm font-medium text-gray-700"
            >
              Call name of participant #1
            </label>
            <input
              type="text"
              id="input2"
              placeholder="Enter value"
              className="w-full border border-gray-300 p-2 rounded-md mt-1"
            />
          </div>
          <div className="md:col-span-1">
            <label
              htmlFor="input3"
              className="block text-sm font-medium text-gray-700"
            >
              Medical Conditions
            </label>
            <input
              type="text"
              id="input3"
              placeholder="Enter value"
              className="w-full border border-gray-300 p-2 rounded-md mt-1"
            />
          </div>
        </div>
      </div>
    </>
  );
};
