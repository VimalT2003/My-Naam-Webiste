import React, { useEffect, useState } from 'react';
import '../styles/StatsSection.css'

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    products: 0,
    years: 0,
    support: 0
  });

  const stats = [
    { id: 'products', number: 50, label: 'Products', suffix: '+' },
    { id: 'years', number: 15, label: 'Years Experience', suffix: '+' },
    { id: 'support', number: 24, label: 'Support', suffix: '/7' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('stats-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    stats.forEach(stat => {
      let startValue = 0;
      const endValue = stat.number;
      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(easeOutQuart * endValue);

        setCounts(prevCounts => ({
          ...prevCounts,
          [stat.id]: currentValue
        }));

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          // Ensure we reach exactly the target number
          setCounts(prevCounts => ({
            ...prevCounts,
            [stat.id]: endValue
          }));
        }
      };

      requestAnimationFrame(updateCount);
    });
  }, [isVisible]);

  return (
    <div id="stats-section" className="stats-container mt-5">
      {stats.map((stat) => (
        <div 
          key={stat.id}
          className={`stat-item ${isVisible ? 'animate' : ''}`}
        >
          <h2 className="stat-number">
            {counts[stat.id]}{stat.suffix}
          </h2>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;