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

    const defaultTitle = {
        "title": "Hello👋",
        "paragraph": "Hi my name is Doniyor, i’m UI/UX, graphic designer. Also working as a Frontend developer. This is the web site where im posting daily sketches"
    };


    return(
        <nav>
            <div className="container">
                <div className="header">
                    <div className="header__greeting  op-d s-2">
                        <a href="/"><h1>{defaultTitle.title}</h1></a>
                    </div>
                    <div className="header__link">
                        <div className="header__link--nav">
                            <div className="header__link--cl1 op-d s-2">
                                <a href="/web-site">💻Web-site</a>
                                <a href="/sketches">✏️Sketches</a>
                            </div>
                            <div className="header__link--cl2 op-d s-2">
                                <a href="/posts">🚩Posts</a>
                                <a href="/logos">⭐Logos</a>
                            </div>
                        </div>
                        <div className="header__link--media op-d s-3">
                            <a href="#">Instagram</a>
                            <a href="#">Telegram</a>
                            <a href="#">Github</a>
                        </div>
                    </div>   
                    <div className="header__paragraph  op-d s-2">
                        <p>{defaultTitle.paragraph}</p>
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


