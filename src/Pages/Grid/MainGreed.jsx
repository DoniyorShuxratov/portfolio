import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Img } from 'react-image';
import { BiSolidLeftTopArrowCircle } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {motion as m, } from "framer-motion";


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
    
    return(
        <section className="eachframe--section">
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
                    className="op"
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
            <div className="eachframe__content">
                <div className="eachframe__content--top op-d">
                    <Img loading="lazy" src={frame.imgSrc} alt=""/>
                </div>
                <div className="eachframe__content--bottom"></div>
            </div>
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