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


class Navigation_Navber_Home extends React.Component {
    constructor() {
        super()
    } render() {
        return (
            <Router>
                <>
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
                    <nav class="navbar navbar-expand-lg navbar-light navberLogo">
                        <a class="navbar-brand" href="#">
                            <img className="Logo_png" src={"../images/logo.png"}></img>
                            <img className="Logo_svg ml-3" src={"../images/logo.svg"}></img>
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse  justify-content-center" id="navbarSupportedContent">
                            <ul class="navbar-nav d-flex">
                                <li className="nav-item nav-item_li">
                                    <Link to="/">首頁</Link>
                                </li>
                                <li className="nav-item nav-item_li">
                                    <Link to="/Dining_pub_inquiry">餐酒館查詢</Link>
                                </li>
                                <li className="nav-item nav-item_li">
                                    <Link to="/Wine_tasting">品酒迷因</Link>
                                </li>
                                <li className="nav-item nav-item_li">
                                    <Link to="/Wine_service">酒具服務</Link>
                                </li>
                                <li className="nav-item nav-item_li">
                                    <Link to="/latest_events">最新活動</Link>
                                </li>
                                <li className="nav-item nav-item_li">
                                    <Link to="/New_knowledge_of_bartending">調酒新知</Link>
                                </li>
                                <li className="nav-item nav-item_li">
                                    <Link to="/about_us">關於我們</Link>
                                </li>
                                <button className="btn sign_btn_css my-2 my-sm-0 Sign_in_btn" type="submit">
                                    <li><Link to="/Login_register">登入/註冊</Link></li>
                                </button>
                            </ul>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Home} /> {/* 首頁 */}
                        <Route path="/Dining_pub_inquiry" component={Dining_pub_inquiry} />{/* 餐酒館查詢 */}
                        <Route path="/Wine_tasting" component={Wine_tasting} />{/* 品酒迷因 */}
                        <Route path="/Wine_service" component={Wine_service} />{/* 酒具服務 */}
                        <Route path="/latest_events" component={latest_events} />{/* 最新活動 */}
                        <Route path="/New_knowledge_of_bartending" component={New_knowledge_of_bartending} />{/* 調酒新知 */}
                        <Route path="/about_us" component={about_us} />{/* 關於我們 */}
                        <Route path="/Login_register" component={Login_register} />{/* 登入/註冊 */}
                    </Switch>
                </>
            </Router>
        )
    }
}
export default Navigation_Navber_Home