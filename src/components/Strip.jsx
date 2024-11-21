import React from 'react'

const Strip = ({url, num}) => {
  return (
    <div className='w-[16.66%] py-5 px-4 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex justify-between items-center'>
        <img src={url} alt="" />
        <span className='font-semibold'>{num}</span>
    </div>
  )
}

export default Strip