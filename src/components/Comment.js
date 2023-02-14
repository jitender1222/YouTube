import React from 'react'

const Comment = ({data}) => {

    const {name,text,replies}=data;
    
  return (
    <div className='flex py-2  bg-gray-100 m-2 rounded-xl'>
    <img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
    className='w-12 p-2 h-12'
     alt='user-img'/>
     <div className='p-2'>
    <p className='font-bold'>{name}</p>
    <p>{text}</p>
    </div>
    </div>
  )
}

const CommentList=({comments})=>{
    return (
        comments.map((comment,index)=>(
            <div>
            <Comment key={index} data={comment}/>
            <div className='ml-8 border-l-2 border-l-black my-4'>
                <CommentList comments={comment.replies} />
            </div>
            </div>
        ))
    )
}


export default CommentList;