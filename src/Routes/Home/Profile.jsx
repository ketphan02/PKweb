import React from 'react';

// Import CSS
import '../../App.css';
import './Home.css';
import './Phone.css';

import img_src from '../../Pictures/profile.png';

import outlook from '../../Pictures/outlook.svg';
import github from '../../Pictures/github.svg';
import gmail from '../../Pictures/gmail.svg';
import linkedin from '../../Pictures/linkedin.svg';


export default Profile;

function Profile() {
    return (
        
        <div className="Home-page">
            <div className="content-container">

                <img className="propic" src={img_src} alt="Profile pic" />
                <h1 className="name-tit"> Phan Kiệt </h1>
                <h4> Student </h4>
                <h4> University of British Columbia</h4>

                <div className="contact">
                    <a href="https://github.com/ketphan02">
                        <img width="25" align="left"
                        alt="My GitHub profile"
                        src={github} />
                    </a>

                    <a href="https://www.linkedin.com/in/phan-kiet-72916b147/">
                        <img width="25" align="left"
                        alt="My LinkedIn profile"
                        src={linkedin} />
                    </a>

                    <a href="mailto:tuankiet.phannguyen@gmail.com">
                        <img width="25" align="left"
                        alt="My Gmail"
                        src={gmail} />
                    </a>

                    <a href="mailto:tuankietvn@outlook.com">
                        <img width="25" align="left"
                        alt="My Outlook"
                        src={outlook} />
                    </a>
                </div>
            </div>
            
        </div>
    );
}
