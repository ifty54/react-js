import React from "react"

export default function App() {
  
  const [gameRunning, setGameRunning] = React.useState(false)

function handleClick() {setGameRunning(!gameRunning)}
    return (
        <div> 
          
          <button 
            onClick={handleClick} 
            className="video-game-button"
          >
            {gameRunning ? "Pause" : "Play"}
          </button>      

        </div>
  )
}