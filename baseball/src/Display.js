import React from 'react'

const Display = ({ hits, strikes, fouls, balls }) => {
    return (
        <div>
            <h3>{hits} hits</h3>
            <h3>{strikes} strikes</h3>
            <h3>{balls} balls</h3>
            <h3>{fouls} fouls</h3>
        </div>
    )
}

export default Display;
