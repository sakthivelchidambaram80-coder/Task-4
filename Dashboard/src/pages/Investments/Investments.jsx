import React from "react";
import {
  FaApple,
  FaGoogle,
  FaDollarSign,
  FaChartLine,
  FaExchangeAlt,
  FaCar,
} from "react-icons/fa";

import "./Investments.css";

const Investments = () => {
  const investments = [
    {
      icon: <FaApple />,
      name: "Apple Store",
      category: "E-Commerce, Marketplace",
      amount: "$54,000",
      return: "+16%",
      returnClass: "positive",
      iconClass: "apple",
    },
    {
      icon: <FaGoogle />,
      name: "Samsung Mobile",
      category: "E-commerce, Marketplace",
      amount: "$25,300",
      return: "-4%",
      returnClass: "negative",
      iconClass: "google",
    },
    {
      icon: <FaCar />,
      name: "Tesla Motors",
      category: "Electric Vehicles",
      amount: "$8,200",
      return: "+25%",
      returnClass: "positive",
      iconClass: "tesla",
    },
  ];

  const stocks = [
    {
      no: "01.",
      name: "Trivago",
      price: "$520",
      return: "+5%",
      className: "positive",
    },
    {
      no: "02.",
      name: "Canon",
      price: "$480",
      return: "+10%",
      className: "positive",
    },
    {
      no: "03.",
      name: "Uber Food",
      price: "$350",
      return: "-3%",
      className: "negative",
    },
    {
      no: "04.",
      name: "Nokia",
      price: "$940",
      return: "+2%",
      className: "positive",
    },
    {
      no: "05.",
      name: "Tiktok",
      price: "$670",
      return: "-12%",
      className: "negative",
    },
  ];

  return (
    <div className="investment-page">

      {/* ================================
          SUMMARY CARDS
      ================================= */}

      <div className="investment-summary">

        {/* Total Invested Amount */}
        <div className="investment-card">

          <div className="investment-icon amount-icon">
            <FaDollarSign />
          </div>

          <div>
            <p>Total Invested Amount</p>
            <h3>$150,000</h3>
          </div>

        </div>

        {/* Number Of Investments */}
        <div className="investment-card">

          <div className="investment-icon investors-icon">
            <FaChartLine />
          </div>

          <div>
            <p>Number of Investments</p>
            <h3>1,250</h3>
          </div>

        </div>

        {/* Rate Of Return */}
        <div className="investment-card">

          <div className="investment-icon return-icon">
            <FaExchangeAlt />
          </div>

          <div>
            <p>Rate of Return</p>
            <h3>+5.80%</h3>
          </div>

        </div>

      </div>


      {/* ================================
          CHARTS SECTION
      ================================= */}

      <div className="charts-grid">

        {/* =================================
            YEARLY TOTAL INVESTMENT
        ================================= */}

        <section className="investment-section">

          <div className="investment-title">
            <h3>Yearly Total Investment</h3>
          </div>

          <div className="chart-card">

            <div className="line-chart">

              {/* Y AXIS */}
              <div className="y-axis">
                <span>$40,000</span>
                <span>$30,000</span>
                <span>$20,000</span>
                <span>$10,000</span>
                <span>$0</span>
              </div>

              {/* SVG CHART */}
              <svg
                viewBox="0 0 500 200"
                preserveAspectRatio="none"
                className="chart-svg"
              >

                {/* Grid Lines */}

                <line
                  x1="45"
                  y1="20"
                  x2="480"
                  y2="20"
                  className="grid-line"
                />

                <line
                  x1="45"
                  y1="60"
                  x2="480"
                  y2="60"
                  className="grid-line"
                />

                <line
                  x1="45"
                  y1="100"
                  x2="480"
                  y2="100"
                  className="grid-line"
                />

                <line
                  x1="45"
                  y1="140"
                  x2="480"
                  y2="140"
                  className="grid-line"
                />

                <line
                  x1="45"
                  y1="180"
                  x2="480"
                  y2="180"
                  className="grid-line"
                />

                {/* Investment Line */}

                <polyline
                  points="
                    70,145
                    145,75
                    220,110
                    295,28
                    370,88
                    445,60
                  "
                  className="investment-line"
                />

                {/* Chart Points */}

                <circle
                  cx="70"
                  cy="145"
                  r="4"
                  className="chart-point"
                />

                <circle
                  cx="145"
                  cy="75"
                  r="4"
                  className="chart-point"
                />

                <circle
                  cx="220"
                  cy="110"
                  r="4"
                  className="chart-point"
                />

                <circle
                  cx="295"
                  cy="28"
                  r="4"
                  className="chart-point"
                />

                <circle
                  cx="370"
                  cy="88"
                  r="4"
                  className="chart-point"
                />

                <circle
                  cx="445"
                  cy="60"
                  r="4"
                  className="chart-point"
                />

              </svg>

              {/* X AXIS */}

              <div className="x-axis">
                <span>2016</span>
                <span>2017</span>
                <span>2018</span>
                <span>2019</span>
                <span>2020</span>
                <span>2021</span>
              </div>

            </div>

          </div>

        </section>


        {/* =================================
            MONTHLY REVENUE
        ================================= */}

        <section className="investment-section">

          <div className="investment-title">
            <h3>Monthly Revenue</h3>
          </div>

          <div className="chart-card">

            <div className="line-chart">

              {/* Y AXIS */}

              <div className="y-axis">
                <span>$40,000</span>
                <span>$30,000</span>
                <span>$20,000</span>
                <span>$10,000</span>
                <span>$0</span>
              </div>

              {/* SVG CHART */}

              <svg
                viewBox="0 0 500 200"
                preserveAspectRatio="none"
                className="chart-svg"
              >

                {/* Grid Lines */}

                <line
                  x1="45"
                  y1="20"
                  x2="480"
                  y2="20"
                  className="grid-line"
                />

                <line
                  x1="45"
                  y1="60"
                  x2="480"
                  y2="60"
                  className="grid-line"
                />

                <line
                  x1="45"
                  y1="100"
                  x2="480"
                  y2="100"
                  className="grid-line"
                />

                <line
                  x1="45"
                  y1="140"
                  x2="480"
                  y2="140"
                  className="grid-line"
                />

                <line
                  x1="45"
                  y1="180"
                  x2="480"
                  y2="180"
                  className="grid-line"
                />

                {/* Revenue Line */}

                <path
                  d="
                    M70 145
                    C90 135, 95 125, 110 120
                    C130 112, 135 130, 150 142
                    C170 160, 180 95, 205 65
                    C225 45, 235 70, 250 75
                    C270 85, 280 55, 300 52
                    C320 48, 325 100, 345 110
                    C365 120, 375 92, 395 85
                    C420 75, 430 110, 450 120
                    C465 128, 470 60, 480 45
                  "
                  className="revenue-line"
                />

              </svg>

              {/* X AXIS */}

              <div className="x-axis">
                <span>2016</span>
                <span>2017</span>
                <span>2018</span>
                <span>2019</span>
                <span>2020</span>
                <span>2021</span>
              </div>

            </div>

          </div>

        </section>

      </div>


      {/* ================================
          BOTTOM SECTION
      ================================= */}

      <div className="investment-bottom">

        {/* =================================
            MY INVESTMENT
        ================================= */}

        <section className="investment-section">

          <div className="investment-title">
            <h3>My Investment</h3>
          </div>

          <div className="my-investments">

            {investments.map((item, index) => (

              <div
                className="investment-row"
                key={index}
              >

                {/* Company Icon */}

                <div
                  className={`company-icon ${item.iconClass}`}
                >
                  {item.icon}
                </div>

                {/* Company Information */}

                <div className="company-info">

                  <strong>
                    {item.name}
                  </strong>

                  <span>
                    {item.category}
                  </span>

                </div>

                {/* Investment Value */}

                <div className="investment-value">

                  <strong>
                    {item.amount}
                  </strong>

                  <span>
                    Investment Value
                  </span>

                </div>

                {/* Return Value */}

                <div className="investment-return">

                  <strong className={item.returnClass}>
                    {item.return}
                  </strong>

                  <span>
                    Return Value
                  </span>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* =================================
            TRENDING STOCK
        ================================= */}

        <section className="investment-section">

          <div className="investment-title">
            <h3>Trending Stock</h3>
          </div>

          <div className="stock-table">

            {/* Header */}

            <div className="stock-header">

              <span>SL No.</span>
              <span>Name</span>
              <span>Price</span>
              <span>Return</span>

            </div>


            {/* Stock Rows */}

            {stocks.map((stock, index) => (

              <div
                className="stock-row"
                key={index}
              >

                <span>
                  {stock.no}
                </span>

                <span>
                  {stock.name}
                </span>

                <span>
                  {stock.price}
                </span>

                <span className={stock.className}>
                  {stock.return}
                </span>

              </div>

            ))}

          </div>

        </section>

      </div>

    </div>
  );
};

export default Investments;