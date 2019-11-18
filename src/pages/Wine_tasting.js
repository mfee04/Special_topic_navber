// 酒商品頁
import React from 'react'
import { Link } from 'react-router-dom'
import Navigation_Navber from '../components/Navigation_Navber/Navigation_Navber'
import Wine_Tasting_index from '../components/Wine_Tasting/Wine_Tasting_index'
import Footer from '../components/Navigation_Navber/Footer'

const Wine_tasting = () => {
    return (
        <>
            <Navigation_Navber/>
            <Wine_Tasting_index/>
            <Footer/>
        </>
    )
}


export default Wine_tasting