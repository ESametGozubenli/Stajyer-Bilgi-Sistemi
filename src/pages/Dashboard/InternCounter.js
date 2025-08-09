import { useContext } from "react";
import DataContext from "../../context/dataContext";
import StatusContext from "../../context/StatusContext";

import { FaArrowTrendUp } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";

function InternCounter() {
  const { today, totalIntern, startSoon, activeIntern, pasiveIntern } =
    useContext(StatusContext);

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
