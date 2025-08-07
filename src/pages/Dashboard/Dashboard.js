import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  format,
  formatDistance,
  isBefore,
  isAfter,
  isWithinInterval,
  addDays,
  parseISO,
} from "date-fns";

import DataContext from "../../context/dataContext";
import StatusChart from "./StatusChart";
import MonthlyChart from "./MonthlyChart";
function Dashboard() {
  const { formList } = useContext(DataContext);

  const navigate = useNavigate();
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
    <div>
      <header>
        <div className="head">
          <h1>Hexaops Dashboard</h1>
          <p>Stajyer yönetim sistemi genel görünümü</p>
        </div>
        <nav>
          <button onClick={() => navigate("/")}>Forma Dön</button>
          <button onClick={() => navigate("/logIn")}>Çıkış</button>
        </nav>
      </header>
      {console.log(activeIntern)}{" "}
      <ul>
        <li>Toplam stajyer:{totalIntern}</li>
        <li>Aktif stajyer:{activeIntern}</li>

        <li>Yaklaşan:{startSoon}</li>

        <li>Tamamlanan:{pasiveIntern}</li>
      </ul>

      <StatusChart 
          data={{
          totalIntern,
          activeIntern,
          startSoon,
          pasiveIntern
        }}
      />

      <MonthlyChart 
         formList={formList}
      />
    </div>
  );
}

export default Dashboard;
