import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold text-neon">🎮 NeuroRush</h1>
      <p>Memory & Reflex Challenge Game</p>

      <div className="flex gap-4">
        <Link to="/game/1" className="btn">Level 1</Link>
        <Link to="/game/2" className="btn">Level 2</Link>
        <Link to="/game/3" className="btn">Level 3</Link>
      </div>
    </div>
  );
}
