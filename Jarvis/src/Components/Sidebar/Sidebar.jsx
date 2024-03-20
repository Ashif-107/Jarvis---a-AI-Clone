import './Sidebar.css'
import { assets } from '../../assets/assets.js'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context.jsx'


const Sidebar = () => {

    const [expand, setExpand] = useState(true)
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context)

    const loadPrompt = async (prompt) => {
        onSent(prompt)
        setRecentPrompt(prompt)
    }


    return (
        <div className='sidebar'>
            <div className="top">
                <img src={assets.menu_icon} alt="" className='menu'
                    onClick={() => setExpand(!expand)}
                />
                <div onClick={() => newChat()} className="newchat">
                    <img src={assets.plus_icon} alt="" />
                    {expand ? <p>New Chat</p> : null}
                </div>
                {expand ?
                    <div className="recent">
                        <p className='recent-title'>Recents</p>
                        {prevPrompts.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} className="recent-entry" key={index}>
                                    <img src={assets.message_icon} alt="" />
                                    <p>{item.slice(0, 18)}....</p>
                                </div>
                            )
                        })}
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
