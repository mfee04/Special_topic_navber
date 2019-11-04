import React from 'react'
// import { Link } from 'react-router-dom'
// import PathNow from '../components/PathNow'
import Carousel from '../components/Home/Carousel'
import Container_News from '../components/Home/Container_News'
import Footer from '../components/Navigation_Navber/Footer'

// Container_News

// import Choosen from "../Chosen"


const Home = () => {
    return (
        <>
            <Carousel />
            <Container_News />
            <Footer />
        </>
    )
}


export default Home