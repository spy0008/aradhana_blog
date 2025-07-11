import React from 'react'
import Images from './Images'

const SingleComment = () => {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
        <div className='flex items-center gap-4'>
            <Images src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40" />
            <span className='font-medium'>John Doe</span>
            <span className='text-sm text-gray-500'>2 days ago</span>
        </div>

        <div className='mt-4'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, ab. Nemo reiciendis consectetur voluptas quia laboriosam, minima nesciunt. Nobis totam modi quibusdam id illum eaque, laboriosam nam eligendi aliquid labore.
            </p>
        </div>
    </div>
  )
}

export default SingleComment