import React from 'react'
import { useDispatch } from 'react-redux'
import { toogleMenu } from '../utils/appSlice';

const Header = () => {

  const dispatch=useDispatch();

  const toogle=()=>{
    dispatch(toogleMenu());
  }

  return (
    <div className='grid grid-flow-col p-4 m-2 shadow-lg'>
    <div className='flex col-span-1'>
      <img 
      className='h-8 mt-4 cursor-pointer'
      src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII=' alt="Hamburger" onClick={()=> toogle()} />

      <img 
      className="h-16 cursor-pointer"
      src='https://www.internetmatters.org/wp-content/uploads/2018/01/YouTube-logo-pc-2-600x314.png' alt='Youtube-img' />
    </div>

    <div className="col-span-10 mt-2 px-32">
      <input type="text"  placeholder='Search......' className='w-1/2 border-gray-500 border-2 rounded-l-full p-2'/>
      <button className='border-gray-500 border-2 rounded-r-full p-2 bg-gray-400'>🔍</button>
      </div>

    <div className="col-span-1">
      <img 
      className='h-8'
      src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' alt='User-icon'/>
    </div>
    </div>
  )
}

export default Header