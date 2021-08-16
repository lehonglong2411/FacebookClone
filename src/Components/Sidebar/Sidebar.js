import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow/SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


const Sidebar = () => {
    return (
        <div className = 'sidebar'>
            <SidebarRow src ='https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-1/c0.161.480.480a/p480x480/224055963_994745191068119_1706540451267596705_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=wxzpxEMDGbsAX-LOG_b&_nc_ht=scontent.fhan2-4.fna&oh=dfa59404badbcec581a59ac931b5d6cd&oe=613F6A9C' title = 'Hong Long' />
            <SidebarRow Icon = {LocalHospitalIcon} title = 'COVID-19 Information Center' />

            <SidebarRow Icon ={EmojiFlagsIcon} title = 'Pages'/>
            <SidebarRow Icon ={PeopleIcon} title = 'Friends'/>
            <SidebarRow Icon ={ChatIcon} title = 'Messenger'/>
            <SidebarRow Icon ={StorefrontIcon} title = 'Marketplace'/>
            <SidebarRow Icon ={VideoLibraryIcon} title = 'Videos'/>
            <SidebarRow Icon ={ExpandMoreOutlinedIcon} title = 'More'/>
        </div>
    )
}

export default Sidebar
