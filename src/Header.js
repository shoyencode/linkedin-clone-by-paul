import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

import LinkedInLogo from './resources/linkedin.png'

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <img
                    src={LinkedInLogo}
                    alt='LinkedIn Logo'
                />
                
                <div className='header__search'>
                    <SearchIcon/>
                    <input type='text'/>
                </div>
            </div>

            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title={'Home'} />
                <HeaderOption Icon={SupervisorAccountIcon} title={'My Network'} />
                <HeaderOption Icon={BusinessCenterIcon} title={'Jobs'} />
                <HeaderOption Icon={ChatIcon} title={'Messaging'} />
                <HeaderOption Icon={NotificationsIcon} title={'Notifications'} />
                <HeaderOption avatar={'https://lh3.googleusercontent.com/a-/AOh14GjQ4lwO0ctcvghDwPB97il158bme1e9DbIZD9TncQ=s288-p-rw-no'} title={'Me'} />
            </div>
        </div>
    );
}

export default Header;