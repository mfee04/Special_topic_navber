import React from 'react'
//樣式
import '../../style/Home.scss'
//分頁連結
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"
import Home from '../../pages/Home'
import Dining_pub_inquiry from '../../pages/Dining_pub_inquiry'
import Wine_tasting from '../../pages/Wine_tasting'
import Wine_service from '../../pages/Wine_service'
import latest_events from '../../pages/latest_events'
import New_knowledge_of_bartending from '../../pages/New_knowledge_of_bartending'
import about_us from '../../pages/about_us'
import Login_register from '../../pages/Login_register'
// import Carousel from './components/Navigation_Navber/Carousel'


class Navigation_Navber extends React.Component {
    constructor() {
        super()
    } render() {
        return (
            <Router>
                <>
                    <div className="nav_bg_img">
                        <div id="nav_top">
                            <div className="nav_top_icon d-flex justify-content-end align-items-center">
                                <form className="">
                                    <input
                                        className="search_bar_css"
                                        type="text"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <img src={"../images/icon-search.png"} alt="" className="magnifier_icon" />
                                </form>
                                <img src={"../images/icon-mylove.png"} alt="" />
                                <img src={"../images/icon-cart.png"} alt="" />
                                <p className="chart_money">0／<strong> $0.00</strong></p>
                            </div>
                        </div>
                    </div>
                </>
            </Router>
        )
    }
}
export default Navigation_Navber