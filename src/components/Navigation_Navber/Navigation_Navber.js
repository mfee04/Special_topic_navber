import React from 'react'
//樣式
import '../../style/Home.scss'
//分頁連結
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"
// import Shoping from '../../components/ShopingCar/Shoping'
import $ from 'jquery'

//類別型元件
class Navigation_Navber extends React.Component {
    constructor() {
        super()
    }
    componentDidMount() {
        $(".magnifier_icon").click(function () {
            $(".search_bar_css").css({
                width: 180,
                "padding-left": 15,
                "background-color": "var(--main-orange)"
            });
            $(".search_bar_css::placeholder").css("color", "var(--main-white)");
        });
        $(".search_bar_css").blur(function () {
            $(this).css({
                width: 0,
                "padding-left": 0,
                "background-color": "var(--main-white)"
            });
            $(".search_bar_css::placeholder").css("color", "transparent");
        });
    }
    render() {
        return (
            // <Router>
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
                                <img src={"../images/Wine_Accessories/icon-search.png"} alt="" className="magnifier_icon" />
                            </form>
                            <img src={"../images/Wine_Accessories/icon-mylove.png"} alt="" />
                            <Link to="/Shoping">
                                <img src={"../images/Wine_Accessories/icon-cart.png"} alt="" />
                            </Link>
                            <p className="chart_money">0／<strong> $0.00</strong></p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Navigation_Navber