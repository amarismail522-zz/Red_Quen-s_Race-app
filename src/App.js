import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const redQueen = useRef(null);


  useEffect(() => {
    var queenFrames = [
      { transform: "translateY(0)" },
      { transform: "translateY(-100%)" }
    ];

    var Queen = redQueen.current.animate(
      queenFrames, {
      easing: 'steps(7, end)',
      direction: "reverse",
      duration: 1000,
      playbackRate: 1,
      iterations: Infinity
    });
  })


  return (
    <div className="wrapper">
      <div className="sky"></div>
      <div className="earth">
        <div className="aliceQueen">
          <img className="aliceQueen-img" ref={redQueen} alt=" " src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" />
        </div>
      </div>

    </div>
  );
}

export default App;
