import React, { useState } from "react";
import {
  FaCamera,
  FaChevronDown,
} from "react-icons/fa";

import "./Setting.css";

const Setting = () => {
  const [activeTab, setActiveTab] = useState("Edit Profile");

  // Edit Profile states
  const [profile, setProfile] = useState({
    name: "Charlene Reed",
    username: "Charlene Reed",
    email: "charlenereed@gmail.com",
    password: "1234567890",
    dob: "25 January 1990",
    presentAddress: "San Jose, California, USA",
    permanentAddress: "San Jose, California, USA",
    city: "San Jose",
    postalCode: "45962",
    country: "USA",
  });

  // Preferences states
  const [currency, setCurrency] = useState("USD");
  const [timeZone, setTimeZone] = useState(
    "(GMT-12:00) International Date Line West"
  );

  const [digitalCurrency, setDigitalCurrency] = useState(true);
  const [merchantOrder, setMerchantOrder] = useState(false);
  const [recommendation, setRecommendation] = useState(true);

  // Security states
  const [twoFactor, setTwoFactor] = useState(true);
  const [currentPassword, setCurrentPassword] =
    useState("1234567890");
  const [newPassword, setNewPassword] = useState("1234567890");


  // ==========================================
  // PROFILE INPUT
  // ==========================================

  const handleProfileChange = (e) => {
    const { name, value } = e.target;

    setProfile({
      ...profile,
      [name]: value,
    });
  };


  // ==========================================
  // TOGGLE COMPONENT
  // ==========================================

  const Toggle = ({ enabled, setEnabled }) => {
    return (
      <button
        type="button"
        className={`settings-toggle ${
          enabled ? "toggle-active" : ""
        }`}
        onClick={() => setEnabled(!enabled)}
      >
        <span></span>
      </button>
    );
  };


  return (
    <div className="settings-page">

      {/* ==========================================
          SETTINGS TABS
      ========================================== */}

      <div className="settings-tabs">

        <button
          className={`settings-tab ${
            activeTab === "Edit Profile"
              ? "active"
              : ""
          }`}
          onClick={() => setActiveTab("Edit Profile")}
        >
          Edit Profile
        </button>


        <button
          className={`settings-tab ${
            activeTab === "Preferences"
              ? "active"
              : ""
          }`}
          onClick={() => setActiveTab("Preferences")}
        >
          Preferences
        </button>


        <button
          className={`settings-tab ${
            activeTab === "Security"
              ? "active"
              : ""
          }`}
          onClick={() => setActiveTab("Security")}
        >
          Security
        </button>

      </div>


      {/* =====================================================
          EDIT PROFILE
      ===================================================== */}

      {activeTab === "Edit Profile" && (

        <div className="settings-profile">

          {/* PROFILE IMAGE */}

          <div className="settings-photo">

            <div className="settings-photo-wrapper">

              <img
                src="https://i.pravatar.cc/150?img=47"
                alt="Profile"
              />

              <button className="camera-button">
                <FaCamera />
              </button>

            </div>

          </div>


          {/* PROFILE FORM */}

          <div className="settings-profile-form">

            {/* YOUR NAME */}

            <div className="settings-field">

              <label>Your Name</label>

              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
              />

            </div>


            {/* USER NAME */}

            <div className="settings-field">

              <label>User Name</label>

              <input
                type="text"
                name="username"
                value={profile.username}
                onChange={handleProfileChange}
              />

            </div>


            {/* EMAIL */}

            <div className="settings-field">

              <label>Email</label>

              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
              />

            </div>


            {/* PASSWORD */}

            <div className="settings-field">

              <label>Password</label>

              <input
                type="password"
                name="password"
                value={profile.password}
                onChange={handleProfileChange}
              />

            </div>


            {/* DATE OF BIRTH */}

            <div className="settings-field">

              <label>Date of Birth</label>

              <div className="settings-input-icon">

                <input
                  type="text"
                  name="dob"
                  value={profile.dob}
                  onChange={handleProfileChange}
                />

                <FaChevronDown />

              </div>

            </div>


            {/* PRESENT ADDRESS */}

            <div className="settings-field">

              <label>Present Address</label>

              <input
                type="text"
                name="presentAddress"
                value={profile.presentAddress}
                onChange={handleProfileChange}
              />

            </div>


            {/* PERMANENT ADDRESS */}

            <div className="settings-field">

              <label>Permanent Address</label>

              <input
                type="text"
                name="permanentAddress"
                value={profile.permanentAddress}
                onChange={handleProfileChange}
              />

            </div>


            {/* CITY */}

            <div className="settings-field">

              <label>City</label>

              <input
                type="text"
                name="city"
                value={profile.city}
                onChange={handleProfileChange}
              />

            </div>


            {/* POSTAL CODE */}

            <div className="settings-field">

              <label>Postal Code</label>

              <input
                type="text"
                name="postalCode"
                value={profile.postalCode}
                onChange={handleProfileChange}
              />

            </div>


            {/* COUNTRY */}

            <div className="settings-field">

              <label>Country</label>

              <input
                type="text"
                name="country"
                value={profile.country}
                onChange={handleProfileChange}
              />

            </div>


            {/* SAVE */}

            <div className="settings-save profile-save">

              <button>
                Save
              </button>

            </div>

          </div>

        </div>
      )}


      {/* =====================================================
          PREFERENCES
      ===================================================== */}

      {activeTab === "Preferences" && (

        <div className="settings-preferences">

          {/* CURRENCY */}
          <div className="preferance">

          <div className="preference-field">

            <label>Currency</label>

            <input
              type="text"
              value={currency}
              onChange={(e) =>
                setCurrency(e.target.value)
              }
            />

          </div>


          {/* TIME ZONE */}

          <div className="preference-field">

            <label>Time Zone</label>

            <input
              type="text"
              value={timeZone}
              onChange={(e) =>
                setTimeZone(e.target.value)
              }
            />

          </div>
          </div>


          {/* NOTIFICATION */}

          <div className="notification-container">

            <h4>
              Notification
            </h4>


            {/* DIGITAL CURRENCY */}

            <div className="notification-item">

              <Toggle
                enabled={digitalCurrency}
                setEnabled={setDigitalCurrency}
              />

              <span>
                I send or receive digital currency
              </span>

            </div>


            {/* MERCHANT ORDER */}

            <div className="notification-item">

              <Toggle
                enabled={merchantOrder}
                setEnabled={setMerchantOrder}
              />

              <span>
                I receive merchant order
              </span>

            </div>


            {/* RECOMMENDATION */}

            <div className="notification-item">

              <Toggle
                enabled={recommendation}
                setEnabled={setRecommendation}
              />

              <span>
                There are recommendation for my account
              </span>

            </div>

          </div>


          {/* SAVE */}

          <div className="settings-save preference-save">

            <button>
              Save
            </button>

          </div>

        </div>
      )}


      {/* =====================================================
          SECURITY
      ===================================================== */}

      {activeTab === "Security" && (

        <div className="settings-security">

          {/* TWO FACTOR */}

          <div className="two-factor-section">

            <h4>
              Two-factor Authentication
            </h4>

            <div className="two-factor-row">

              <Toggle
                enabled={twoFactor}
                setEnabled={setTwoFactor}
              />

              <span>
                Enable or disable two factor authentication
              </span>

            </div>

          </div>


          {/* CHANGE PASSWORD */}

          <div className="change-password">

            <h4>
              Change Password
            </h4>


            {/* CURRENT PASSWORD */}

            <div className="security-field">

              <label>
                Current Password
              </label>

              <input
                type="password"
                value={currentPassword}
                onChange={(e) =>
                  setCurrentPassword(e.target.value)
                }
              />

            </div>


            {/* NEW PASSWORD */}

            <div className="security-field">

              <label>
                New Password
              </label>

              <input
                type="password"
                value={newPassword}
                onChange={(e) =>
                  setNewPassword(e.target.value)
                }
              />

            </div>

          </div>


          {/* SAVE */}

          <div className="settings-save security-save">

            <button>
              Save
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default Setting;