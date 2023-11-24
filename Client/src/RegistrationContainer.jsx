import { useState } from "react";
import { IndividualForm } from "./IndividualForm";
import { GroupForm } from "./GroupForm";

export const RegistrationContainer = () => {
  const [groupClicked, setGroupClicked] = useState(false);
  const [individualClicked, setIndividualClicked] = useState(false);

  const handleGroupClick = () => {
    setGroupClicked(true);
    setIndividualClicked(false);
  };

  const handleIndividualClick = () => {
    setGroupClicked(false);
    setIndividualClicked(true);
  };

  return (
    <>
      <div className="p-2 md:px-14 py-10">
        <h1 className="text-l font-bold text-2xl py-4">Registration</h1>
        <ul className="info p-6">
          <li>1 Individual - N25,000.00</li>
          <li>Group of 5 - 10% discount - N113,000.00</li>
          <li>Group of 10 - 20% discount - N200,000.00</li>
        </ul>
        <h1 className="text-3xl font-bold pt-8">
          How would you like to register?
        </h1>
      </div>

      <div className="options-container mx-2 flex flex-wrap gap-5 md:justify-start md:px-14">
        <label
          className={`option-box ${groupClicked ? "clicked" : ""}`}
          onClick={handleGroupClick}
        >
          <input type="radio" value="Group" name="options" className="mr-5" />
          Group Registration
        </label>
        <label
          className={`option-box ${individualClicked ? "clicked" : ""}`}
          onClick={handleIndividualClick}
        >
          <input
            type="radio"
            value="Individual"
            name="options"
            className="mr-5"
          />
          Individual Registration
        </label>
      </div>

      <div className="bottom-arrow"></div>
      {individualClicked && <IndividualForm />}
      {groupClicked && <GroupForm />}
    </>
  );
};
