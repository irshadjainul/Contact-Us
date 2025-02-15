import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-black text-white flex items-center rounded py-3 px-3 justify-center gap-2 w-80'>
        {props.icon}{props.text}
    </button>
  )
}

export default Button
