import React from 'react'
import { useLocation } from 'react-router-dom'

function Header({text}) {
  return (
    <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {
                text
            }
        </h1>
    </div>
  )
}

export default Header