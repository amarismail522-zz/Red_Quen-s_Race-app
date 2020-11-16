import React, { useEffect } from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";


function App() {
  const { ref } = useWebAnimations({
    keyframes: {
      transform: ['translateY(0)',],
      transform: ['translateY(100%)']
    },
    timing: {
      easing: 'steps(7, end)',
      direction: "reverse",
      duration: 5000,
      playbackRate: 1,
      iterations: Infinity
    }
  });
  return (
    <div className="wrapper">
      <div className="sky">
        <img id="bg-sky" src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bg_sky.jpg"} />
        <img id="bg-sky" src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bg_sky.jpg"} />
      </div>
      <div className="earth">
      </div>
      <div id="red-quen-div">
      <img id="red-quen" ref={ref} src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"} />

      </div>
    </div>
  );
}

export default App;
