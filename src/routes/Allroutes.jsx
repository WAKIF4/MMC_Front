import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeBackOffice from '../pages/backOffice/Home.jsx'
import Sponsorships from '../pages/backOffice/Sponsorships/Sponsorships.jsx'
import SponsorshipsAdd from '../pages/backOffice/Sponsorships/Add.jsx'
import Part from '../pages/backOffice/partners/Partners.jsx'
import PartnerAdd from '../pages/backOffice/partners/Add.jsx'
function AllRoutes() {
  return (
   <Routes>
        <Route path="/dashboard/" element={<HomeBackOffice />} />
        <Route path="/dashboard/sponsorships" element={<Sponsorships />} />
        <Route path="/dashboard/sponsorships/add" element={<SponsorshipsAdd />} />
        <Route path="/dashboard/partners" element={<Part />} />
        <Route path="/dashboard/partners/add" element={<PartnerAdd />} />
   </Routes>
  )
}

export default AllRoutes