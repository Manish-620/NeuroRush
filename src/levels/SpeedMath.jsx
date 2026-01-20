import React from "react";

import { useState } from "react";
function gen(){ const a=Math.floor(Math.random()*10); const b=Math.floor(Math.random()*10); return {a,b,answer:a+b};}
export default function SpeedMath({onScore}){
 const [q,setQ]=useState(gen()); const [input,setInput]=useState("");
 function submit(){ if(Number(input)===q.answer) onScore(v=>v+8); setInput(""); setQ(gen());}
 return <div className="mt-6">
   <h2 className="text-2xl mb-2">{q.a} + {q.b}</h2>
   <input className="text-black p-1" value={input} onChange={e=>setInput(e.target.value)} />
   <button onClick={submit} className="btn ml-2">Submit</button>
 </div>;
}
