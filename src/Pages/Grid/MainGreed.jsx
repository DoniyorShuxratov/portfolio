import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Img } from 'react-image';
import { BiSolidLeftTopArrowCircle } from "react-icons/bi";
export default function EachWorkScreen(){
    const {state: frame} = useLocation(); 
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
        window.location.reload();
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
                    <Img src={frame.imgSrc} alt=""/>
                </div>
                <div className="eachframe__content--bottom"></div>
            </div>
            <div className="eachframe__footer">
                <div className="eachframe__footer--left">
                    <Img src={frame.imgSrc1} alt="" srcset="" />
                    <Img src={frame.imgSrc3} alt="" srcset="" />
                    <Img src={frame.imgSrc5} alt="" srcset="" />
                    <Img src={frame.imgSrc7} alt="" srcset="" />
                </div>
                <div className="eachframe__footer--right">
                    <Img src={frame.imgSrc2} alt="" srcset="" />
                    <Img src={frame.imgSrc4} alt="" srcset="" />
                    <Img src={frame.imgSrc6} alt="" srcset="" />
                    <Img src={frame.imgSrc8} alt="" srcset="" />
                </div>
            </div>
        </section>
    )
}