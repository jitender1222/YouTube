import React from 'react'

const VideoCard = ({info}) => {
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
  return (
    <div className='p-2 rounded-lg mt-2 ml-2 shadow-lg'>
        <img  className='rounded-lg' src={thumbnails?.medium?.url} alt="Thumbnails"/>
        <ul>
            <li className="w-80 font-serif font-bold">{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics?.viewCount}views</li>
        </ul>
    </div>
  )
}

export default VideoCard