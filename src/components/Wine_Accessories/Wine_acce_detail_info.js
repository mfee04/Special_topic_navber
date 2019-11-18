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


class Wine_acce_detail_info extends React.Component {
    constructor() {
        super()
    }
    //JQ放這
    componentDidMount() {

    }

    render() {
      const canBuy = {
        color: "var(--main-orange)",
        fontWeight: "bold"
      }

        return (
          <>
            <ul>
              <li className="detail_info">
                <div className="info_title">名稱：</div>
                <div className="info_des">Rosendahl Grand Cru波爾多白酒杯（一組二入）</div>
              </li>
              <li className="detail_info">
                <div className="info_title">類型：</div>
                <div className="info_des">酒杯／葡萄酒杯／白酒杯</div>
              </li>
              <li className="detail_info">
                <div className="info_title">尺寸：</div>
                <div className="info_des">275 mm</div>
              </li>
              <li className="detail_info">
                <div className="info_title">容量：</div>
                <div className="info_des">800 ml</div>
              </li>
              <li className="detail_info">
                <div className="info_title">品牌：</div>
                <div className="info_des">Rosendahl</div>
              </li>
              <li className="detail_info">
                <div className="info_title">供貨狀況：</div>
                <div className="info_des" style={canBuy}>可以購買</div>
              </li>
              <li className="detail_info">
                <div className="info_title">優惠售價：</div>
                <div className="info_des">
                  <del>原價 <span>1700</span></del>
                  <span className="ml-3">會員價 
                    <p className="member_price"></p>
                  </span>
                </div>
              </li>
            </ul>
          </>
        )
    }
}
export default Wine_acce_detail_info