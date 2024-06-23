import {useState} from 'react';
import { Header } from './components/header';
import { Board } from './components/board';
import './App.css';


function App() {
  const [nextPlayer, setNextPlayer] = useState('X');
  const [hasWinner, setHasWinner] = useState(false);

  return (
    <>
      <Header nextPlayer={nextPlayer} hasWinner={hasWinner} />
      <Board nextPlayer={nextPlayer} setNextPlayer={setNextPlayer} hasWinner={hasWinner} setHasWinner={setHasWinner} />
    </>
  )
}

export default App