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
                <div className="abt-me-title">
                    <h1> ABOUT ME </h1>
                </div>
                <div className="abt-me">
                    <education>

                        <h2> Education </h2>
                        <edu>
                            <p>
                                2020 - 2024
                                <h4> University of British Columbia </h4>
                            </p>
                            <p>
                                2017 - 2020
                                <h4> Ho Chi Minh City High School for the Gifted - Vietnam National University </h4>
                            </p>
                            <p>
                                2019
                                <h4> PiMA - Project in Mathematics and Applications </h4>
                            </p>
                        </edu>
                        
                    
                    </education>

                    <space></space>

                    <language>

                        <h2> Languages </h2>
                        <h3> Verbal languages </h3>
                        <lang>
                            <mainlang>
                                <img width="20vw" alt="Vn"
                                src="https://cdn.jsdelivr.net/npm/flag-icons@2.0.0/flags/flags/flat/64/Vietnam.png" />
                                &nbsp;Vietnamese<br/>

                                <img width="20vw" alt="us"
                                src="https://cdn.jsdelivr.net/npm/flag-icons@2.0.0/flags/flags/flat/64/United-States.png" />
                                &nbsp;English
                            </mainlang>

                            <linebtw></linebtw>

                            <notmain>
                            <img width="20vw" alt="chinese"
                                src="https://cdn.jsdelivr.net/npm/flag-icons@2.0.0/flags/flags/flat/64/China.png" />
                                &nbsp;Chinese<br/>

                                <img width="20vw" alt="french"
                                src="https://cdn.jsdelivr.net/npm/flag-icons@2.0.0/flags/flags/flat/64/France.png" />
                                &nbsp;French
                            </notmain>
                        </lang>

                        <br/>

                        <h3> Programing languages </h3>
                        <lang>

                            <mainlang>
                                <p>

                                    <h4> Main languages</h4>
                                    <img width="20vw" alt="python"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/python.svg" />
                                    &nbsp;
                                    
                                    <img width="20vw" alt="ts"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/javascript.svg" />
                                    &nbsp;
                                    
                                    <img width="20vw" alt="ts"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/cplusplus.svg" />

                                </p>
                            </mainlang>

                            <linebtw></linebtw>

                            <notmain>

                                <p>

                                    <h4> Others </h4>

                                    <img width="20vw" alt="ts"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/typescript.svg" />
                                    &nbsp;

                                    <img width="20vw" alt="react"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/react.svg" />
                                    &nbsp;
                                    
                                    <img width="20vw" alt="html"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/html5.svg" />
                                    &nbsp;

                                    <img width="20vw" alt="css"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/css3.svg" />
                                    &nbsp;

                                    <img width="20vw" alt="java"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/java.svg" />
                                    &nbsp;
                                    
                                    <img width="20vw" alt="go"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/go.svg" />
                                    

                                </p>

                            </notmain>

                        </lang>

                    </language>

                </div>
            </div>
        </div>
    );
}
