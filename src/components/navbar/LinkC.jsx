import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function LinkC({
    url,
    text,
    Icon
}) {

    const route =  useLocation().pathname
  return (
    <li>
        <Link to={url} className={"flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" + (route === url ? ' border-blue-500 bg-blue-100' : ' border-transparent hover:bg-blue-100 hover:border-blue-500')}>
            {Icon}
            <span class="ms-3 font-bold">{text}</span>
        </Link>
    </li>
  )
}

export default LinkC