import React from 'react';
import './App.css';

import Random from './components/Random_V1'
import Tag from './components/Tag_V1'

const App = () => {
    return (
        <div>
            <h1>Random GIF Application</h1>
            <div className="name-container">
                <Random />
                <Tag />
            </div>
        </div>
    )
}

export default App;