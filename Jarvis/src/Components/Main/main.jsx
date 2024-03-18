/* eslint-disable react/no-unescaped-entities */
import './main.css';
import { assets } from '../../assets/assets';

const Main = () => {
    return (
        <div className='main'>
            <div className="nav">
                <p>JARVIS BY ASHIF</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>HELLO, ASHIF</span></p>
                    <p>How Can I assist You Today .?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, labore.</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, labore.</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, labore.</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, labore.</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder="Search JARVIS" />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>

                    </div>
                    <p className="bottom-info">
                        Jarvis is a clone of Google's Gemini AI. It is a simple AI that can assist you in various tasks.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Main
