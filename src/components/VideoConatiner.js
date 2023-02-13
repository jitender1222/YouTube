import React, { useEffect, useState } from 'react'
import { YOU_VIDEO_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoConatiner = () => {

  const [videos,setVideos]=useState([]);

  useEffect(()=>{
    getVideos();
  },[])

  const getVideos=async()=>{
    const data=await fetch(YOU_VIDEO_API);
    const json=await data.json();
    setVideos(json.items);
  }
  return (
    <>
    <div className='flex flex-wrap justify-center'>
      {videos.map(video=> <Link to={"/watch?v="+video.id}><VideoCard key={video.id} info={video}/> </Link>) }
    </div>
    </>
  )
}

export default VideoConatiner