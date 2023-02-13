import React, { useEffect } from 'react'
import { YOU_VIDEO_API } from '../utils/constant';

const VideoConatiner = () => {

  useEffect(()=>{
    getVideos();
  },[])

  const getVideos=async()=>{
    const data=await fetch(YOU_VIDEO_API);
    const json=await data.json();
    console.log(json);
  }
  return (
    <>
    <div>
      helo world
    </div>
    </>
  )
}

export default VideoConatiner