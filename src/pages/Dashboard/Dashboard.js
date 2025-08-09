import { useContext, useEffect } from "react";
//router
import { useLocation } from "react-router-dom";

//context
import DataContext from "../../context/dataContext";
import StatusContext from "../../context/StatusContext";
//conponents
import HeaderDashboard from "./HeaderDashboard";
import InternCounter from "./InternCounter";
import InternList from "./InternList";
//Charts
import StatusChart from "./StatusChart";
import MonthlyChart from "./MonthlyChart";
//alert
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Dashboard() {
  const { formList } = useContext(DataContext);

  const { today, totalIntern, startSoon, activeIntern, pasiveIntern } =
    useContext(StatusContext);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      toast(
        <div>
          <strong>Başarılı!</strong>
          <div>Giriş yapıldı. Dashboard'a yönlendiriliyorsunuz...</div>
        </div>,
        {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  }, [location]);

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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Dashboard;
