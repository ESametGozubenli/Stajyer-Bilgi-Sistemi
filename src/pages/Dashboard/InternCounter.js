import { useContext } from "react";
import DataContext from "../../context/dataContext";

import {
  format,
  formatDistance,
  isBefore,
  isAfter,
  isWithinInterval,
  addDays,
} from "date-fns";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";

function InternCounter() {
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
    <div>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            <p>Toplam Stajyer</p>
            <div className="totalIntern">
              <h2>{totalIntern}</h2>
              <LuUsers size={30} />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="cardContent">
            <p>Aktif Stajyer</p>
            <div className="activeIntern">
              <h2>{activeIntern}</h2>
              <FaArrowTrendUp size={30} />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="cardContent">
            <p>Yaklaşan</p>
            <div className="startSoon">
              <h2>{startSoon}</h2>
              <CiCalendar size={30} />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="cardContent">
            <p>Tamamlanan</p>
            <div className="pasiveIntern">
              <h2>{pasiveIntern}</h2>
              <IoDocumentTextOutline size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternCounter;
