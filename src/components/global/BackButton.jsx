import React from 'react'
import { useNavigate } from 'react-router-dom'

function BackButton() {
    const navigate = useNavigate()
    
    const click = () => {
        navigate(-1)
    }
  return (
    <button className='fixed bottom-10 right-10 text-blue-500 hover:text-white bg-white shadow-xl duration-300 rounded-full p-2 flex justify-center content-center space-x-2 cursor-pointer hover:bg-blue-500 ' onClick={click}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-4xl" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round"  strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
    </button>
  )
}

export default BackButton