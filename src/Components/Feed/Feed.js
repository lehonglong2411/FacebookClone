import React from 'react'
import Story from './Story/Story'
import MessageSend from './MessageSend/MessageSend'

const Feed = () => {
    return (
        <div className = 'feed'>
            <Story />
            <MessageSend />

            {/* {
                postsData.map(entry => (
                    <Post 
                        profilePic = {entry.avatar}
                        message = {entry.text}
                        timestamp = {entry.timestamp}
                        imgName = {entry.imgName}
                        username = {entry.user}
                    />
                ))
            } */}

        </div>
    )
}

export default Feed
