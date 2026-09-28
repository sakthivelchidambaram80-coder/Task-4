import {
  FiHome,
  FiCreditCard,
  FiUsers,
  FiTrendingUp,
  FiDollarSign,
  FiBriefcase,
  FiSettings,
  FiX,
} from "react-icons/fi";

import { IoBulbSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

import "./Sidebar.css";

function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}) {

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FiHome />,
    },
    {
      name: "Transactions",
      path: "/transactions",
      icon: <FiCreditCard />,
    },
    {
      name: "Accounts",
      path: "/accounts",
      icon: <FiUsers />,
    },
    {
      name: "Investments",
      path: "/investments",
      icon: <FiTrendingUp />,
    },
    {
      name: "Credit Cards",
      path: "/credit-cards",
      icon: <FiCreditCard />,
    },
    {
      name: "Loans",
      path: "/loans",
      icon: <FiDollarSign />,
    },
    {
      name: "Services",
      path: "/services",
      icon: <FiBriefcase />,
    },
    {
      name: "MyPrivileges",
      path: "/MyPrivileges",
      icon: <IoBulbSharp />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FiSettings />,
    },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`sidebar-overlay ${
          sidebarOpen ? "show" : ""
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`sidebar ${
          sidebarOpen ? "sidebar-open" : ""
        }`}
        onMouseLeave={() => setSidebarOpen(false)}
      >

        {/* Header */}
        <div className="sidebar-header">

          <button
            className="close-sidebar"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX />
          </button>

        </div>

        {/* Navigation */}
        <nav className="sidebar-menu">

          {menuItems.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `sidebar-item ${
                  isActive ? "active" : ""
                }`
              }
              onClick={() => setSidebarOpen(false)}
            >

              <span className="sidebar-icon">
                {item.icon}
              </span>

              <span>
                {item.name}
              </span>

            </NavLink>

          ))}

        </nav>

      </aside>
    </>
  );
}

export default Sidebar;