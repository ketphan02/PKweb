import React from 'react';

// Import HTML
import Header from '../Header/Header';

// Import CSS
import '../../App.css';
import './Home.css';

import img_src from '../../Pictures/profile.png';

export default Profile;

function Profile() {
    return (
        <div className="content-container">

            <img className="propic" src={img_src} alt="Profile pic" />
            <h1> Phan Kiệt </h1>
            <h4> BSc. Student </h4>
            <h4> University of British Columbia</h4>

        </div>
    );
}
