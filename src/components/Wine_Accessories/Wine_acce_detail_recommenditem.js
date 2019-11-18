import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"
import $ from 'jquery'

//Bootstrap 標籤
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//css樣式
import '../../style/Wine_accessories/Wine_service_detail.scss'
//分頁連結


class Wine_acce_detail_recommenditem extends React.Component {
    constructor() {
        super()
    }
    //JQ放這
    componentDidMount() {

    }

    render() {
        return (
          <>
            <div className="recommend_item d-flex flex-column align-items-center">
              <div className="recommend_pic">
                <img src="../images/Wine_Accessories/whitewine-rosendahl-grand-cru.jpg" alt=""/>
              </div>
              <p>Rosendahl Grand Cru波爾多白酒杯（一組二入）</p>
              <span className="recommend_price">1200</span>
              <button className="btn add_cart_btn"><img src="../images/Wine_Accessories/icon-cart_brown.png" alt=""/>加入詢價車
              </button>
            </div>
          </>
        )
    }
}
export default Wine_acce_detail_recommenditem