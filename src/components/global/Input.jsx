import React from 'react'

function Input({
    label,
    type,
    name,
    placeholder,
    value,
    onChange,
}) {
  return (
    <div>
        <label className='text-gray-700 font-bold'>
            {label}
        </label>
        <input 
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
        />
    </div>
  )
}

export default Input