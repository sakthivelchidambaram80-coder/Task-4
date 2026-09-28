import React from "react";
import {
  FaCreditCard,
  FaLock,
  FaKey,
  FaGoogle,
  FaApple,
  FaWallet,
  FaCircle,
} from "react-icons/fa";

import "./CreditCards.css";

const CreditCards = () => {

  // ==========================================
  // MY CARDS
  // ==========================================

  const cards = [
    {
      balance: "$5,756",
      holder: "Eddy Cusuma",
      valid: "12/22",
      number: "3778 **** **** 1234",
      type: "blue",
    },
    {
      balance: "$5,756",
      holder: "Eddy Cusuma",
      valid: "12/22",
      number: "3778 **** **** 1234",
      type: "purple",
    },
    {
      balance: "$5,756",
      holder: "Eddy Cusuma",
      valid: "12/22",
      number: "3778 **** **** 1234",
      type: "white",
    },
  ];


  // ==========================================
  // CARD LIST
  // ==========================================

  const cardList = [
    {
      type: "blue",
      cardType: "Secondary",
      bank: "DBL Bank",
      number: "**** **** 5600",
      name: "William",
    },
    {
      type: "pink",
      cardType: "Secondary",
      bank: "BRC Bank",
      number: "**** **** 4300",
      name: "Michel",
    },
    {
      type: "yellow",
      cardType: "Secondary",
      bank: "ABM Bank",
      number: "**** **** 7560",
      name: "Edward",
    },
  ];


  // ==========================================
  // CARD SETTINGS
  // ==========================================

  const cardSettings = [
    {
      icon: <FaCreditCard />,
      title: "Block Card",
      description: "Instantly block your card",
      type: "yellow",
    },
    {
      icon: <FaKey />,
      title: "Change Pin Code",
      description: "Choose another pin code",
      type: "blue",
    },
    {
      icon: <FaGoogle />,
      title: "Add to Google Pay",
      description: "Withdraw without any card",
      type: "pink",
    },
    {
      icon: <FaApple />,
      title: "Add to Apple Pay",
      description: "Withdraw without any card",
      type: "green",
    },
    {
      icon: <FaApple />,
      title: "Add to Apple Store",
      description: "Withdraw without any card",
      type: "green",
    },
  ];


  return (
    <div className="cards-page">


      {/* ==================================================
          MY CARDS
      ================================================== */}

      <h3 className="cards-title">
        My Cards
      </h3>


      <div className="cards-container">

        {cards.map((card, index) => (

          <div
            className={`bank-card ${card.type}`}
            key={index}
          >

            {/* CARD BALANCE */}

            <div className="card-balance">

              <div className="balance-text">

                <small>
                  Balance
                </small>

                <strong>
                  {card.balance}
                </strong>

              </div>

              <FaCreditCard className="card-chip" />

            </div>


            {/* CARD INFORMATION */}

            <div className="card-information">

              <div className="card-holder">

                <small>
                  CARD HOLDER
                </small>

                <span>
                  {card.holder}
                </span>

              </div>


              <div className="card-valid">

                <small>
                  VALID THRU
                </small>

                <span>
                  {card.valid}
                </span>

              </div>

            </div>


            {/* CARD NUMBER */}

            <div className="card-number">

              <span>
                {card.number}
              </span>

              <span className="card-logo">
                ●●
              </span>

            </div>

          </div>

        ))}

      </div>


      {/* ==================================================
          CARD EXPENSE + CARD LIST
      ================================================== */}

      <div className="cards-middle">


        {/* ==================================================
            CARD EXPENSE STATISTICS
        ================================================== */}

        <section>

          <h3 className="cards-title">
            Card Expense Statistics
          </h3>

          <div className="expense-card">

            <div className="expense-chart">

              <div className="donut-chart"></div>

            </div>


            {/* LEGEND */}

            <div className="chart-legend">

              <div className="legend-item">

                <span className="legend-dot legend-blue"></span>

                <span>
                  DBL Bank
                </span>

              </div>


              <div className="legend-item">

                <span className="legend-dot legend-pink"></span>

                <span>
                  BRC Bank
                </span>

              </div>


              <div className="legend-item">

                <span className="legend-dot legend-green"></span>

                <span>
                  ABM Bank
                </span>

              </div>


              <div className="legend-item">

                <span className="legend-dot legend-yellow"></span>

                <span>
                  MCP Bank
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* ==================================================
            CARD LIST
        ================================================== */}

        <section className="card-list">

          <h3 className="cards-title">
            Card List
          </h3>


          <div className="card-list-container">

            {cardList.map((card, index) => (

              <div
                className="card-list-row"
                key={index}
              >


                {/* ICON */}

                <div
                  className={`list-icon ${card.type}`}
                >

                  <FaCreditCard />

                </div>


                {/* CARD TYPE */}

                <div className="list-item">

                  <strong>
                    Card Type
                  </strong>

                  <span>
                    {card.cardType}
                  </span>

                </div>


                {/* BANK */}

                <div className="list-item">

                  <strong>
                    Bank
                  </strong>

                  <span>
                    {card.bank}
                  </span>

                </div>


                {/* CARD NUMBER */}

                <div className="list-item">

                  <strong>
                    Card Number
                  </strong>

                  <span>
                    {card.number}
                  </span>

                </div>


                {/* NAME */}

                <div className="list-item">

                  <strong>
                    Namain Card
                  </strong>

                  <span>
                    {card.name}
                  </span>

                </div>


                {/* VIEW DETAILS */}

                <span className="view-details">
                  View Details
                </span>

              </div>

            ))}

          </div>

        </section>

      </div>


      {/* ==================================================
          ADD NEW CARD + CARD SETTING
      ================================================== */}

      <div className="cards-bottom">


        {/* ==================================================
            ADD NEW CARD
        ================================================== */}

        <section>

          <h3 className="cards-title">
            Add New Card
          </h3>


          <div className="add-card-container">


            {/* DESCRIPTION */}

            <p className="add-card-description">

              Credit Card generally means a plastic card issued
              by Scheduled Commercial Banks assigned to a
              cardholder, with a credit limit, that can be used
              to purchase goods and services on credit or obtain
              cash advances.

            </p>


            {/* FORM */}

            <div className="card-form">


              {/* CARD TYPE */}

              <div className="form-group">

                <label>
                  Card Type
                </label>

                <input
                  type="text"
                  placeholder="Classic"
                />

              </div>


              {/* NAME */}

              <div className="form-group">

                <label>
                  Name On Card
                </label>

                <input
                  type="text"
                  placeholder="My Cards"
                />

              </div>


              {/* CARD NUMBER */}

              <div className="form-group">

                <label>
                  Card Number
                </label>

                <input
                  type="text"
                  placeholder="**** **** **** ****"
                />

              </div>


              {/* EXPIRATION DATE */}

              <div className="form-group">

                <label>
                  Expiration Date
                </label>

                <input
                  type="text"
                  placeholder="25 January 2025"
                />

              </div>

            </div>


            {/* BUTTON */}

            <button className="add-card-button">
              Add Card
            </button>

          </div>

        </section>


        {/* ==================================================
            CARD SETTINGS
        ================================================== */}

        <section>

          <h3 className="cards-title">
            Card Setting
          </h3>


          <div className="card-settings">

            {cardSettings.map((setting, index) => (

              <div
                className="setting-item"
                key={index}
              >


                {/* ICON */}

                <div
                  className={`setting-icon ${setting.type}`}
                >

                  {setting.icon}

                </div>


                {/* CONTENT */}

                <div className="setting-content">

                  <strong>
                    {setting.title}
                  </strong>

                  <span>
                    {setting.description}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </section>

      </div>

    </div>
  );
};

export default CreditCards;