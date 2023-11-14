import React from 'react'
import { IoAdd } from "react-icons/io5";
import { Link } from 'react-router-dom';


function AddButton(
  {url}
) {
  return (
    <Link
    to={url}
    className='fixed bottom-10 right-10 text-blue-500 hover:text-white bg-white shadow-xl duration-300 rounded-full p-2 flex justify-center content-center space-x-2 cursor-pointer hover:bg-blue-500 '>
      <IoAdd  className="text-4xl h-6 w-6" />
    </Link>
  )
}

export default AddButton