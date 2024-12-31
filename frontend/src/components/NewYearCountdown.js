import React, { useState, useEffect } from 'react';
import { X, PartyPopper, Sparkles, Rocket } from 'lucide-react';
import '../styles/NewYearCountdown.css';

const NewYearCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isNewYear, setIsNewYear] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const newYear = new Date('January 1, 2025').getTime();
      const now = new Date().getTime();
      const difference = newYear - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setIsNewYear(true);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  // Handle click outside to close
  const handleOverlayClick = (e) => {
    if (e.target.className === 'popup-overlay') {
      closePopup();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-content">
        <div className="close-button-wrapper">
          <button 
            className="close-button" 
            onClick={closePopup}
            aria-label="Close popup"
          >
            <X size={24} />
          </button>
        </div>

        {!isNewYear ? (
          <div className="countdown-container">
            <h2 className="popup-title">Countdown to 2025</h2>
            <div className="timer-grid">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="timer-item">
                  <div className="time-value">{value.toString().padStart(2, '0')}</div>
                  <div className="time-label">{unit}</div>
                </div>
              ))}
            </div>
            <div className="message-container">
              <div className="celebration-icons">
                <Sparkles className="icon sparkle" size={24} />
                <PartyPopper className="icon party" size={24} />
                <Rocket className="icon rocket" size={24} />
              </div>
              <p className="countdown-message">
                Let's celebrate an amazing New Year together with NAAM!
              </p>
              <div className="celebration-icons">
                <Rocket className="icon rocket" size={24} />
                <PartyPopper className="icon party" size={24} />
                <Sparkles className="icon sparkle" size={24} />
              </div>
            </div>
          </div>
        ) : (
          <div className="celebration-container">
            <h2 className="celebration-title">Happy New Year 2025! 🎉</h2>
            <div className="fireworks">✨ 🎆 ✨</div>
            <p className="celebration-message">
              May this year bring new happiness, new goals, new achievements, and many new inspirations in your life—together with NAAM!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewYearCountdown;