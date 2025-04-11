import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Plan.css"; // Keep existing CSS

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const [hardwareList, setHardwareList] = useState([]);
  const [loadingPlans, setLoadingPlans] = useState(true);
  const [loadingHardware, setLoadingHardware] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

  // Fetch plans (from Plan)
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get("https://zencia-finalbackend.vercel.app/api/license/get-plans");
        setPlans(response.data.allPlans);
        setLoadingPlans(false);
      } catch (err) {
        setError(err.message);
        setLoadingPlans(false);
      }
    };
    fetchPlans();
  }, []);

  // Fetch hardware IDs (from Plan, identical to Plans)
  useEffect(() => {
    const fetchHardware = async () => {
      try {
        const response = await axios.get("https://zencia-finalbackend.vercel.app/api/hardware/hardwares-by-user", {
          headers: { Authorization: `${token}` },
        });
        setHardwareList(response.data.hardwareList);
        setLoadingHardware(false);
      } catch (error) {
        setError(error.message);
        setLoadingHardware(false);
      }
    };
    if (token) fetchHardware();
    else setLoadingHardware(false);
  }, [token]);

  // Handle plan selection (from Plan)
  const handlePlanSelect = (planId, planName) => {
    navigate("/plan-selection", {
      state: {
        planId,
        planName,
        hardwareList,
      },
    });
  };

  if (loadingPlans || loadingHardware) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  // Map plans to the three-card layout, matching original Plans design
  const trialPlan = plans.find((p) => p.name === "Trial") || {};
  const customPlan = plans.find((p) => p.name === "Custom") || {};
  const premiumPlan = plans.find((p) => p.name === "Premium") || {};

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <div className="pricing-title-tag">Pricing Plan</div>
        <h1 className="pricing-title">Choose Your Most Suitable Pricing Plan</h1>
      </div>

      <div className="pricing-cards-container">
        {/* Trial Plan Card */}
        <div className="pricing-card">
          <h2 className="plan-title">{trialPlan.name || "Trial"}</h2>
          <p className="plan-description">
            {trialPlan.name ? "Limited time access to all features" : "Plan data not available"}
          </p>

          <div className="pricing-info">
            <div className="original-price">${trialPlan.price ? trialPlan.price + 1 : "1"}</div>
            <div className="current-price">${trialPlan.price || "0"}</div>
          </div>

          <p className="plan-time-info">
            Perfect for testing the platform{trialPlan.duration ? ` (${trialPlan.duration} days)` : ""}
          </p>

          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              Limited Time Access
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              Full Feature Access
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              Priority Support
            </div>
          </div>

          <button
            className="choose-plan-btn"
            onClick={() => handlePlanSelect(trialPlan._id, trialPlan.name || "Trial")}
          >
            Choose This Plan <span className="arrow-icon">→</span>
          </button>
        </div>

        {/* Yearly Plan Card (Custom) */}
        <div className="pricing-card popular">
          <div className="popular-tag">
            <span className="popular-icon">⚡</span> Most Popular
          </div>

          <h2 className="plan-title">{customPlan.name || "1 Year Plan"}</h2>
          <p className="plan-description">
            {customPlan.name ? "Access all features for 1 year" : "Plan data not available"}
          </p>

          <div className="pricing-info">
            <div className="original-price">${customPlan.price ? customPlan.price + 50 : "99"}</div>
            <div className="current-price">${customPlan.price || "49"}</div>
          </div>

          <p className="plan-time-info">
            Ideal for long-term use{customPlan.duration ? ` (${customPlan.duration} days)` : ""}
          </p>

          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              {customPlan.duration ? `${customPlan.duration} Days Access` : "1 Year Access"}
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              Full Feature Access
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              Priority Support
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              Personas for Business Workflows
            </div>
          </div>

          <button
            className="choose-plan-btn gradient-btn"
            onClick={() => handlePlanSelect(customPlan._id, customPlan.name || "Custom")}
          >
            Choose This Plan <span className="arrow-icon">→</span>
          </button>
        </div>

        {/* Enterprise Plan Card (Premium) */}
        <div className="pricing-card">
          <h2 className="plan-title">{premiumPlan.name || "Customization & Enterprise"}</h2>
          <p className="plan-description">
            {premiumPlan.name ? "Perfect for businesses with advanced needs" : "Plan data not available"}
          </p>

          <div className="contact-info">
            <p>Get in touch</p>
          </div>

          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              Lifetime Access
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              Priority Support
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              White Label Solution
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              Advanced Customization
            </div>
          </div>

          <button
            className="choose-plan-btn contact-btn"
            onClick={() => handlePlanSelect(premiumPlan._id, premiumPlan.name || "Premium")}
          >
            Contact Us <span className="arrow-icon">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;