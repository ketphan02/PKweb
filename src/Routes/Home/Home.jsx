import React from 'react';

// Import HTML
import Header from '../Header/Header';
import Profile from './Profile';
import About from './About';

// Import CSS
import '../../App.css';

export default Home;

function Home() {
    return (
        <div className="App">
            <Header />
            <Profile />
            <About />
        </div>
    );
}
