import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Routes, Route, Router } from 'react-router-dom'
import { Button } from 'reactstrap';
import './App.css';
import CreatePlayer from './components/CreatePlayer';
import PlayerPool from './components/PlayerPool';

function App() {

  const [footballers,setFootballers] = useState([])


  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://64515638e1f6f1bb22ae6bf5.mockapi.io/players/v1/footballers")
        .then((res) => {
          setFootballers(res.data);
        });
    }, 3000);
  }, [footballers]);


  return (
    <div >
        <header>
          <h2>Halısaha Portalına Hoşgeldiniz</h2>
          <Link to="/"><button>Anasayfa</button></Link>
        </header>
        <div>
        <div className="button-style">
        <Link to="/createplayer"><button> New Player</button></Link>
        <Link to="/playerpool"><button> Player Pool</button></Link>
        </div> 
        <Routes>
          <Route path="/createplayer" element={<CreatePlayer />}/>
        </Routes>
      <Routes>
        <Route path="/playerpool" element={<PlayerPool players={footballers} />}/>
      </Routes>
      </div>
    
    </div>
  );
}

export default App;
