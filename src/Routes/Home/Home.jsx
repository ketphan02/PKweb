import React from 'react';

// Import HTML
import Header from '../Header/Header';
import Profile from './Profile';

// Import CSS
import '../../App.css';

export default Home;

function Home() {
    return (
        <div className="App">
            <Header />
            
            <Profile />

            
        </div>
    );
}
