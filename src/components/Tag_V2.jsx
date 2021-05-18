import React, {useState} from 'react';
import useGif from '../useGif'

const Tag = () => {
    const [tag,setTag] = useState('dogs');
    const {gif, fetchGif} = useGif(tag);
    
    return (
        <>
            <div className="container">
                <h1>Random {tag} GIF</h1>
                <img width="500" src={gif} alt="random-gif"></img>
                <input value={tag} onChange={(e) => setTag(e.target.value)}></input>
                <button onClick={() => fetchGif(tag)}>CLICK FOR NEW</button>
            </div>
        </>
    )
}

export default Tag;