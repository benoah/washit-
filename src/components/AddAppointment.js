import { BiCalendarPlus } from "react-icons/bi";
// Hooks allow you to use state and other react features without having to write classes.
import { useState } from "react";
import getEndTime from "../utils/getEndTime";

const AddAppointment = ({ appointmentList, onSendAppointment, lastId }) => {
  console.log("appointmentList", appointmentList);

  // its a object with all the difference form fields
  const clearData = {
    email: "",
    aptDate: "",
    aptTime: "",
    washLength: "",
    washingMachine: "",
  };

  // I'll initialize it with false because the form should not be displaying by default.
  let [toggleForm, setToggleForm] = useState(false);
  //  information for the form
  let [formData, setFormData] = useState(clearData);

  function formDataPublish() {
    console.log("formData", formData);
    // let aptTimeEnd = formData.aptTime + formData.washLength
    let endTime = getEndTime(
      formData.aptTime,
      formData.aptDate,
      formData.washLength || "90"
    );

    const appointmentInfo = {
      id: lastId + 1,
      email: formData.email,
      aptDate: formData.aptDate,
      aptTime: formData.aptTime,
      washLength: formData.washLength || "90",
      washingMachine: formData.washingMachine || "1",
      aptTimeEnd: endTime,
    };

    // Check if this machine already has been booked (ignore time or date or washtype)
    // If so, don't allow the user to book it
    // send the information
    onSendAppointment(appointmentInfo);
    // clear data
    setFormData(clearData);
    // hide the form again
    setToggleForm(!toggleForm);
  }

  return (
    <div>
      <button
        onClick={() => {
          setToggleForm(!toggleForm);
        }}
        className={`bg-blue-600 text-white px-2 py-3 w-full text-left rounded-t-md
        ${toggleForm ? "rounded-t-md" : "rounded-md"}`}
      >
        <div>
          <BiCalendarPlus className="inline-block align-text-top" /> Book slot
        </div>
      </button>
      {
        // check toogleForm variabel and if it exist, go ahead and display div
        toggleForm && (
          <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Email
              </label>
               <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={(event) => {
                    setFormData({ ...formData, email: event.target.value });
                  }}
                  value={formData.email}
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
              <label
                htmlFor="aptDate"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Washing date
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="date"
                  name="aptDate"
                  id="aptDate"
                  onChange={(event) => {
                    console.log("event.target.value", event.target.value);
                    setFormData({ ...formData, aptDate: event.target.value });
                  }}
                  value={formData.aptDate}
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
              <label
                htmlFor="aptTime"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Washing time
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="time"
                  name="aptTime"
                  id="aptTime"
                  onChange={(event) => {
                    setFormData({ ...formData, aptTime: event.target.value });
                  }}
                  value={formData.aptTime}
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
              <label
                htmlFor="washingType"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Washing type
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <select
                  defaultValue="90"
                  name="washingType"
                  id="washingType"
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      washLength: event.target.value,
                    });
                  }}
                >
                  <option value="90">Kokevask 90 min </option>
                  <option value="60">Tøyvask 60 min </option>
                  <option value="20">Håndvask 20 min</option>
                </select>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
              <label
                htmlFor="washingMachine"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Washing washingMachine
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <select
                  name="washingMachine"
                  id="washingMachine"
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      washingMachine: event.target.value,
                    });
                  }}
                >
                  <option value="1">vaskemaskin 1</option>
                  <option value="2">vaskemaskin 2 </option>
                  <option value="3">vaskemaskin 3</option>
                  <option value="4">vaskemaskin 4</option>
                  <option value="5">vaskemaskin 5 </option>
                  <option value="6">vaskemaskin 6</option>
                  <option value="7">vaskemaskin 7</option>
                  <option value="8">vaskemaskin 8 </option>
                  <option value="9">vaskemaskin 9</option>
                  <option value="10">vaskemaskin 10</option>
                  <option value="11">vaskemaskin 11 </option>
                  <option value="12">vaskemaskin 12</option>
                </select>
              </div>
            </div>
            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="submit"
                  onClick={formDataPublish}
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default AddAppointment;
