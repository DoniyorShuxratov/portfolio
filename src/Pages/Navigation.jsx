import React, { useState, useEffect } from 'react';

export default function Navigation(){
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentTime(new Date());
        }, 1000);

        return () => {
        clearInterval(interval);
        };
    }, []);

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = daysOfWeek[currentTime.getDay()];

    const formattedTime = currentTime.toLocaleTimeString();

    return(
        <nav>
            <div className="container">
                <div className="header op-d">
                    <div className="header__greeting  op-d s-2">
                        <h1>Hello👋</h1>
                    </div>
                    <div className="header__link">
                        <div className="header__link--nav">
                            <div className="header__link--cl1 op-d s-2">
                                <a href="#">💻Web-site</a>
                                <a href="#">✏️Sketches</a>
                                <a href="#">🖱️UI/UX(Figma)</a>
                            </div>
                            <div className="header__link--cl2 op-d s-2">
                                <a href="#">🚩Posts</a>
                                <a href="#">⭐Logos</a>
                            </div>
                        </div>
                        <div className="header__link--media op-d s-3">
                            <a href="#">Instagram</a>
                            <a href="#">Telegram</a>
                            <a href="#">Github</a>
                        </div>
                    </div>
                    <div className="header__paragraph  op-d s-2">
                        <p>Hi my name is Doniyor, i’m UI/UX, graphic designer. Also working as a Frontend developer. This is the web site where im posting daily sketches </p>
                    </div>
                    
                    <div className="header__time  op-d s-3">
                        <div className="header__time--text">
                            <p>{day}.</p>
                            <pre>{formattedTime}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
    
};


