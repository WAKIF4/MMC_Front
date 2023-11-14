import React from 'react'

function Table({data}) {

    console.log(data)

  return (
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Adress
                </th>
                <th scope="col" class="px-6 py-3">
                    Tele
                </th>
                <th scope="col" class="px-6 py-3">
                    type Partenariat
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {data && 
            data.map(data =>(
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data.nomEntreprise}
                </th>
                <td class="px-6 py-4">
                    {data.adresse}
                </td>
                <td class="px-6 py-4">
                    {data.numTel}
                </td>
                <td class="px-6 py-4">
                    {data.typePartenariat}
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>))}
        </tbody>
    </table>
  )
}

export default Table