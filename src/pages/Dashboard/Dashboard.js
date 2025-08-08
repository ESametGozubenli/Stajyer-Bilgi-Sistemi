import { useContext } from "react";
import DataContext from "../../context/dataContext";

import HeaderDashboard from "./HeaderDashboard";
import InternCounter from "./InternCounter";
import InternList from "./InternList";

import StatusChart from "./StatusChart";
import MonthlyChart from "./MonthlyChart";

import {
  format,
  formatDistance,
  isBefore,
  isAfter,
  isWithinInterval,
  addDays,
} from "date-fns";

function Dashboard() {
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
    <div className="dashboardContainer">
      <HeaderDashboard />
      <InternCounter />
      
      <div className="charts-container">

      <MonthlyChart formList={formList} />

        <StatusChart
        data={{
          totalIntern,
          activeIntern,
          startSoon,
          pasiveIntern,
        }}
      /> 
        </div>


      <InternList />
    </div>
  );
}

export default Dashboard;
