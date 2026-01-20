import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
      setTime(t => {
        if (t <= 1) {
          navigate("/gameover", { state: { score } });
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [score]);

  const progress = (time / 30) * 100;

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl mb-2">Level {level}</h2>
      <p>Score: {score}</p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden my-4">
        <div
          className="bg-neon h-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p>⏱️ Time Left: {time}s</p>

      {level == 1 && <ColorMemory onScore={setScore} />}
      {level == 2 && <ShapeReflex onScore={setScore} />}
      {level == 3 && <SpeedMath onScore={setScore} />}
    </div>
  );
}

