import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';

import BackgroundSpace from './resources/background_space.jpg';

function Sidebar() {
    
    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src={BackgroundSpace} alt='' />
                <Avatar className='sidebar__avatar'/>
                <h2>Paul Code</h2>
                <h4>paul.code@gmail.com</h4>
            </div>
            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>2,543</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>2,459</p>
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developper')}
            </div>
        </div>
    );
}

export default Sidebar;

