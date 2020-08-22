import React from 'react';

// Import CSS
import '../../App.css';
import './Home.css';

import school_icon from '../../Pictures/school-24px.svg';

export default About;

function About() {
    return (
        
        <div className="Home-page">
            <div className="abt-me-title">
                <h1> ABOUT ME </h1>
            </div>
            <div className="abt-me">
                <education>

                    <h2> Education </h2>
                    <edu>
                        <p>
                            <img width="20vw" alt="school"
                            src={school_icon} />&nbsp; 2020 - 2024
                            <h4> University of British Columbia </h4>
                            <i>(Bachelor of Science)</i>    
                        </p>
                        <p>
                            <img width="20vw" alt="school"
                            src={school_icon} />&nbsp; 2017 - 2020
                            <h4> Ho Chi Minh City High School for the Gifted - Vietnam National University </h4>
                            <i>(Informatics Major)</i>
                        </p>
                    </edu>
                    
                    
                </education>

                <space></space>

                <language>

                    <h2> Languages </h2>
                    <h3> Verbal languages </h3>
                    <lang>
                        <mainlang>
                            <h4> Main </h4>
                            <img width="20vw" alt="Vn"
                            src="https://cdn.jsdelivr.net/npm/flag-icons@2.0.0/flags/flags/flat/64/Vietnam.png" />
                            &nbsp;Vietnamese<br/>

                            <img width="20vw" alt="us"
                            src="https://cdn.jsdelivr.net/npm/flag-icons@2.0.0/flags/flags/flat/64/United-States.png" />
                            &nbsp;English
                        </mainlang>

                        <linebtw id='st'></linebtw>

                        <notmain>
                            <h4> Others </h4>
                            <img width="20vw" alt="chinese"
                            src="https://cdn.jsdelivr.net/npm/flag-icons@2.0.0/flags/flags/flat/64/China.png" />
                            &nbsp;Chinese<br/>

                            <img width="20vw" alt="french"
                            src="https://cdn.jsdelivr.net/npm/flag-icons@2.0.0/flags/flags/flat/64/France.png" />
                            &nbsp;French
                        </notmain>
                    </lang>

                    <hr/>

                    <h3> Programing languages </h3>
                    <lang>

                        <mainlang>
                            <p>

                                <h4> Most used </h4>
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

                        <linebtw id='nd'></linebtw>

                        <notmain>

                            <p>

                                <h4> Less used </h4>

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
    );
}
