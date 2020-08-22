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
            <div className="Home-page">
                <Profile />
            </div>
            <div className="Home-page">
                <div className="abt-me">

                    <h1> ABOUT ME </h1>

                </div>
            </div>
        </div>
    );
}
