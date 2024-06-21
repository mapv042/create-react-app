import React, { useEffect, useState } from "react";
import "./styles.css";
import AppFlowers from "./AppFlowers";
import HeartLetter from "./heartLetter";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const GoodMorning = (props) => {
  const today = new Date();
  const curHr = today.getHours();

  let welcome = "Buenos Días";

  if (curHr < 12) {
    welcome = "Buenos Días";
  } else if (curHr < 18) {
    welcome = "Buenas Días";
  } else {
    welcome = "Buenas Noches";
  }
  return (
    <div class="body" onClick={() => props.setState(props.state + 1)}>
      <div class="big-heart"></div>
      <div class="contenido">
        <h1>{welcome} Annie</h1>
      </div>
    </div>
  );
};

const App2 = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("state: ", state);
  }, [state]);

  if (state === 0) {
    return <GoodMorning state={state} setState={setState} />;
  } else {
    return <AppFlowers />;
  }
};



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App2 />} />
        <Route path="/heart-letter" element={<HeartLetter />} />
      </Routes>
    </Router>
  );
};
export default App;
