import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/dataContext";
import { StatusProvider } from "./context/StatusContext";

import SavePage from "./pages/SaveIntornData/SavePage";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginPage from "./pages/LogIn/LoginPage";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <StatusProvider>
          <Router>
            <Routes>
              <Route path="/" element={<SavePage />} />
              <Route path="/logIn" element={<LoginPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Router>
        </StatusProvider>
      </DataProvider>
    </div>
  );
}

export default App;
