import { useContext } from "react";
import { Link } from "react-router-dom";

import DataContext from "../../context/dataContext";

function Dashboard() {
  const { formList } = useContext(DataContext);
  return (
    <div>
      <ul>
        {formList.map((item) => (
          <li key={item.id}>
            {item.name} {item.surname} {item.startDate} {item.finishDate}
            {item.fileName}
          </li>
        ))}
      </ul>
      <Link to="/">
        <button>Forma Dön</button>
      </Link>
    </div>
  );
}

export default Dashboard;
