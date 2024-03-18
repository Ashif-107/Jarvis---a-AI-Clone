import './Sidebar.css'
import { assets } from '../../assets/assets.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const [expand, setExpand] = useState(true)


    return (
        <div className='sidebar'>
            <div className="top">
                <img src={assets.menu_icon} alt="" className='menu'
                    onClick={() => setExpand(!expand)}
                />
                <div className="newchat">
                    <img src={assets.plus_icon} alt="" />
                    {expand ? <p>New Chat</p> : null}
                </div>
                {expand ?
                    <div className="recent">
                        <p className='recent-title'>Recents</p>
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt="" />
                            <p>Who is Ashif....</p>
                        </div>
                    </div>

                    : null}

            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    <Link to="/about" className="linkStyle">{expand ? <p>About</p> : null}</Link>
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {expand ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {expand ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
