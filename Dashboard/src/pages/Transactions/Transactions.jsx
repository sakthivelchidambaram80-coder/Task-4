import {
  FiPlus,
  FiArrowUp,
  FiArrowDown,
  FiChevronLeft,
  FiChevronRight,
  FiCreditCard,
} from "react-icons/fi";

import "./Transactions.css";

function Transactions() {
  const transactions = [
    {
      description: "Spotify Subscription",
      id: "#12548796",
      type: "Shopping",
      card: "1234 ****",
      date: "28 Jan, 12.30 AM",
      amount: "-$2,500",
      status: "expense",
      arrow: "up",
    },
    {
      description: "Freepik Sales",
      id: "#12548796",
      type: "Transfer",
      card: "1234 ****",
      date: "25 Jan, 10.40 PM",
      amount: "+$750",
      status: "income",
      arrow: "down",
    },
    {
      description: "Mobile Service",
      id: "#12548796",
      type: "Service",
      card: "1234 ****",
      date: "20 Jan, 10.40 PM",
      amount: "-$150",
      status: "expense",
      arrow: "up",
    },
    {
      description: "Wilson",
      id: "#12548796",
      type: "Transfer",
      card: "1234 ****",
      date: "15 Jan, 03.29 PM",
      amount: "-$1050",
      status: "expense",
      arrow: "up",
    },
    {
      description: "Emilly",
      id: "#12548796",
      type: "Transfer",
      card: "1234 ****",
      date: "14 Jan, 10.40 PM",
      amount: "+$840",
      status: "income",
      arrow: "down",
    },
  ];

  return (
    <div className="cards-transactions">

      {/* =================================
          TOP SECTION
      ================================= */}

      <section className="top-finance-section">

        {/* =================================
            MY CARDS
        ================================= */}

        <div className="my-cards-section">

          <div className="section-heading">
            <h2>My Cards</h2>

            <button className="add-card-btn">
              <FiPlus />
              <span>Add Card</span>
            </button>
          </div>


          {/* ===============================
              CARDS WRAPPER
          =============================== */}

          <div className="cards-wrapper">

            {/* ===============================
                CARD ONE - BLUE
            =============================== */}

            <div className="card-one">

              <div className="bank-card primary-card">

                <div className="card-top">

                  <div>
                    <span>Balance</span>
                    <strong>$5,756</strong>
                  </div>

                  <div className="card-chip">
                    <FiCreditCard />
                  </div>

                </div>


                <div className="card-details">

                  <div>
                    <span>CARD HOLDER</span>
                    <strong>Eddy Cusuma</strong>
                  </div>

                  <div>
                    <span>VALID THRU</span>
                    <strong>12/22</strong>
                  </div>

                </div>


                <div className="card-number">

                  <span>
                    3778 **** **** 1234
                  </span>

                  <div className="card-logo">

                    <i></i>
                    <i></i>

                  </div>

                </div>

              </div>

            </div>


            {/* ===============================
                CARD TWO - WHITE
            =============================== */}

            <div className="card-two">

              <div className="bank-card secondary-card">

                <div className="card-top">

                  <div>
                    <span>Balance</span>
                    <strong>$5,756</strong>
                  </div>

                  <div className="card-chip gray-chip">
                    <FiCreditCard />
                  </div>

                </div>


                <div className="card-details">

                  <div>
                    <span>CARD HOLDER</span>
                    <strong>Eddy Cusuma</strong>
                  </div>

                  <div>
                    <span>VALID THRU</span>
                    <strong>12/22</strong>
                  </div>

                </div>


                <div className="card-number">

                  <span>
                    3778 **** **** 1234
                  </span>

                  <div className="card-logo gray-logo">

                    <i></i>
                    <i></i>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =================================
            MY EXPENSE
        ================================= */}

        <div className="expense-section">

          <div className="section-heading">
            <h2>My Expense</h2>
          </div>


          <div className="expense-chart">

            <div className="chart-bars">

              <div className="bar-item">
                <div className="bar bar-aug"></div>
                <span>Aug</span>
              </div>

              <div className="bar-item">
                <div className="bar bar-sep"></div>
                <span>Sep</span>
              </div>

              <div className="bar-item">
                <div className="bar bar-oct"></div>
                <span>Oct</span>
              </div>

              <div className="bar-item">
                <div className="bar bar-nov"></div>
                <span>Nov</span>
              </div>

              <div className="bar-item active-bar">

                <div className="expense-value">
                  $12,500
                </div>

                <div className="bar bar-dec"></div>

                <span>Dec</span>

              </div>

              <div className="bar-item">
                <div className="bar bar-jan"></div>
                <span>Jan</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          RECENT TRANSACTIONS
      ================================= */}

      <section className="transactions-section">

        <h2 className="transactions-title">
          Recent Transactions
        </h2>


        {/* =================================
            TRANSACTION TABS
        ================================= */}

        <div className="transaction-tabs">

          <button className="tab active">
            All Transactions
          </button>

          <button className="tab">
            Income
          </button>

          <button className="tab">
            Expense
          </button>

        </div>


        {/* =================================
            TRANSACTION TABLE
        ================================= */}

        <div className="transactions-table-wrapper">

          <table className="transactions-table">

            <thead>

              <tr>

                <th>Description</th>
                <th>Transaction ID</th>
                <th>Type</th>
                <th>Card</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Receipt</th>

              </tr>

            </thead>


            <tbody>

              {transactions.map((transaction, index) => (

                <tr key={index}>

                  <td>

                    <div className="transaction-description">

                      <span
                        className={`transaction-arrow ${
                          transaction.arrow === "down"
                            ? "arrow-down"
                            : "arrow-up"
                        }`}
                      >

                        {transaction.arrow === "down" ? (
                          <FiArrowDown />
                        ) : (
                          <FiArrowUp />
                        )}

                      </span>

                      <span>
                        {transaction.description}
                      </span>

                    </div>

                  </td>


                  <td>
                    {transaction.id}
                  </td>


                  <td>
                    {transaction.type}
                  </td>


                  <td>
                    {transaction.card}
                  </td>


                  <td>
                    {transaction.date}
                  </td>


                  <td
                    className={
                      transaction.status === "income"
                        ? "amount income"
                        : "amount expense"
                    }
                  >
                    {transaction.amount}
                  </td>


                  <td>

                    <button className="download-btn">
                      Download
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>


        {/* =================================
            PAGINATION
        ================================= */}

        <div className="pagination">

          <button className="pagination-prev">

            <FiChevronLeft />

            <span>
              Previous
            </span>

          </button>


          <button className="page active-page">
            1
          </button>

          <button className="page">
            2
          </button>

          <button className="page">
            3
          </button>

          <button className="page">
            4
          </button>


          <button className="pagination-next">

            <span>
              Next
            </span>

            <FiChevronRight />

          </button>

        </div>

      </section>

    </div>
  );
}

export default Transactions;