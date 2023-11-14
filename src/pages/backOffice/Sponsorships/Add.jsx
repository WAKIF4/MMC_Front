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
        tel: '',
        montantSoutien: 0,
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setSponsorship({
            ...sponsorship,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = () => {

        axios.post(`${import.meta.env.VITE_API_URL}sponsor/save`, sponsorship)
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
    <Header text={"Add sponsorship"} />
    <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-2'>
        <BackButton />
        <Input label='Name' type='text' name='nomEntreprise' placeholder='Name' value={sponsorship.nomEntreprise} onChange={handleChange} />
        <Input label='Address' type='text' name='adresse' placeholder='Address' value={sponsorship.adresse} onChange={handleChange} />
        <Input label='Phone' type='text' name='tel' placeholder='Phone' value={sponsorship.tel} onChange={handleChange} />
        <Input label='Amount' type='number' name='montantSoutien' placeholder='Amount' value={sponsorship.montantSoutien} onChange={handleChange} />
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

