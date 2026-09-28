import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

import Dashboard from "./pages/Dashboard/Dashboard";
import Transactions from "./pages/Transactions/Transactions";
import Accounts from "./pages/Accounts/Accounts";
import Investments from "./pages/Investments/Investments";
import CreditCards from "./pages/CreditCards/CreditCards";
import Loans from "./pages/Loans/Loans";
import Services from "./pages/Services/Services";
import MyPrivileges from "./pages/MyPrivileges/MyPrivileges";
import Settings from "./pages/Setting/Setting";

import "./index.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="app">

        {/* Navbar */}
        <Navbar
          onMenuClick={() =>
            setSidebarOpen(!sidebarOpen)
          }
        />

        {/* Sidebar */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Page Content */}
        <main className="main-content">

          <Routes>

            {/* Dashboard */}
            <Route
              path="/"
              element={<Dashboard />}
            />

            {/* Transactions */}
            <Route
              path="/transactions"
              element={<Transactions />}
            />

            {/* Accounts */}
            <Route
              path="/accounts"
              element={<Accounts />}
            />

            {/* Investments */}
            <Route
              path="/investments"
              element={<Investments />}
            />

            {/* Credit Cards */}
            <Route
              path="/credit-cards"
              element={<CreditCards />}
            />

            {/* Loans */}
            <Route
              path="/loans"
              element={<Loans />}
            />

            {/* Services */}
            <Route
              path="/services"
              element={<Services />}
            />

             {/* MyPrivileges  */}
            <Route
              path="/MyPrivileges"
              element={<MyPrivileges />}
            />

            {/* Settings */}
            <Route
              path="/settings"
              element={<Settings />}
            />

          </Routes>

        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;