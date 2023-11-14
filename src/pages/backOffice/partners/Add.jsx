

import React, { useState } from 'react'
import Input from '../../../components/global/Input'
import BackButton from '../../../components/global/BackButton'
import Header from '../../../components/global/Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Add() {
    const [sponsorship, setSponsorship] = useState({
        nomEntreprise: '',
        adresse: '',
        numTel: '',
        TypePartenariat: '',
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setSponsorship({
            ...sponsorship,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = () => {

        axios.post(`${import.meta.env.VITE_API_URL}speakers`, sponsorship)
        .then(res => {
           navigate(-1)
        })
        .catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })
    }

  return (
    <>
    <Header text={"Add Partner"} />
    <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-2'>
        <BackButton />
        <Input label='Name' type='text' name='nomEntreprise' placeholder='Name' value={sponsorship.nomEntreprise} onChange={handleChange} />
        <Input label='Address' type='text' name='adresse' placeholder='Address' value={sponsorship.adresse} onChange={handleChange} />
        <Input label='Phone' type='text' name='tel' placeholder='Phone' value={sponsorship.tel} onChange={handleChange} />
        <div>
            <label htmlFor="">
                Type de partenariat
            </label>
            <select value={sponsorship.TypePartenariat} onChange={handleChange} name='TypePartenariat' id="" className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'>
                <option value="STRATEGIQUE">STRATEGIQUE</option>
                <option value="COMMERCIAL">COMMERCIAL</option>
                <option value="TECHNOLOGIQUE">TECHNOLOGIQUE</option>
                <option value="FINANCIER">FINANCIER</option>
            </select>
        </div>
        <div className='col-span-2'>
            <button className='w-full p-2 bg-blue-500 rounded-lg text-white'
                onClick={handleSubmit}
            >Add</button>
        </div>
    </div>
    </>
  )
}

export default Add