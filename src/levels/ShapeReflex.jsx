import React from "react";

import { useState } from "react";
const shapes=["⬛","🔺","⚪"];
export default function ShapeReflex({onScore}){
 const [target,setTarget]=useState(rand());
 function rand(){return shapes[Math.floor(Math.random()*shapes.length)];}
 function tap(s){ if(s===target) onScore(v=>v+5); setTarget(rand());}
 return <div className="mt-6">
   <h2 className="text-4xl mb-4">{target}</h2>
   {shapes.map(s=><button key={s} onClick={()=>tap(s)} className="btn m-2">{s}</button>)}
 </div>;
}
