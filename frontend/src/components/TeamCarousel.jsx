import React, { useState, useEffect } from "react";
import "./TeamCarousel.css"; // CSS styles will go here

const teamMembers = [
  { name: "Aashi Goel", role: "Team Leader", img: "src/assets/aashi.jpeg" },
  { name: "Disha", role: "Team Member", img: "src/assets/disha.jpg" },
  { name: "Kanishka Sharma", role: "Team Member", img: "src/assets/kanishka.jpeg" },
  { name: "Sangya Ojha", role: "Team Member", img: "src/assets/sangya.jpeg" },
  { img: "src/assets/Card1.jpg" },
  { img: "src/assets/Card2.jpg" }
];
 
const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((newIndex + teamMembers.length) % teamMembers.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") updateCarousel(currentIndex - 1);
    else if (e.key === "ArrowRight") updateCarousel(currentIndex + 1);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="team-section">
      <h1 className="about-title">OUR TEAM</h1>

      <div className="carousel-container">
        <button className="nav-arrow left" onClick={() => updateCarousel(currentIndex - 1)}>‹</button>
        <div className="carousel-track">
          {teamMembers.map((member, i) => {
            const offset = (i - currentIndex + teamMembers.length) % teamMembers.length;
            let className = "card";
            if (offset === 0) className += " center";
            else if (offset === 1) className += " right-1";
            else if (offset === 2) className += " right-2";
            else if (offset === teamMembers.length - 1) className += " left-1";
            else if (offset === teamMembers.length - 2) className += " left-2";
            else className += " hidden";
            return (
              <div className={className} key={i} onClick={() => updateCarousel(i)}>
                <img src={member.img} alt={`Team Member ${i + 1}`} />
              </div>
            );
          })}
        </div>
        <button className="nav-arrow right" onClick={() => updateCarousel(currentIndex + 1)}>›</button>
      </div>

      <div className="member-info">
        <h2 className="member-name">{teamMembers[currentIndex].name}</h2>
        <p className="member-role">{teamMembers[currentIndex].role}</p>
      </div>

      <div className="dots">
        {teamMembers.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => updateCarousel(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel; 