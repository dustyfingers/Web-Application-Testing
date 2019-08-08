import React from 'react'

const Dashboard = ({ hits, strikes, fouls, balls, setStrikes, setFouls, setBalls, setHits }) => {
    return (
        <div>
            <button onClick={() => setHits(hits + 1)}>ADD HIT</button>
            <button onClick={() => setStrikes(strikes + 1)}>ADD STRIKE</button>
            <button onClick={() => setBalls(balls + 1)}>ADD BALL</button>
            <button onClick={() => setFouls(fouls + 1)}>ADD FOUL</button>
        </div>
    )
}

export default Dashboard;