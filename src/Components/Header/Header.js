import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';

import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import './Header.css';

const Header = () => {
    return (
        <div className = 'header'>
            <div className = 'header__left'>
                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt = "Facebook Logo"/>
            </div>
            
            <div className = 'header__input'>
                <SearchIcon />
                <input placeholder = 'Search Facebook' type="text" />
            </div> 

            <div className = 'header__center'>
                <div className ="header__option header__option--active">
                    <HomeIcon fontsize = 'large' />
                </div>

                <div className = 'header__option'>
                    <FlagIcon fontsize = 'large' />
                </div>

                <div className = 'header__option'>
                    <SubscriptionsOutlinedIcon fontsize = 'large'/>
                </div>

                

                <div className = 'header__option'>
                    <StorefrontOutlinedIcon fontsize = 'large' />
                </div>              

                <div className = 'header__option'>
                    <SupervisorAccountIcon fontsize = 'large' />                    
                </div>         
                            
            </div> 
                <div className = 'header__right'>
                    <Avatar />
                    <h4>Hong Long</h4>
                    <IconButton>
                        <AddIcon/>
                    </IconButton>

                    <IconButton>
                        <ForumIcon/>
                    </IconButton>

                    <IconButton>
                        <NotificationsActiveIcon/>
                    </IconButton>
                    
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>      
                </div>                  
        </div>
    )
}

export default Header
