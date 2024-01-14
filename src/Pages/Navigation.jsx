import React, { useState, useEffect } from 'react';
import { useInView, motion as m, useAnimation } from "framer-motion";

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
                <m.div 
                    variants={{
                        hidden: {opacity: 0, y:75},
                        visible: {opacity: 1, y: 0},
                    }}
                    initial='hidden'
                    animate='visible'
                    transition={{duration: .75, delay: .5, ease: 'easeOut'}}   
                    className="header"
                >
                    <m.div
                        variants={{
                            hidden: {opacity: 0, y:30},
                            visible: {opacity: 1, y: 0},
                        }}
                        initial='hidden'
                        animate='visible'
                        transition={{duration: 1, delay: .5, ease: 'easeOut'}} 
                        className="header__greeting  op-d s-2"
                    >
                        <a href="/"><h1>{defaultTitle.title}</h1></a>
                    </m.div>
                    <div className="header__link">
                        <div className="header__link--nav">
                            <m.div 
                                variants={{
                                    hidden: {opacity: 0, y:30},
                                    visible: {opacity: 1, y: 0},
                                }}
                                initial='hidden'
                                animate='visible'
                                transition={{duration: 1.2, delay: .5, ease: 'easeOut'}} 
                                className="header__link--cl1 op-d s-2"
                            >
                                <a href="/web-site">💻Web-site</a>
                                <a href="/sketches">✏️Sketches</a>
                            </m.div>
                            <m.div
                                variants={{
                                    hidden: {opacity: 0, y:40},
                                    visible: {opacity: 1, y: 0},
                                }}
                                initial='hidden'
                                animate='visible'
                                transition={{duration: 1.3, delay: .5, ease: 'easeOut'}} 
                                className="header__link--cl2 op-d s-2"
                            >
                                <a href="/posts">🚩Posts</a>
                                <a href="/logos">⭐Logos</a>
                            </m.div>
                        </div>
                        <m.div
                            variants={{
                                hidden: {opacity: 0, y:50},
                                visible: {opacity: 1, y: 0},
                            }}
                            initial='hidden'
                            animate='visible'
                            transition={{duration: 1.4, delay: .5, ease: 'easeOut'}}
                            className="header__link--media op-d s-3"
                        >
                            <a href="https://www.instagram.com/davidch_dm">Instagram</a>
                            <a href="https://t.me/paint_110">Telegram</a>
                            <a href="https://github.com/DoniyorShuxratov">Github</a>
                        </m.div>
                    </div>   
                    <m.div 
                        variants={{
                            hidden: {opacity: 0, y:30},
                            visible: {opacity: 1, y: 0},
                        }}
                        initial='hidden'
                        animate='visible'
                        transition={{duration: 1, delay: .5, ease: 'easeOut'}} 
                        className="header__paragraph  op-d s-2"
                    >
                        <p>{defaultTitle.paragraph}</p>
                    </m.div>
                    
                    <div className="header__time  op-d s-3">
                        <div className="header__time--text">
                            <p>{day}.</p>
                            <pre>{formattedTime}</pre>
                        </div>
                    </div>
                </m.div>
            </div>
            
        </nav>
        
        
    )
    
};


