import './topbar.css'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom'

function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">
                    <Link to='/' className="logo">
                    SocialApp
                    </Link>
                </span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <SearchIcon className="searchIcon"/>
                    <input type="text" 
                    className="searchInput" 
                    placeholder="Search ..."
                    />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    
                        <span className="topbarLink">
                        <Link to="/Home" className="topbarLink">
                            Home
                        </Link>    
                        </span>
                    
                        <span className="topbarLink">
                        <Link to="/Profile" className="topbarLink">
                            Profile
                        </Link>    
                        </span>

                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonIcon/>
                        <span className="topbarIconBadge">3</span>
                    </div>
                    <div className="topbarIconItem">
                        <ChatIcon/>
                        <span className="topbarIconBadge">7</span>
                    </div>
                    <div className="topbarIconItem">
                        <NotificationsIcon/>
                        <span className="topbarIconBadge">11</span>
                    </div>
                </div>
                <img className='topbarImg' src="/assets/person/1.jpeg" alt="topbarImg"/>
            </div>
            
        </div>
    )
}

export default Topbar

