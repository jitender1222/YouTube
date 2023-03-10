import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {

  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  else{
  return (
    <div className='shadow-xl w-40 p-5'>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li>Shorts</li>
      <li>Videos</li>
      <li>Live</li>
    </ul>
      <h1 className='font-bold pt-10'>Subscription</h1>
    <ul>
      <li>Music</li>
      <li>Gaming</li>
      <li>Sports</li>
      <li>Movies</li>
    </ul>
    <h1 className='font-bold pt-10'>Watch Later</h1>
    <ul>
      <li>Music</li>
      <li>Gaming</li>
      <li>Sports</li>
      <li>Movies</li>
    </ul>
    </div>
  )
  }
}

export default SideBar