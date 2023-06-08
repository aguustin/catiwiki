import './utils.css';
import circle from '../../img/circle.png';
import grayCircle from '../../img/grayCircle.png';

export const FillCircle = () => {
    return(
        <div className=''>
            <div className="puntuation mx-1">
                <img src={circle} alt=""></img>            
            </div>
        </div>
    )
}

export const GrayCircle = () => {
    return(
        <div className="puntuation">
            <img src={grayCircle} alt=""></img>
        </div>
    )
}