import axios from "axios";
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const CreatePlayer = () => {
   const [player,setPlayer] = useState({
    name: "",
    age: "",
    number: "",
    city: ""
   });

   const nav = useNavigate();

  return (

  <div>
 
    <Form onSubmit={(event) => {
        event.preventDefault()
        axios.post("https://64515638e1f6f1bb22ae6bf5.mockapi.io/players/v1/footballers ", player)
            .then((res) => console.log(res))      
    }}>
          
    <FormGroup>
        <Label htmlFor="player-name">Name :</Label>
        <Input
         id="player-name"
         name="name"
         type="text"
         placeholder="Name-Surname" 
        onChange={(event) => {
            setPlayer({...player, name: event.target.value})
            }}
        value={player.name}/>
    </FormGroup>

    <FormGroup>
        <Label htmlFor="player-age">Age :</Label>
        <Input id="player-age" name="age" type="text"
        onChange={(event) => {
            setPlayer({...player, age: event.target.value})
            }}
        value={player.age}/>
    </FormGroup>

    <FormGroup>
        <Label htmlFor="player-number">number :</Label>
        <Input id="player-number" name="number" type="text" placeholder="Jersey Number"
        onChange={(event) => {
            setPlayer({...player, number: event.target.value})
            }}
        value={player.number}
        />   
    </FormGroup>
    <FormGroup>

        <Label htmlFor="player-city">City :</Label>
        <Input id="player-city" name ="city"type="text"
        onChange={(event) => {
            setPlayer({...player, city: event.target.value})
            }}
        value={player.city}/>
    </FormGroup>

    <button type="submit">Sing Up</button>
    </Form>
    </div>
    );
  
       

};


export default CreatePlayer