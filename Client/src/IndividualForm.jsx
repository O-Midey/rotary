// IndividualForm.js

import { InputField } from "./InputField";

export const IndividualForm = () => {
  return (
    <>
      <div className="form-field">
        <div className="flex flex-wrap gap-5 items-start mt-8 px-2 py-4 md:px-14">
          <InputField
            label="Your District No. e.g 9110"
            placeholder="9110"
            name="District No"
            width="40%"
          />
          <InputField
            label="Name of your club? e.g RC Omole-Golden"
            placeholder="RC Omole-Golden"
            name="Club Name"
            width="40%"
          />
          <InputField
            label="Your email address"
            placeholder="john@test.com"
            name="email"
            width="40%"
          />
        </div>
        <div className="mx-2 md:px-14">
          <button className="next-button py-3  md:px-14 " type="button">
            Next
          </button>
        </div>
      </div>
    </>
  );
};
