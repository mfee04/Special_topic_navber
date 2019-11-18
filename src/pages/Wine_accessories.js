import React from 'react'
import { Link } from 'react-router-dom'
import Navigation_Navber from '../components/Navigation_Navber/Navigation_Navber'
import Wine_accessories_index from '../components/Wine_Accessories/Wine_accessories_index'
import Footer from '../components/Navigation_Navber/Footer'

const Wine_accessories = () => {
    return (
        <>
          <Navigation_Navber/>
          {/* 商品列表頁 */}
          <Wine_accessories_index/> 
          <Footer/>
        </>
    )
}


export default Wine_accessories