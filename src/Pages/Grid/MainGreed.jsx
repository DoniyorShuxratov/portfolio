import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { BiSolidLeftTopArrowCircle } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {motion as m, } from "framer-motion";
import { CgArrowTopRight } from "react-icons/cg";

export default function EachWorkScreen(){
    const {state: frame} = useLocation(); 
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
    };
    function handleClick() {
        window.location.href = frame.link;
    }
    
    
    return(
        <section className="eachframe--section">
            <m.button  
            variants={{
                hidden: {opacity: 0, y:75},
                visible: {opacity: 1, y: 0},
            }}
            initial='hidden'
            animate='visible'
            transition={{duration: .5, delay: .5, ease: 'easeOut'}} 
            className="link--btn" onClick={handleClick}>
                <p>Visit</p> <CgArrowTopRight size={25}/>
            </m.button>
            <m.div 
                variants={{
                    hidden: {opacity: 0, y:75},
                    visible: {opacity: 1, y: 0},
                }}
                initial='hidden'
                animate='visible'
                transition={{duration: .75, delay: .5, ease: 'easeOut'}}  
                className="eachframe__head op-d"
            >
                <button className="op-d" onClick={handleBack}><BiSolidLeftTopArrowCircle size={45}/></button>
                <m.h1
                    variants={{
                        hidden: {opacity: 0, x:75},
                        visible: {opacity: 1, x: 0},
                    }}
                    initial='hidden'
                    animate='visible'
                    transition={{duration: 1, delay: 1, ease: 'easeOut'}}  
                    >{frame.product}</m.h1>
                <div className="product__info">
                    <div className="product__info--name">
                        <p>Data</p>
                        <p>Category</p>
                        <p>Tools</p>
                    </div>
                    <div className="product__info--data">
                        <p>{frame.data}</p>
                        <p>{frame.type}</p>
                        <p>{frame.product}</p>
                    </div>
                </div>
            </m.div>
            <m.div 
                variants={{
                    hidden: {opacity: 0, x:-75},
                    visible: {opacity: 1, x: 0},
                }}
                initial='hidden'
                animate='visible'
                transition={{duration: 1.2, delay: 1.5, ease: 'easeOut'}}  
                className="eachframe__content">
                <div className="eachframe__content--top">
                    <img style={{backgroundColor: `${frame.onhover}`}} loading="lazy" src={frame.imgSrc} alt=""/>
                </div>
                <div className="eachframe__content--bottom"></div>
            </m.div>
            <div className="eachframe__footer">
                <div className="eachframe__footer--left">
                    <m.div className="product--img" initial="hidden" animate="visible" variants={imageVariants}>
                        <LazyLoadImage loading="lazy" src={frame.imgSrc2} />
                    </m.div>
                    <m.div className="product--img" initial="hidden" animate="visible" variants={imageVariants}>
                        <LazyLoadImage loading="lazy" src={frame.imgSrc4} />
                    </m.div>
                    <m.div className="product--img" initial="hidden" animate="visible" variants={imageVariants}>
                        <LazyLoadImage loading="lazy" src={frame.imgSrc6} />
                    </m.div>
                    <m.div className="product--img" initial="hidden" animate="visible" variants={imageVariants}>
                        <LazyLoadImage loading="lazy" src={frame.imgSrc8} />
                    </m.div>
                </div>
                <div className="eachframe__footer--right">
                    <m.div className="product--img" initial="hidden" animate="visible" variants={imageVariants}>
                        <LazyLoadImage loading="lazy" src={frame.imgSrc3} />
                    </m.div>
                    <m.div className="product--img" initial="hidden" animate="visible" variants={imageVariants}>
                        <LazyLoadImage loading="lazy" src={frame.imgSrc5} />
                    </m.div>
                    <m.div className="product--img" initial="hidden" animate="visible" variants={imageVariants}>
                        <LazyLoadImage loading="lazy" src={frame.imgSrc7} />
                    </m.div>
                </div>
            </div>
        </section>
    )
}