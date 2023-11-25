import { useState, useEffect } from "react";
import { GroupInputField } from "./GroupInputField";
import { ProductSummary } from "./ProductSummary";

export const GroupForm = (props) => {
  // State variables to store input values
  const [participant1, setParticipant1] = useState({
    fullName: "",
    callName: "",
    medicalConditions: "",
  });
  const [participant2, setParticipant2] = useState({
    fullName: "",
    callName: "",
    medicalConditions: "",
  });
  const [participant3, setParticipant3] = useState({
    fullName: "",
    callName: "",
    medicalConditions: "",
  });
  const [participant4, setParticipant4] = useState({
    fullName: "",
    callName: "",
    medicalConditions: "",
  });
  const [participant5, setParticipant5] = useState({
    fullName: "",
    callName: "",
    medicalConditions: "",
  });

  const [registrationData, setRegistrationData] = useState({
    names: [],
    price: "130000",
    product: "Group Registration",
  });

  const handleInputChange = (participantNumber, field, value) => {
    // Update the state based on the participant number and field
    switch (participantNumber) {
      case 1:
        setParticipant1((prevParticipant) => ({
          ...prevParticipant,
          [field]: value,
        }));
        break;
      case 2:
        setParticipant2((prevParticipant) => ({
          ...prevParticipant,
          [field]: value,
        }));
        break;
      case 3:
        setParticipant3((prevParticipant) => ({
          ...prevParticipant,
          [field]: value,
        }));
        break;
      case 4:
        setParticipant4((prevParticipant) => ({
          ...prevParticipant,
          [field]: value,
        }));
        break;
      case 5:
        setParticipant5((prevParticipant) => ({
          ...prevParticipant,
          [field]: value,
        }));
        break;
      default:
        break;
    }
  };
  // useEffect(() => {
  //   // Triggered when registrationData changes
  //   props.setData(registrationData);
  //   console.log("Updated registrationData:", registrationData);
  // }, [registrationData, props]);
  const handleSubmit = () => {
    const namesRegistered = [
      participant1?.fullName,
      participant2?.fullName,
      participant3?.fullName,
      participant4?.fullName,
      participant5?.fullName,
    ];

    // Filter out any names that may be empty
    const filteredNames = namesRegistered.filter(
      (name) => name && name.trim() !== ""
    );

    const updatedRegistrationData = {
      ...registrationData,
      names: filteredNames,
    };

    // Update the state and trigger any necessary actions
    setRegistrationData(updatedRegistrationData);
    props.setSubmitted(true);
    props.setData(updatedRegistrationData);

    console.log(updatedRegistrationData);
  };

  return (
    <>
      {!props.submitted ? (
        <div className="form-field space-y-4">
          <GroupInputField
            number={1}
            onChange={(field, value) => handleInputChange(1, field, value)}
          />
          <hr className="border-t-2 border-gray-300 lg:mx-14" />
          <GroupInputField
            number={2}
            onChange={(field, value) => handleInputChange(2, field, value)}
          />
          <hr className="border-t-2 border-gray-300 lg:mx-14" />
          <GroupInputField
            number={3}
            onChange={(field, value) => handleInputChange(3, field, value)}
          />
          <hr className="border-t-2 border-gray-300 lg:mx-14" />
          <GroupInputField
            number={4}
            onChange={(field, value) => handleInputChange(4, field, value)}
          />
          <hr className="border-t-2 border-gray-300 lg:mx-14" />
          <GroupInputField
            number={5}
            onChange={(field, value) => handleInputChange(5, field, value)}
          />
          <div className="mx-2 md:px-14">
            <button
              className="next-button py-3 md:px-14"
              type="button"
              onClick={handleSubmit}
            >
              Pay N130,000
            </button>
          </div>
        </div>
      ) : (
        <ProductSummary data={registrationData} />
      )}
    </>
  );
};
