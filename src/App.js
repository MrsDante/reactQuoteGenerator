import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    fetchFunction()
  }, []);

  const fetchFunction = async() => {
    const data = await fetch('https://api.adviceslip.com/advice');
    const response = await data.json();
    const newAdvice = Object.values(response).map(el => el.advice).join('');

    setAdvice(newAdvice);
    console.log(newAdvice)
  };

  return (
    <div className="App">
      <h1>{advice}</h1>
    </div>
  );
}

export default App;
