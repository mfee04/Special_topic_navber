import React from 'react'

//Bootstrap 標籤
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//css樣式
import '../../style/Wine_Tasting/Wine_Tasting_index.scss'
//分頁連結
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"
import $ from 'jquery'

//商品細節頁

class Tasting_right_goods extends React.Component {
  constructor() {
    super()
  }
  //JQ放這
  componentDidMount() {
  }

  render() {
    return (
      <>
          <Col lg={3} md={6} sm={6} className="mt-4 goods">
            <Link to="/Wine_Tasting/Wine_Tasting_detail">
              <div className="goods_pic">
                <img src="../images/Muirhead's Silver Seal.jpg" alt="" />
              </div>
            </Link>
            <p>銀璽17年雪莉桶風味威士忌輕原酒</p>
            <div className="goods_info d-flex justify-content-between align-items-center">
              <div className="price_area">
                <span>$<del>1900</del></span>
              </div>
              <div className="goods_icon d-flex">
                <div className="goods_icon_compare">
                  <img src="../images/icon-compare_wh.png" alt="" />
                </div>
                <div className="goods_icon_compare">
                  <img src="../images/icon-like_wh.png" alt="" />
                </div>
                <div className="goods_icon_compare">
                  <img src="../images/icon-cart_wh.png" alt="" />
                </div>
              </div>
            </div>
          </Col>
      </>
    )
  }
}
export default Tasting_right_goods