import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Img } from 'react-image';
import { BiSolidLeftTopArrowCircle } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function EachWorkScreen(){
    const {state: frame} = useLocation(); 
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
    };
    
    return(
        <section className="eachframe--section">
            <div className="eachframe__head op-d">
                <button className="op-d" onClick={handleBack}><BiSolidLeftTopArrowCircle size={45}/></button>
                <h1 className="op">{frame.product}</h1>
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
            </div>
            <div className="eachframe__content">
                <div className="eachframe__content--top op-d">
                    <Img loading="lazy" src={frame.imgSrc} alt=""/>
                </div>
                <div className="eachframe__content--bottom"></div>
            </div>
            <div className="eachframe__footer">
                <div className="eachframe__footer--left">
                    <div className="product--img">
                        <LazyLoadImage loading="lazy" src={frame.imgSrc2} />
                    </div>
                    <div className="product--img">
                        <LazyLoadImage loading="lazy" src={frame.imgSrc4} />
                    </div>
                    <div className="product--img">
                        <LazyLoadImage loading="lazy" src={frame.imgSrc6} />
                    </div>
                    <div className="product--img">
                        <LazyLoadImage loading="lazy" src={frame.imgSrc8} />
                    </div>
                    
         
                </div>
                <div className="eachframe__footer--right">
                    <div className="product--img">
                        <LazyLoadImage loading="lazy" src={frame.imgSrc3} />
                    </div>
                    <div className="product--img">
                        <LazyLoadImage loading="lazy" src={frame.imgSrc5} />
                    </div>
                    <div className="product--img">
                        <LazyLoadImage loading="lazy" src={frame.imgSrc7} />
                    </div>
    
                </div>
            </div>
        </section>
    )
}