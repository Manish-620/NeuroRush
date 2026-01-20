import React from "react";

import { useEffect, useState } from "react";
const colors = ["red","blue","green","yellow"];
export default function ColorMemory({ onScore }) {
  const [sequence,setSequence]=useState([]);
  const [user,setUser]=useState([]);
  useEffect(()=>next(),[]);
  function next(){
    const n=[...sequence,colors[Math.floor(Math.random()*4)]];
    setSequence(n); setUser([]);
  }
  function tap(c){
    const u=[...user,c]; setUser(u);
    if(sequence[u.length-1]!==c){ alert("Wrong"); setSequence([]); next(); return;}
    if(u.length===sequence.length){ onScore(s=>s+10); next();}
  }
  return <div className="grid grid-cols-2 gap-4 mt-6">
    {colors.map(c=><button key={c} onClick={()=>tap(c)} style={{background:c}} className="h-24 rounded-xl" />)}
  </div>;
}
