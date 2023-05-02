import axios from 'axios'
import React from 'react'
import CreatePlayer from './CreatePlayer'

const PlayersCard = ( {players} ) => {

    return 
    <div>
                <div className="player-card">
                <h2>{players.name}</h2>
                <h3>{players.age}</h3>
                <h3>{players.city}</h3>
                <h3>{players.number}</h3>
                </div>
         
             </div>
    
}

export default PlayersCard
