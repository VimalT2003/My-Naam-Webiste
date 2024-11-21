import React from 'react';
import '../styles/SafetyFirst.css';
import Banner from './Banner';

const SafetyFirst = () => {
  return (
    <div className="safety-first-container">
      {/* Hero Banner Section */}
      <Banner/>

      {/* Main Content Section */}
      <div className="content-section">
        <div className="introduction">
          <p className="intro-text">
            We introduce ourselves as one of the leading Dealers, Distributors, Suppliers, Traders, Sales And Services Provider of complete range of Fire Fighting And Life Safety Equipments like
          </p>
        </div>

        <div className="equipment-list">
          {/* Fire Extinguishers */}
          <div className="list-item">
            <span className="bullet">🔸</span>
            <p>
              <strong>Fire Extinguishers (New & Refilling Services in all leading brands)</strong>
            </p>
          </div>

          {/* Fire Hydrant Systems */}
          <div className="list-item">
            <span className="bullet">🔸</span>
            <p>
              <strong>Fire Hydrant Systems (New Installation, Repairing, Maintenance Services)</strong>
            </p>
          </div>

          {/* Fire Alarm Systems */}
          <div className="list-item">
            <span className="bullet">🔸</span>
            <p>
              <strong>Fire Alarm Systems (Conventional And Addressable)</strong> 
            </p>
          </div>

          {/* Fire Sprinkler Systems */}
          <div className="list-item">
            <span className="bullet">🔸</span>
            <p><strong>Fire Sprinkler Systems</strong></p>
          </div>

          {/* Flooding Systems */}
          <div className="list-item">
            <span className="bullet">🔸</span>
            <p><strong>Flooding Systems- FM 200 Systems</strong></p>
          </div>

          {/* Life Safety Equipment */}
          <div className="list-item">
            <span className="bullet">🔸</span>
            <p className="multiline-item">
              <strong>Life Safety Equipments: Breathing Apparatus, Proximity Suits, Fire Safety Face Shields, Protective Eye Wears, Fire Blankets, Fire Safety Hand Gloves, Wind Shocks, Fire Check Doors, Gas Masks, Fire Safety Helmets, Fire Safety Lamps, Fire Safety Gumboots, Fire Hooks, Fire Beaters, Fireman Axe, Metal Detectors etc.</strong>
            </p>
          </div>

          {/* Sign Boards */}
          <div className="list-item">
            <span className="bullet">🔸</span>
            <p className="multiline-item">
              <strong>Sign Boards: Laminated / Unlamented Glow Sign Boards on acrylic sheet board, Glow Photoluminescent Emergency Wayfinding Systems, SS ( Stainless Steel ) Plate Boards, Electric Boards, LED Boards, Stroller Boards etc.</strong>
            </p>
          </div>

          {/* Road Safety Equipment */}
          <div className="list-item">
            <span className="bullet">🔸</span>
            <p>
              <strong>Road Safety Equipments: Rubber Speed Breakers, Convex Mirrors</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyFirst;