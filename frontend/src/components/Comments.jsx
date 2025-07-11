import React from 'react'
import SingleComment from './SingleComment'

const Comments = () => {
  return (
    <div className='flex flex-col gap-6 lg:w-3/5'>
        <h6 className='text-xl text-gray-500 underline'>
            Comments
        </h6>
        <div className='flex items-center justify-between gap-8 w-full'>
            <textarea placeholder='Write a comment...' className='w-full lg:h-20 p-4 bg-slate-50 rounded-xl' />
            <button className='bg-orange-500 px-4 py-3 text-white font-medium cursor-pointer rounded-xl'>Send</button>
        </div>

        <SingleComment/>
        <SingleComment/>
        <SingleComment/>
        <SingleComment/>
    </div>
  )
}

export default Comments