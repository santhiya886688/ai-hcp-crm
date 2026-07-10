import React, { useState } from "react";
import axios from "axios";
import "./LogInteraction.css";

const LogInteraction = () => {
  const [activeTab, setActiveTab] = useState("form");

  // Form State
  const [formData, setFormData] = useState({
    doctor_name: "",
    hospital: "",
    interaction_type: "Visit",
    products_discussed: "",
    discussion: "",
    follow_up_date: "",
  });

  // Chat State
  const [chatMessage, setChatMessage] = useState("");
  const [chatResponse, setChatResponse] = useState("");

  // Handle Form Input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Save Interaction API
  const saveInteraction = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/log-interaction",
        formData
      );

      alert("Interaction Saved Successfully");
      console.log(res.data);
    } catch (err) {
      console.error(err);

      if (err.response) {
        alert(JSON.stringify(err.response.data));
      } else {
        alert("Server Connection Error");
      }
    }
  };

  // AI Chat API
  const sendMessage = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/chat",
        {
          message: chatMessage,
        }
      );

      setChatResponse(res.data.response);
    } catch (err) {
      console.error(err);

      if (err.response) {
        alert(JSON.stringify(err.response.data));
      } else {
        alert("Server Connection Error");
      }
    }
  };

  return (
    <div className="crm-container">
      <aside className="sidebar">
        <h2>🩺 AI CRM</h2>

        <ul>
          <li className="active">📋 Log Interaction</li>
          <li>👨‍⚕️ HCP Directory</li>
          <li>📜 Interaction History</li>
          <li>🤖 AI Assistant</li>
          <li>⚙ Settings</li>
        </ul>
      </aside>

      <main className="main-content">
        <div className="header">
          <div>
            <h1>Healthcare Professional CRM</h1>
            <p>
              Log interactions using a structured form or AI conversation.
            </p>
          </div>

          <button className="profile-btn">
            Field Representative
          </button>
        </div>

        <div className="card">
          <div className="tab-buttons">
            <button
              className={activeTab === "form" ? "tab active-tab" : "tab"}
              onClick={() => setActiveTab("form")}
            >
              Structured Form
            </button>

            <button
              className={activeTab === "chat" ? "tab active-tab" : "tab"}
              onClick={() => setActiveTab("chat")}
            >
              AI Chat
            </button>
          </div>

          {activeTab === "form" ? (
            <div className="form-container">

              <div className="row">

                <div className="input-group">
                  <label>Doctor Name</label>

                  <input
                    type="text"
                    name="doctor_name"
                    value={formData.doctor_name}
                    onChange={handleChange}
                    placeholder="Dr Ravi Kumar"
                  />
                </div>

                <div className="input-group">
                  <label>Hospital</label>

                  <input
                    type="text"
                    name="hospital"
                    value={formData.hospital}
                    onChange={handleChange}
                    placeholder="Apollo Hospital"
                  />
                </div>

              </div>

              <div className="row">

                <div className="input-group">
                  <label>Interaction Type</label>

                  <select
                    name="interaction_type"
                    value={formData.interaction_type}
                    onChange={handleChange}
                  >
                    <option>Visit</option>
                    <option>Phone Call</option>
                    <option>Online Meeting</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>Follow-up Date</label>

                  <input
                    type="date"
                    name="follow_up_date"
                    value={formData.follow_up_date}
                    onChange={handleChange}
                  />
                </div>

              </div>

              <div className="input-group">
                <label>Products Discussed</label>

                <input
                  type="text"
                  name="products_discussed"
                  value={formData.products_discussed}
                  onChange={handleChange}
                  placeholder="Diabetes Medicine"
                />
              </div>

              <div className="input-group">
                <label>Discussion Notes</label>

                <textarea
                  rows="6"
                  name="discussion"
                  value={formData.discussion}
                  onChange={handleChange}
                  placeholder="Discuss the meeting details..."
                ></textarea>
              </div>

              <button
                className="save-btn"
                onClick={saveInteraction}
              >
                Save Interaction
              </button>
            </div>
          ) : (

            <div className="chat-container">

              <div className="chat-box">

                <p className="ai-msg">
                  👋 Hello! Describe your meeting with the Healthcare Professional.
                </p>

                {chatResponse && (
                  <div className="ai-msg">
                    <strong>AI Response:</strong>
                    <br />
                    <pre
                      style={{
                        whiteSpace: "pre-wrap",
                        margin: 0,
                        fontFamily: "inherit",
                      }}
                    >
                      {chatResponse}
                    </pre>
                  </div>
                )}

              </div>

              <textarea
                rows="8"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Example: Today I met Dr Ravi at Apollo Hospital. We discussed our new diabetes medicine. Follow-up next Tuesday."
              ></textarea>

              <button
                className="send-btn"
                onClick={sendMessage}
              >
                Send to AI
              </button>

            </div>

          )}

        </div>

        <div className="recent-card">

          <h2>Recent Interactions</h2>

          <table>

            <thead>

              <tr>
                <th>Doctor</th>
                <th>Hospital</th>
                <th>Date</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>Dr. Ravi Kumar</td>
                <td>Apollo Hospital</td>
                <td>09 Jul 2026</td>
                <td>
                  <span className="badge">
                    Completed
                  </span>
                </td>
              </tr>

              <tr>
                <td>Dr. Priya</td>
                <td>Fortis</td>
                <td>07 Jul 2026</td>
                <td>
                  <span className="badge pending">
                    Follow-up
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
};

export default LogInteraction;
