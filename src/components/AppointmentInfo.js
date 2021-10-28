import { BiTrash } from "react-icons/bi";

// passing down a variabel called appointment from parent component

const AppointmentInfo = ({ appointment, onDeleteAppointment }) => {
  return (
    <>
      <br></br>
      <ul className="px-3 py-3 flex items-start">
        <button
          onClick={() => onDeleteAppointment(appointment.id)}
          type="button"
          className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <BiTrash />
        </button>
        <div className="flex-grow">
          <div className="flex items-center">
            <span className="flex-none text-2xl text-blue-500">
              {appointment.email}
            </span>
            <span className="flex-grow text-right">{appointment.aptDate}</span>
            <br></br>
            <span className="flex-grow text-right">
              {" "}
              Time: {appointment.aptTime} - {appointment.aptTimeEnd}
            </span>
          </div>
          <div>
            <b className="font-bold text-blue-500">Booked for:</b>{" "}
            {appointment.washLength} min
          </div>
          <div className="leading-tight">
            vaskemaskin {appointment.washingMachine}
          </div>
        </div>
      </ul>
    </>
  );
};

export default AppointmentInfo;
