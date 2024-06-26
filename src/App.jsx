

import { useState } from 'react';
import './App.css';


const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);



  const handleAddFighter = (fighter) => {
    console.log("button clicked");
    if (money >= fighter.price) {
      setMoney(money - fighter.price);
      setTeam([...team, fighter]);
      setTotalStrength(totalStrength + fighter.strength);
      setTotalAgility(totalAgility + fighter.agility);
    } else {
      console.log("You don't have enough money to purchase this fighter!" )
    }
  };

  const handleRemoveFighter = (idx) => {
    const fighter = team[idx];
    const teamChange = team.filter((i) => i !== idx);
    setTeam(teamChange);
    setMoney(money + fighter.price);
    setTotalStrength(totalStrength - fighter.strength);
    setTotalAgility(totalAgility - fighter.agility);
  }


  return (
    <>
    <h1>Zombie Fighters Available!</h1>
    <div>
      <h3>{money}</h3>
    <ul>
      {zombieFighters.map((fighter, idx) => {
        return <li  key={idx}>
          <h3>Fighter Name: {fighter.name}</h3> 
          <p>Fighter Cost: {fighter.price}</p> 
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
          <p>Fighter Image: {fighter.img}</p>
          <button onClick={handleAddFighter}>Add Team Mate</button>
          </li>
      })}
    </ul>
    </div>
    <div>
      <h2>My Fighters!</h2>
      <ul>
        {team.map((teamMate, idx) => {
          return <li key={idx}>
            <h3>Fighter Name: {teamMate.name}</h3>
            <p>Team mate Orice: {teamMate.price}</p>
            <p>Strength: {teamMate.strength}</p>
            <p>Agility: {teamMate.agility}</p>
            <button onClick={() => handleRemoveFighter(idx)}>Remove Team Mate</button>
          </li>
        })}
      </ul>
    </div>
    </>
  );
}

export default App

