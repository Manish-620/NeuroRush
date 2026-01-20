import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ColorMemory from "../levels/ColorMemory";
import ShapeReflex from "../levels/ShapeReflex";
import SpeedMath from "../levels/SpeedMath";

export default function Game() {
  const { level } = useParams();
  const navigate = useNavigate();

  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((t) => {
        if (t <= 1) {
          navigate("/gameover", { state: { score } });
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [score, navigate]);

  return (
    <div style={{ padding: 40, textAlign: "center" }}>

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          padding: "10px 16px",
          background: "#ff004f",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
          zIndex: 9999,
        }}
      >
        ⬅ Back
      </button>

      <h2 style={{ fontSize: 24 }}>Level {level}</h2>
      <p>
        Score: {score} | Time: {time}s
      </p>

      {level == 1 && <ColorMemory onScore={setScore} />}
      {level == 2 && <ShapeReflex onScore={setScore} />}
      {level == 3 && <SpeedMath onScore={setScore} />}
    </div>
  );
}
