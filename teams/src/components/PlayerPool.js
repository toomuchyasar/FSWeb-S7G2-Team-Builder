import axios from "axios";
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import PlayerCard from "./PlayersCard";
import "./PlayerPool.css"


const  PlayerPool = ( {players}) => {
    const [filterText, setFilterText] = useState("");
    const [filteredPlayers,setFilteredPlayers] = useState([]);

    useEffect(() => {
        setFilteredPlayers(
        players.filter((player) =>
        player.name.toLowerCase()
        )
    );
        },[players]);

       


  return (
    <div className="player-container">
        {filteredPlayers.map((player,i) => {
        return (
        <div className="player-card">
            
            <h2>Name: {player.name}</h2>
            <h3>Age: {player.age}</h3>
            <h3>City: {player.city}</h3>
            <h3>Number: {player.number}</h3>
            </div>
         );
        })}
      </div>
    
  );
};

export default PlayerPool