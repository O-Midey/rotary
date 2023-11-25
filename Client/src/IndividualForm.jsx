import { useState } from "react";
import { InputField } from "./InputField";
import { ProductSummary } from "./ProductSummary"; // Import your ProductSummary component

export const IndividualForm = (props) => {
  // State variables to store input values and control navigation
  const [districtNo, setDistrictNo] = useState("");
  const [clubName, setClubName] = useState("");
  const [email, setEmail] = useState("");

  // Event handlers to update state on input change
  const handleDistrictNoChange = (event) => {
    setDistrictNo(event.target.value);
  };

  const handleClubNameChange = (event) => {
    setClubName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Function to handle form submission and update state
  const handleSubmit = () => {
    const registrationData = {
      districtNo,
      clubName,
      email,
      product: "Individual Registration",
      price: "25000",
    };
    props.setSubmitted(true);
    props.setData(registrationData);
    console.log(registrationData);
  };

  // Render the form if it hasn't been submitted
  return (
    <>
      {!props.submitted ? (
        <div className="form-field">
          <div className="flex flex-wrap gap-5 items-start mt-8 px-2 py-4 md:px-14">
            <InputField
              label="Your District No. e.g 9110"
              placeholder="9110"
              name="District No"
              width="40%"
              value={districtNo}
              onChange={handleDistrictNoChange}
            />
            <InputField
              label="Name of your club? e.g RC Omole-Golden"
              placeholder="RC Omole-Golden"
              name="Club Name"
              width="40%"
              value={clubName}
              onChange={handleClubNameChange}
            />
            <InputField
              label="Your email address"
              placeholder="john@test.com"
              name="email"
              width="40%"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mx-2 md:px-14">
            <button
              className="next-button py-3 md:px-14"
              type="button"
              onClick={handleSubmit}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <ProductSummary data={registrationData} />
      )}
    </>
  );
};
