import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function HeaderDashboard() {
      const navigate = useNavigate();

  return (
    <div>
      <header className="dashboardHeader">
        <div className="companyHeader">
          <h2>Hexaops Dashboard</h2>
          <p>Stajyer yönetim sistemi genel görünümü</p>
        </div>
        <nav className="navButtons">
          <button className="formButton" onClick={() => navigate("/")}>
            <FaArrowLeftLong />
            Forma Dön
          </button>
          <button className="logInButton" onClick={() => navigate("/logIn")}>
            Çıkış Yap
          </button>
        </nav>
      </header>
    </div>
  );
}

export default HeaderDashboard;
