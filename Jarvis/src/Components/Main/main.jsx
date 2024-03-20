/* eslint-disable react/no-unescaped-entities */
import './main.css';
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { Context } from '../../Context/Context';

const Main = () => {




    const { onSent, recentPrompt, showResult, resultData, loading, setInput, input } = useContext(Context)

    return (
        <div className='main'>
            <div className="nav">
                <p>JARVIS BY ASHIF</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResult ? <>
                    <div className="greet">
                        <p><span>HELLO, ASHIF</span></p>
                        <p>How Can I assist You Today .?</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Tell Me About The Global Warming</p>
                            <img src={assets.compass_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Explain Me about React JS</p>
                            <img src={assets.bulb_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Which Team has Lifted More trophies In IPL</p>
                            <img src={assets.message_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Which Team has Never won a IPL Title</p>
                            <img src={assets.code_icon} alt="" />
                        </div>
                    </div>
                </> :
                    <div className='result'>
                        <div className='result-title'>
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ? <div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div> : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}
                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder="Search JARVIS"
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    onSent();
                                }
                            }}
                        />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
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
