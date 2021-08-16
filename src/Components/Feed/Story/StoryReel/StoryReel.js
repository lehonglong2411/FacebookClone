import React from 'react'
import {Avatar} from '@material-ui/core'
import './StoryReel.css'

const StoryReel = (image, profileSrc, title) => {
    return (
        <div style = { {backgroundImage: `url(${image})`}} className = 'story'>
            <Avatar src={profileSrc} className = 'story_avatar' />
           <h4>{title}</h4>         
        </div>
    )
}

export default StoryReel
