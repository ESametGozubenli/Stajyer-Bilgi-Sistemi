import { useContext } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

import DataContext from "../../context/dataContext";

function Dashboard() {
  const { formList } = useContext(DataContext);
  return (
    <div>
      <ul>
        {formList.map((item) => (
          <li key={item.id}>
            {item.name} {item.surname}{" "}
            {item.startDate
              ? format(new Date(item.startDate), "dd.MM.yyyy")
              : ""}{" "}
            {item.finishDate
              ? format(new Date(item.finishDate), "dd.MM.yyyy")
              : ""}{" "}
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
