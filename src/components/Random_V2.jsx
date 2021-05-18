import React from 'react';
import useGif from '../useGif'

const Tag = () => {
    const {gif, fetchGif} = useGif();
    
    return (
        <>
            <div className="container">
                <h1>Random GIF</h1>
                <img width="500" src={gif} alt="random-gif"></img>
                <button onClick={fetchGif}>CLICK FOR NEW</button>
            </div>
        </>
    )
}

export default Tag;