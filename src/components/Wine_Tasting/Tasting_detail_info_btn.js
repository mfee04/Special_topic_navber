import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"
import $ from 'jquery'

//Bootstrap 標籤
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//css樣式
import '../../style/Wine_Tasting/Wine_Tasting_index.scss'
//分頁連結


class Tasting_detail_info_btn extends React.Component {
    constructor() {
        super()
    }
    //JQ放這
    componentDidMount() {

    }

    render() {
        return (
          <>
            <div className="social_icon d-flex justify-content-between mt-4">
              <button className="btn add_cart_btn"><img src="../images/Wine_Accessories/icon-cart_brown.png" alt=""/>加入詢價車</button>
              <button className="btn add_like_btn"><img src="../images/Wine_Accessories/icon-like_orange.png" alt=""/>加入最愛</button>
              <div className="share_text d-flex align-items-center">分享：
                <div className="share_icon d-flex">
                  <img src="../images/Wine_Accessories/icon_fb.svg" alt=""/>
                  <img src="../images/Wine_Accessories/icon_line.svg" alt=""/>
                </div>
              </div>
            </div>
          </>
        )
    }
}
export default Tasting_detail_info_btn