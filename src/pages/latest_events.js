import React from 'react'
import { Link } from 'react-router-dom'
import PathNow from '../components/PathNow'
import Navigation_Navber from '../components/Navigation_Navber/Navigation_Navber'
import Footer from '../components/Navigation_Navber/Footer'

const latest_events = () => {
    return (
        <>
           <Navigation_Navber/>
            <Footer/>
        </>
    )
}


export default latest_events