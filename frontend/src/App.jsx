import { use, useEffect, useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [winner, setWinner] = useState(null);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeIndex, setPrizeIndex] = useState(0);

  useEffect(()=> {
    fetch('http://localhost:5196/user')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);

  const wheelData = users.map(user => ({
    option: `${user.firstName} ${user.lastName}`
  }));

  const spinWheel = () => {
    if(mustSpin) return;

    if(users.length === 0) {
      alert("Inga users!");
    }

    const randomIndex = Math.floor(Math.random() * users.length);
    const selectedUser = users[randomIndex];

    setPrizeIndex(randomIndex);
    setWinner(selectedUser);
    setMustSpin(true);
  }
  return (
    <div className='container'>
    <h1>Spin the wheel</h1>
    <p>Klicka på knappen för att hämta dagens vinnare av en kaffe och en bulle i biblioteket</p>
    {users.length > 0 && (
      <div className="wheel-wrapper">
        <Wheel 
      mustStartSpinning={mustSpin}
      prizeNumber={prizeIndex}
      data={wheelData}
      onStopSpinning={() => setMustSpin(false)}
      fontSize={16}
      backgroundColors={["#1e90ff", "#57b1de", "#4637ed"]} 
      />
      </div>
      
    )}

    <button className='spin-button' onClick={spinWheel} disabled={mustSpin}>Snurra</button>

    {winner && !mustSpin && (
      <h2>
        Vinnare: {winner.firstName} {winner.lastName}
      </h2>
    )}
    </div>
  )
}

export default App
