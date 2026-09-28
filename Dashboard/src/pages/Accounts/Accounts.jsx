import React from "react";
import {
  FaWallet,
  FaMoneyBillWave,
  FaFileInvoiceDollar,
  FaPiggyBank,
  FaSpotify,
  FaTools,
  FaUser,
  FaApple,
  FaPlaystation,
  FaCreditCard,
  FaEllipsisH,
} from "react-icons/fa";

import "./Accounts.css";

const Accounts = () => {
  const transactions = [
    {
      icon: <FaSpotify />,
      name: "Spotify Subscription",
      date: "25 Jan 2021",
      type: "Shopping",
      card: "1234 ****",
      status: "Pending",
      amount: "-$150",
      amountClass: "expense",
      iconClass: "spotify",
    },
    {
      icon: <FaTools />,
      name: "Mobile Service",
      date: "25 Jan 2021",
      type: "Service",
      card: "1234 ****",
      status: "Completed",
      amount: "-$340",
      amountClass: "expense",
      iconClass: "service",
    },
    {
      icon: <FaUser />,
      name: "Emily Wilson",
      date: "25 Jan 2021",
      type: "Transfer",
      card: "1234 ****",
      status: "Completed",
      amount: "+$780",
      amountClass: "income",
      iconClass: "user",
    },
    {
      icon: <FaUser />,
      name: "Emily Wilson",
      date: "25 Jan 2021",
      type: "Transfer",
      card: "1234 ****",
      status: "Completed",
      amount: "+$780",
      amountClass: "income",
      iconClass: "user",
    },
  ];

  const invoices = [
    {
      icon: <FaApple />,
      name: "Apple Store",
      date: "5h ago",
      amount: "$450",
      iconClass: "apple",
    },
    {
      icon: <FaUser />,
      name: "Michael",
      date: "2 days ago",
      amount: "$160",
      iconClass: "michael",
    },
    {
      icon: <FaPlaystation />,
      name: "Playstation",
      date: "5 days ago",
      amount: "$1085",
      iconClass: "playstation",
    },
    {
      icon: <FaUser />,
      name: "William",
      date: "10 days ago",
      amount: "$90",
      iconClass: "william",
    },
  ];

  const chartData = [
    { day: "Sat", debit: 55, credit: 100 },
    { day: "Sun", debit: 40, credit: 75 },
    { day: "Mon", debit: 38, credit: 52 },
    { day: "Tue", debit: 85, credit: 45 },
    { day: "Wed", debit: 50, credit: 86 },
    { day: "Thu", debit: 57, credit: 42 },
    { day: "Fri", debit: 70, credit: 88 },
  ];

  return (
    <div className="account-page">

      {/* ================= TOP CARDS ================= */}
      <div className="summary-grid">

        <div className="summary-card active">
          <div className="summary-icon balance">
            <FaWallet />
          </div>

          <div className="summary-info">
            <p>My Balance</p>
            <h2>$12,750</h2>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon income-icon">
            <FaMoneyBillWave />
          </div>

          <div className="summary-info">
            <p>Income</p>
            <h2>$5,600</h2>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon expense-icon">
            <FaFileInvoiceDollar />
          </div>

          <div className="summary-info">
            <p>Expense</p>
            <h2>$3,460</h2>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon saving-icon">
            <FaPiggyBank />
          </div>

          <div className="summary-info">
            <p>Total Saving</p>
            <h2>$7,920</h2>
          </div>
        </div>

      </div>


      {/* ================= MIDDLE SECTION ================= */}
      <div className="middle-grid">

        {/* LAST TRANSACTION */}
        <section className="dashboard-section">

          <div className="section-header">
            <h3>Last Transaction</h3>
          </div>

          <div className="transaction-box">

            {transactions.map((transaction, index) => (
              <div className="transaction-row" key={index}>

                <div className={`transaction-icon ${transaction.iconClass}`}>
                  {transaction.icon}
                </div>

                <div className="transaction-name">
                  <strong>{transaction.name}</strong>
                  <span>{transaction.date}</span>
                </div>

                <div className="transaction-type">
                  {transaction.type}
                </div>

                <div className="transaction-card">
                  {transaction.card}
                </div>

                <div className="transaction-status">
                  {transaction.status}
                </div>

                <div className={`transaction-amount ${transaction.amountClass}`}>
                  {transaction.amount}
                </div>

              </div>
            ))}

          </div>
        </section>


        {/* MY CARD */}
        <section className="dashboard-section card-section">

          <div className="section-header">
            <h3>My Card</h3>
            <span>See All</span>
          </div>

          <div className="bank-card">

            <div className="card-top">
              <div>
                <small>Balance</small>
                <h3>$5,756</h3>
              </div>

              <FaCreditCard className="card-chip" />
            </div>

            <div className="card-middle">
              <div>
                <small>CARD HOLDER</small>
                <p>Edify Cusma</p>
              </div>

              <div>
                <small>VALID THRU</small>
                <p>12/22</p>
              </div>
            </div>

            <div className="card-number">
              <span>3778</span>
              <span>****</span>
              <span>****</span>
              <span>1234</span>

              <div className="card-circles">
                <i></i>
                <i></i>
              </div>
            </div>

          </div>

        </section>

      </div>


      {/* ================= BOTTOM SECTION ================= */}
      <div className="bottom-grid">

        {/* CHART */}
        <section className="dashboard-section">

          <div className="section-header">
            <h3>Debit & Credit Overview</h3>
          </div>

          <div className="chart-box">

            <div className="chart-top">
              <p>
                <strong>$7,560</strong> Debited &{" "}
                <strong>$5,420</strong> Credited in this Week
              </p>

              <div className="chart-legend">
                <span>
                  <i className="debit-dot"></i>
                  Debit
                </span>

                <span>
                  <i className="credit-dot"></i>
                  Credit
                </span>
              </div>
            </div>

            <div className="chart">

              {chartData.map((item, index) => (
                <div className="chart-column" key={index}>

                  <div className="bars">

                    <div
                      className="bar debit"
                      style={{ height: `${item.debit}%` }}
                    ></div>

                    <div
                      className="bar credit"
                      style={{ height: `${item.credit}%` }}
                    ></div>

                  </div>

                  <span>{item.day}</span>

                </div>
              ))}

            </div>

          </div>

        </section>


        {/* INVOICES */}
        <section className="dashboard-section">

          <div className="section-header">
            <h3>Invoices Sent</h3>
          </div>

          <div className="invoice-box">

            {invoices.map((invoice, index) => (
              <div className="invoice-row" key={index}>

                <div className={`invoice-icon ${invoice.iconClass}`}>
                  {invoice.icon}
                </div>

                <div className="invoice-info">
                  <strong>{invoice.name}</strong>
                  <span>{invoice.date}</span>
                </div>

                <div className="invoice-amount">
                  {invoice.amount}
                </div>

              </div>
            ))}

          </div>

        </section>

      </div>

    </div>
  );
};

export default Accounts;