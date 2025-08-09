import { createContext, useContext } from "react";
import {
  format,
  formatDistance,
  isBefore,
  isAfter,
  isWithinInterval,
  addDays,
} from "date-fns";
import DataContext from "./dataContext";

const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
  const { formList } = useContext(DataContext);

  const today = new Date();
  //tüm kayıtlar
  const totalIntern = formList.length;

  //yaklaşan
  const startSoon = formList.filter((item) => {
    const start = new Date(item.startDate);
    return isAfter(start, today) && isBefore(start, addDays(today, 7)); //ture-false ile kontrol ediyor
  }).length;

  //aktif

  const activeIntern = formList.filter((item) => {
    const start = new Date(item.startDate);
    start.setHours(0, 0, 0, 0);

    const finish = new Date(item.finishDate);
    finish.setHours(23, 59, 59, 999);

    return isWithinInterval(today, { start, end: finish });
  }).length;

  //pasif
  const pasiveIntern = formList.filter((item) => {
    const finish = new Date(item.finishDate);
    return isBefore(finish, today);
  }).length;
  
  return (
    <StatusContext.Provider
      value={{ today, totalIntern, startSoon, activeIntern, pasiveIntern }}
    >
      {children}
    </StatusContext.Provider>
  );
};

export default StatusContext;
