import React, { useState, useRef } from "react";
import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";
import soundFile from "../assets/sakura.mp3";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
      ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <audio ref={audioRef} src={soundFile} loop />
      
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            SANJAY-TAMANG
            <div className="spinner">
              <div className="spinner__image" />
            </div>
          </h1>

          <p className="intro__scroll">
            Scroll to begin the journey !!!
          </p>
        
          <img
            className="intro__scroll"
            src="./images/mouse.png"
            style={{ width: '30px', height: 'auto', margin: '-35px 0' }}
            alt="Mouse"
          />

          <button
            className="explore"
            onClick={() => {
              setPlay(true);
              handlePlayPause(); // Start playing the sound when the journey begins
            }}
          >
            START
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">Wish you had a great flight with me...</p>
        <button
            className="explore"
            onClick={() => window.location.reload()}
          >
            RESTART
          </button>

          <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/sanjaytamang" target="_blank" rel="noopener noreferrer">
            <img src="./images/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer">
            <img src="./images/behance.png" alt="Behance" />
          </a>
          <a href="https://www.dribbble.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/dribbble.png" alt="Dribbble" />
          </a>
          {/* Add more social links as needed */}
        </div>
        
      </div>
    </div>
  );
};

