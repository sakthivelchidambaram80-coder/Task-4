import {
  FiCreditCard,
  FiSend,
  FiChevronRight,
  FiUsers,
} from "react-icons/fi";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import "./Dashboard.css";

function Dashboard() {

  /* =========================
     WEEKLY ACTIVITY
  ========================= */

  const weeklyData = [
    {
      day: "Sat",
      deposit: 470,
      withdraw: 240,
    },
    {
      day: "Sun",
      deposit: 345,
      withdraw: 125,
    },
    {
      day: "Mon",
      deposit: 325,
      withdraw: 260,
    },
    {
      day: "Tue",
      deposit: 470,
      withdraw: 365,
    },
    {
      day: "Wed",
      deposit: 155,
      withdraw: 240,
    },
    {
      day: "Thu",
      deposit: 385,
      withdraw: 245,
    },
    {
      day: "Fri",
      deposit: 390,
      withdraw: 340,
    },
  ];

  /* =========================
     EXPENSE
  ========================= */

  const expenseData = [
    {
      name: "Entertainment",
      value: 30,
    },
    {
      name: "Bill Expense",
      value: 15,
    },
    {
      name: "Others",
      value: 35,
    },
    {
      name: "Investment",
      value: 20,
    },
  ];

  const expenseColors = [
    "#363f73",
    "#ff7900",
    "#1f24ed",
    "#ed00e8",
  ];

  /* =========================
     BALANCE HISTORY
  ========================= */

  const balanceData = [
    {
      month: "Jul",
      balance: 120,
    },
    {
      month: "Aug",
      balance: 330,
    },
    {
      month: "Sep",
      balance: 480,
    },
    {
      month: "Oct",
      balance: 760,
    },
    {
      month: "Nov",
      balance: 220,
    },
    {
      month: "Dec",
      balance: 570,
    },
    {
      month: "Jan",
      balance: 250,
    },
    {
      month: "Feb",
      balance: 610,
    },
  ];

  /* =========================
     TRANSFERS
  ========================= */

  const transferPeople = [
    {
      name: "Livia Bator",
      role: "CEO",
      image:
        "https://i.pravatar.cc/100?img=47",
    },
    {
      name: "Randy Press",
      role: "Director",
      image:
        "https://i.pravatar.cc/100?img=12",
    },
    {
      name: "Workman",
      role: "Designer",
      image:
        "https://i.pravatar.cc/100?img=11",
    },
  ];

  return (
    <div className="dashboard">

      {/* =================================
          TOP SECTION
      ================================= */}

      <div className="dashboard-top">

        {/* MY CARDS */}

        <section className="cards-section">

          <div className="section-heading">
            <h2>My Cards</h2>

            <button className="see-all">
              See All
            </button>
          </div>

          <div className="cards-wrapper">

            {/* PRIMARY CARD */}

            <div className="bank-card primary-card">

              <div className="card-top-row">
                <div>
                  <span className="card-label">
                    Balance
                  </span>

                  <strong className="card-balance">
                    $5,756
                  </strong>
                </div>

                <FiCreditCard className="card-chip" />
              </div>

              <div className="card-details">

                <div>
                  <span className="card-label">
                    CARD HOLDER
                  </span>

                  <strong>
                    Eddy Cusuma
                  </strong>
                </div>

                <div>
                  <span className="card-label">
                    VALID THRU
                  </span>

                  <strong>
                    12/22
                  </strong>
                </div>

              </div>

              <div className="card-number">
                3778 **** **** 1234

                <span className="master-circle">
                  <i></i>
                  <i></i>
                </span>
              </div>

            </div>


            {/* SECOND CARD */}

            {/* SECOND CARD */}

<div className="bank-card-secondary-card">

  <div className="card-top-row">
    <div>
      <span className="card-label">
        Balance
      </span>

      <strong className="card-balance">
        $5,756
      </strong>
    </div>

    <FiCreditCard className="card-chip dark" />
  </div>

  <div className="card-details">

    <div>
      <span className="card-label">
        CARD HOLDER
      </span>

      <strong>
        Eddy Cusuma
      </strong>
    </div>

    <div>
      <span className="card-label">
        VALID THRU
      </span>

      <strong>
        12/22
      </strong>
    </div>

  </div>

  <div className="card-number">
    3778 **** **** 1234

    <span className="master-circle light">
      <i></i>
      <i></i>
    </span>
  </div>

</div>

          </div>

        </section>


        {/* RECENT TRANSACTION */}

        <section className="recent-section">

          <div className="section-heading">
            <h2>Recent Transaction</h2>
          </div>

          <div className="recent-card">

            <Transaction
              icon="card"
              title="Deposit from my Card"
              date="28 January 2021"
              amount="-$850"
              type="expense"
            />

            <Transaction
              icon="paypal"
              title="Deposit Paypal"
              date="25 January 2021"
              amount="+$2,500"
              type="income"
            />

            <Transaction
              icon="user"
              title="Jemi Wilson"
              date="21 January 2021"
              amount="+$5,400"
              type="income"
            />

          </div>

        </section>

      </div>


      {/* =================================
          MIDDLE SECTION
      ================================= */}

      <div className="dashboard-middle">

        {/* WEEKLY ACTIVITY */}

        <section>

          <div className="section-heading">
            <h2>Weekly Activity</h2>
          </div>

          <div className="chart-card">

            <div className="chart-legend">

              <span>
                <i className="deposit-dot"></i>
                Deposit
              </span>

              <span>
                <i className="withdraw-dot"></i>
                Withdraw
              </span>

            </div>

            <div className="weekly-chart">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <BarChart
                  data={weeklyData}
                  barGap={7}
                >

                  <CartesianGrid
                    strokeDasharray="0"
                    vertical={false}
                    stroke="#eeeeee"
                  />

                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: "#9ba5c8",
                      fontSize: 11,
                    }}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 500]}
                    ticks={[
                      0,
                      100,
                      200,
                      300,
                      400,
                      500,
                    ]}
                    tick={{
                      fill: "#9ba5c8",
                      fontSize: 10,
                    }}
                  />

                  <Tooltip />

                  <Bar
                    dataKey="deposit"
                    fill="#2525ed"
                    radius={[
                      6,
                      6,
                      0,
                      0,
                    ]}
                    barSize={12}
                  />

                  <Bar
                    dataKey="withdraw"
                    fill="#20cec6"
                    radius={[
                      6,
                      6,
                      0,
                      0,
                    ]}
                    barSize={12}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>

        </section>


        {/* EXPENSE STATISTICS */}

        <section >

          <div className="section-heading">
            <h2>Expense Statistics</h2>
          </div>

          <div className="chart-card-expense-card">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <PieChart>

                <Pie
                  data={expenseData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={105}
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={2}
                  label={({ value, name }) =>
                    `${value}%\n${name}`
                  }
                  labelLine={false}
                >

                  {expenseData.map(
                    (_, index) => (
                      <Cell
                        key={index}
                        fill={
                          expenseColors[index]
                        }
                      />
                    )
                  )}

                </Pie>

              </PieChart>

            </ResponsiveContainer>

          </div>

        </section>

      </div>


      {/* =================================
          BOTTOM SECTION
      ================================= */}

      <div className="dashboard-bottom">

        {/* QUICK TRANSFER */}

        <section>

          <div className="section-heading">
            <h2>Quick Transfer</h2>
          </div>
          <div className="form">

          <div className="transfer-card">

            <div className="people-row">

              {transferPeople.map(
                (person) => (

                  <div
                    className="person"
                    key={person.name}
                  >

                    <img
                      src={person.image}
                      alt={person.name}
                    />

                    <strong>
                      {person.name}
                    </strong>

                    <span>
                      {person.role}
                    </span>

                  </div>

                )
              )}

              <button className="next-person">
                <FiChevronRight />
              </button>

            </div>


            <div className="transfer-form">

              <span>
                Write Amount
              </span>

              <div className="amount-box">
                $525.50
              </div>

              <button className="send-button">
                Send
                <FiSend />
              </button>

            </div>

          </div>
          </div>

        </section>
        


        {/* BALANCE HISTORY */}

        <section>

          <div className="section-heading">
            <h2>Balance History</h2>
          </div>

          <div className="chart-card balance-chart">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <AreaChart
                data={balanceData}
              >

                <defs>
                  <linearGradient
                    id="balanceGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#2939f0"
                      stopOpacity={0.3}
                    />

                    <stop
                      offset="100%"
                      stopColor="#2939f0"
                      stopOpacity={0.02}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#eeeeee"
                />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "#9ba5c8",
                    fontSize: 10,
                  }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  ticks={[
                    0,
                    200,
                    400,
                    600,
                    800,
                  ]}
                  tick={{
                    fill: "#9ba5c8",
                    fontSize: 10,
                  }}
                />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="balance"
                  stroke="#2939f0"
                  strokeWidth={2.5}
                  fill="url(#balanceGradient)"
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </section>

      </div>

    </div>
  );
}


/* =================================
   TRANSACTION COMPONENT
================================= */

function Transaction({
  icon,
  title,
  date,
  amount,
  type,
}) {
  return (
    <div className="transaction">

      <div
        className={`transaction-icon ${icon}`}
      >
        {icon === "card" && (
          <FiCreditCard />
        )}

        {icon === "paypal" && (
          <span className="paypal">
            P
          </span>
        )}

        {icon === "user" && (
          <FiUsers />
        )}
      </div>

      <div className="transaction-info">

        <strong>{title}</strong>

        <span>{date}</span>

      </div>

      <strong
        className={`transaction-amount ${type}`}
      >
        {amount}
      </strong>

    </div>
  );
}

export default Dashboard;