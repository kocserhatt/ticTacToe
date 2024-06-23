import { useState } from "react"
import { useEffect } from "react"
import Swal from "sweetalert2"


const board = {
  display: "grid",
  gridTemplateColumns: "auto auto auto",
  gap: "10px 5px"
}

const tile = {
  backgroundColor: "grey",
  width: "50px",
  height: "50px",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
const tileBoardObject = {
  0: null,
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
  9: null,
}

export const Board = ({ nextPlayer, setNextPlayer, setHasWinner, hasWinner }) => {
  const [tileBoard, setTileBoard] = useState(tileBoardObject);

  useEffect(() => { checkWinner() }, [tileBoard])

  const resetGame = () => {
    setTileBoard(tileBoardObject)
    setHasWinner(false)
    setNextPlayer('X')
  }

  const checkWinner = () => {
    const winningCombination = [
      [0, 1, 2], 
      [3, 4, 5], 
      [6, 7, 8],
      [0, 3, 6], 
      [1, 4, 7], 
      [2, 5, 8],
      [0, 4, 8], 
      [2, 4, 6],
    ]
    winningCombination.map(combination => {
      const [a, b, c] = combination;
     if (tileBoard[a] && tileBoard[a] === tileBoard[b] && tileBoard[a] === tileBoard[c]){
      setHasWinner(true)
      setTimeout(() => {
        if (confirm(`Kazanan = "${tileBoard[a]}"   Yeniden Başlamak İster Misiniz?`)) {
          resetGame()
        }
      }, 100)
    }
  })
    return;
  }
  const handleClickTile = (param) => {
    if (tileBoard[param] === null && !hasWinner){
      setTileBoard(prevState => {
        return {
          ...prevState,
          [param]: nextPlayer
        }
      })

      setNextPlayer(nextPlayer => nextPlayer === 'X' ? '0' : 'X')
      checkWinner();
    }
  }

  return (
    <div>
      <div style={board}>
      {[...Array(9).keys()].map(element => {
        return (
          <div
            key={element}
            style={tile}
            onClick={() => handleClickTile(element)}
          >
            {tileBoard[element]}
          </div>
        )
      })}
    </div>
    <button onClick={() => resetGame()}>Reset</button>
    </div>
  )
}