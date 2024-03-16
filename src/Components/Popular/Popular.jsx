import React ,{useRef} from 'react'
import './Popular.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
 import user_1 from '../../assets/u1.png'
 import user_2 from '../../assets/u2.png'
 import user_3 from '../../assets/u3.jpeg'
 import user_4 from '../../assets/u3.png'

const Popular = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () =>{
       if(tx >-50)
       {
        tx -= 25;
       }
       slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward =() =>{
        if(tx <0)
       {
        tx += 25;
       }
       slider.current.style.transform = `translateX(${tx}%)`;
    }
  return (
    <div className='popular'>
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt='' className='back-btn'  onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt=''/>
                            <div>
                                <h3>ujwala</h3>
                                <span>ujjw,eusa</span>
                            </div>
                        </div>
                        <p>Whether you dream of a whimsical fairy-tale wedding or a vibrant Bollywood-inspired haldi ceremony,
                             we'll work closely with you to develop a unique theme that reflects your personality and style.
                             Our expert decorators will bring your vision to life with stunning decor and ambiance.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt=''/>
                            <div>
                                <h3>ujwala</h3>
                                <span>ujjw,eusa</span>
                            </div>
                        </div>
                        <p>Whether you dream of a whimsical fairy-tale wedding or a vibrant Bollywood-inspired haldi ceremony,
                             we'll work closely with you to develop a unique theme that reflects your personality and style.
                             Our expert decorators will bring your vision to life with stunning decor and ambiance.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt=''/>
                            <div>
                                <h3>ujwala</h3>
                                <span>ujjw,eusa</span>
                            </div>
                        </div>
                        <p>Whether you dream of a whimsical fairy-tale wedding or a vibrant Bollywood-inspired haldi ceremony,
                             we'll work closely with you to develop a unique theme that reflects your personality and style.
                             Our expert decorators will bring your vision to life with stunning decor and ambiance.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt=''/>
                            <div>
                                <h3>ujwala</h3>
                                <span>ujjw,eusa</span>
                            </div>
                        </div>
                        <p>Whether you dream of a whimsical fairy-tale wedding or a vibrant Bollywood-inspired haldi ceremony,
                             we'll work closely with you to develop a unique theme that reflects your personality and style.
                             Our expert decorators will bring your vision to life with stunning decor and ambiance.</p>
                    </div>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Popular