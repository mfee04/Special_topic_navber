import React from 'react'

//分頁連結
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from 'react-router-dom'
import Home from './pages/Home'
import Dining_pub_inquiry from './pages/Dining_pub_inquiry'
import Wine_tasting from './pages/Wine_tasting'
import Wine_service from './pages/Wine_service'
import latest_events from './pages/latest_events'
import New_knowledge_of_bartending from './pages/New_knowledge_of_bartending'
import about_us from './pages/about_us'
import Login_register from './pages/Login_register'
import Navigation_Navber_Home from './components/Navigation_Navber/Navigation_Navber_Home'
import Navigation_Navber from './components/Navigation_Navber/Navigation_Navber'
// import Carousel from './components/Navigation_Navber/Carousel'

//Bootstrap 標籤
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

//樣式

const App = () => {
  return (
    <>
      <Navigation_Navber_Home />
    </>
  )
}
export default App
