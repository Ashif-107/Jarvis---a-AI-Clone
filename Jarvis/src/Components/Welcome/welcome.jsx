import { assets } from '../../assets/assets'
import './welcome.css'
import { Link } from 'react-router-dom'


const welcome = () => {
    return (
        <div className='welcome'>
            <div className="nav">
                <h1>Jarvis by Ashif</h1>
                <img src={assets.gemini_icon} alt="" />
                <div className="nav-socials">
                    <a href="">Instagram</a>
                    <a href="">Discord</a>
                    <a href="">Linkedin</a>

                </div>
            </div>
            <div className="welcome-msg">
                <div className="msg-text">
                    <h1>Welcome to <br />
                        <span>Jarvis</span><br />
                    </h1>
                    <h3> A Smarter AI for Smart World.</h3>
                    <div className="msg-but">
                        <Link to='/login' className='button'>Get Started</Link>
                        <Link to='/signup' className='button'>New To Jarvis</Link>
                    </div>
                </div>
                <div className="msg-img">
                    <img src={assets.Gemini1} alt="" />
                    <img src={assets.Gemini3} alt="" />
                </div>



            </div>
            <div className="foot">
                <p>Jarvis is a AI chat box made with Google&apos;s Gemini API. Moreover it is a clone of Gemini</p>
                <p><b>Jarvis</b> &copy; Ashif 2024</p>
            </div>
        </div>
    )
}

export default welcome
