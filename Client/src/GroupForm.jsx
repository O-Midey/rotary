import { GroupInputField } from "./GroupInputField";

export const GroupForm = () => {
  return (
    <>
      <div className="form-field space-y-4">
        <GroupInputField />
        <hr className="border-t-2 border-gray-300 lg:mx-14" />
        <GroupInputField />
        <hr className="border-t-2 border-gray-300 lg:mx-14" />
        <GroupInputField />
        <hr className="border-t-2 border-gray-300 lg:mx-14" />
        <GroupInputField />
        <hr className="border-t-2 border-gray-300 lg:mx-14" />
        <GroupInputField />
        <div className="mx-2 md:px-14">
          <button className="next-button py-3  md:px-14 " type="button">
            Pay N133,000
          </button>
        </div>
      </div>
    </>
  );
};
