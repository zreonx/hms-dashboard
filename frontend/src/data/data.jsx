import { FaUserInjured } from "react-icons/fa";
import { FaUserNurse } from "react-icons/fa";
import { PiDoorFill } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";

export const totalCards = [
  {
    label: "patients",
    number: 52,
    url: <FaUserInjured />,
  },
  {
    label: "rooms",
    number: 5,
    url: <PiDoorFill />,
  },
  {
    label: "nurses",
    number: 8,
    url: <FaUserNurse />,
  },
  {
    label: "employee",
    number: 25,
    url: <IoPeopleSharp />,
  },
];
