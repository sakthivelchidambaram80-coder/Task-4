import React from "react";
import {
  FaUser,
  FaBriefcase,
  FaChartBar,
  FaTools,
} from "react-icons/fa";

import "./Services.css";

const Services = () => {

  // ==========================================
  // LOAN SUMMARY
  // ==========================================

  const loanSummary = [
    {
      icon: <FaUser />,
      title: "Personal Loans",
      amount: "$50,000",
      type: "blue",
    },
    {
      icon: <FaBriefcase />,
      title: "Corporate Loans",
      amount: "$100,000",
      type: "yellow",
    },
    {
      icon: <FaChartBar />,
      title: "Business Loans",
      amount: "$500,000",
      type: "pink",
    },
    {
      icon: <FaTools />,
      title: "Custom Loans",
      amount: "Choose Money",
      type: "green",
    },
  ];


  // ==========================================
  // ACTIVE LOANS
  // ==========================================

  const loans = [
    {
      no: "01.",
      loanMoney: "$100,000",
      leftToRepay: "$40,500",
      duration: "8 Months",
      interest: "12%",
      installment: "$2,000 / month",
    },
    {
      no: "02.",
      loanMoney: "$500,000",
      leftToRepay: "$250,000",
      duration: "36 Months",
      interest: "10%",
      installment: "$8,000 / month",
    },
    {
      no: "03.",
      loanMoney: "$900,000",
      leftToRepay: "$40,500",
      duration: "12 Months",
      interest: "12%",
      installment: "$5,000 / month",
    },
    {
      no: "04.",
      loanMoney: "$50,000",
      leftToRepay: "$40,500",
      duration: "25 Months",
      interest: "5%",
      installment: "$2,000 / month",
    },
    {
      no: "05.",
      loanMoney: "$50,000",
      leftToRepay: "$40,500",
      duration: "5 Months",
      interest: "16%",
      installment: "$10,000 / month",
    },
    {
      no: "06.",
      loanMoney: "$80,000",
      leftToRepay: "$25,500",
      duration: "14 Months",
      interest: "8%",
      installment: "$2,000 / month",
    },
    {
      no: "07.",
      loanMoney: "$12,000",
      leftToRepay: "$5,500",
      duration: "9 Months",
      interest: "13%",
      installment: "$500 / month",
    },
    {
      no: "08.",
      loanMoney: "$160,000",
      leftToRepay: "$100,800",
      duration: "3 Months",
      interest: "12%",
      installment: "$900 / month",
    },
  ];


  return (
    <div className="loans-page">


      {/* ==========================================
          LOAN SUMMARY
      ========================================== */}

      <div className="loan-summary">

        {loanSummary.map((loan, index) => (

          <div
            className="loan-summary-card"
            key={index}
          >

            {/* ICON */}

            <div className={`loan-icon ${loan.type}`}>

              {loan.icon}

            </div>


            {/* DETAILS */}

            <div className="loan-summary-content">

              <p>
                {loan.title}
              </p>

              <h3>
                {loan.amount}
              </h3>

            </div>

          </div>

        ))}

      </div>


      {/* ==========================================
          ACTIVE LOANS
      ========================================== */}

      <section className="active-loans-section">

        <h3 className="loans-title">
          Active Loans Overview
        </h3>


        <div className="loan-table-wrapper">

          <table className="loan-table">

            {/* TABLE HEADER */}

            <thead>

              <tr>

                <th>SL No.</th>

                <th>Loan Money</th>

                <th>Left to repay</th>

                <th>Duration</th>

                <th>Interest rate</th>

                <th>Installment</th>

                <th>Repay</th>

              </tr>

            </thead>


            {/* TABLE BODY */}

            <tbody>

              {loans.map((loan, index) => (

                <tr key={index}>

                  <td>
                    {loan.no}
                  </td>

                  <td>
                    {loan.loanMoney}
                  </td>

                  <td>
                    {loan.leftToRepay}
                  </td>

                  <td>
                    {loan.duration}
                  </td>

                  <td>
                    {loan.interest}
                  </td>

                  <td>
                    {loan.installment}
                  </td>

                  <td>

                    <button className="repay-button">
                      Repay
                    </button>

                  </td>

                </tr>

              ))}


              {/* TOTAL */}

              <tr className="loan-total">

                <td>
                  Total
                </td>

                <td>
                  $125,000
                </td>

                <td>
                  $750,000
                </td>

                <td></td>

                <td></td>

                <td>
                  $50,000 / month
                </td>

                <td></td>

              </tr>

            </tbody>

          </table>

        </div>

      </section>

    </div>
  );
};

export default Services;