// import React from "react"
// import { useState } from "react"

// function Bg() {
//     const [color, setColor] = useState("black")
//     return(
//         <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
//       <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//         <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//           <button onClick={() => setColor("red")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
//           <button onClick={() => setColor("blue")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
//           <button onClick={() => setColor("pink")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "pink"}}>Pink</button>
//           <button onClick={() => setColor("yellow")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "yellow"}}>Yellow</button>
//           <button onClick={() => setColor("gray")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "gray"}}>Gray</button>
//           <button onClick={() => setColor("purple")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "purple"}}>Purple</button>
//           <button onClick={() => setColor("white")} className=" outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "white"}}>White</button>
//         </div>
//       </div>

//     </div>
//     )
// }

// export default Bg

import React, { useState } from "react";

function Bg() {
  const [color, setColor] = useState("black");

  const colors = ["red", "blue", "pink", "yellow", "gray", "purple", "white"];

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((col) => (
            <button
              key={col}
              onClick={() => setColor(col)}
              className={`outline-none px-4 py-1 rounded-full shadow-lg ${col === "white" ? "text-black" : "text-white"}`}
              style={{ backgroundColor: col }}
            >
              {col.charAt(0).toUpperCase() + col.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bg;
