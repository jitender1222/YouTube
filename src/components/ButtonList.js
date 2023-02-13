import React from 'react'
import Button from './Button';

const list=["All","Live","Soccer","Cricket","Football","Tennis","Gaming","Gifts","Cooking","News"];

export const ButtonList = () => {
  return (
    <div className='flex'>
      {
        list.map(items=>{
          return (
            <Button name={items}/>
          )
        })
      }
    </div>
  )
}
export default ButtonList;