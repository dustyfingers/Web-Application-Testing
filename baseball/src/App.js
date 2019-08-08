import React, { useState } from 'react';

import './App.css';
import Display from './Display';
import Dashboard from './Dashboard';

function App() {
  const [foul, setFoul] = useState(0);
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [hit, setHit] = useState(0);
  return (
    <div className="App">
      TALKIN' BASEBALL
      <Display fouls={foul} strikes={strike} balls={ball} hits={hit} />
      <Dashboard
        fouls={foul}
        strikes={strike}
        balls={ball}
        hits={hit}
        setStrikes={setStrike}
        setFouls={setFoul}
        setBalls={setBall}
        setHits={setHit} />
    </div>
  );
}

export default App;
