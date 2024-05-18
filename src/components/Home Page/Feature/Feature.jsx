import React, { useEffect, useState } from "react";
import "./Feature.css";
import AirPlaneImg from "./../../../assets/airplane.png";

const ProgressBar = ({ progress, barTitle }) => {
  // Calculate the width of the progress bar dynamically based on the progress value
  // State to manage animation
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [animateSpan, setAnimateSpan] = useState(false);

  // Animate the progress
  useEffect(() => {
    const animationInterval = setInterval(() => {
      if (animatedProgress < progress) {
        setAnimatedProgress((prevProgress) => prevProgress + 2);
      } else {
        clearInterval(animationInterval);
      }
    }, 10); // Adjust the interval for smoother animation
    return () => clearInterval(animationInterval);
  }, [progress, animatedProgress]);

  return (
    <div className="single-skill">
      <div className="bar-title">
        <h4>{barTitle}</h4>
        <span
          className={animateSpan ? "animated-span" : ""}
        >{`${animatedProgress}%`}</span>
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${animatedProgress}%` }}
          aria-valuenow={animatedProgress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

const Feature = () => {
  const barDetails = [
    { barTitle: "Qualitative Products", progress: 100 },
    { barTitle: "Positive Records", progress: 100 },
    { barTitle: "Economical Price Range", progress: 100 },
  ];

  return (
    <section className="feature-section">
      <div className="feature-container">
        <div
          className="feature-bg-image"
          style={{
            backgroundImage: `url("https://www.marvelpack.com/wp-content/uploads/2021/05/Why-marvel-pack.jpg")`,
          }}
        ></div>

        <div className="f-wrapper">
          <div className="feature-wrapper">
            <div className="section-title">
              <h1>05</h1>
              <span className="sline">Why</span>
              <h2>Marvel Pack</h2>
            </div>
            <p>
              We are an eminent firm that is actively committed to offering
              premium quality range of products within the minimum time and at
              genuine rates. Few of the essential factors that help us to become
              the prime choice of the patrons are listed in Skills.
            </p>
          </div>
        </div>
      </div>

      <div className="feature-container2">
        <div className="f-wrapper2">
          <div className="feature-wrapper2">
            <div className="section-title">
              <h1>06</h1>
              <span className="sline">Our Skills</span>
              <h2>
                Our Professiona
                <br /> Experience & Skills
              </h2>
            </div>
            <div className="progress-bar-text">
              <div className="progress-skill">
                {barDetails.map((item) => {
                  return (
                    <ProgressBar
                      barTitle={item.barTitle}
                      progress={item.progress}
                    />
                  );
                })}
              </div>
              <a className="btn" href="#">
                GET A QUOTE <img src={AirPlaneImg} alt="airplane image" />
              </a>
            </div>
          </div>
        </div>

        <div
          className="feature-bg-image"
          style={{
            backgroundImage: `url("https://www.marvelpack.com/wp-content/uploads/2021/05/skill.jpg")`,
            height: "40rem",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Feature;