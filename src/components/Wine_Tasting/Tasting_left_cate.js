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

class Tasting_left_cate extends React.Component {
    constructor() {
        super()
    }
    //JQ放這
    componentDidMount() {
    }

    render() {
        return (
          <>
            <div id="left_menu_cate" className="mt-2">
              <div className="menu_cate_tit">
                <p>CATEGORIES</p>
                <div className="plus-minus-cate">
                  <img src="../images/Wine_Accessories/plus.png" className="plus-cate" alt="" />
                  <img src="../images/Wine_Accessories/minus.png" className="minus-cate" alt="" />
                </div>
              </div>
              <ul>
                <li className="d-flex justify-content-between">
                  <div>冰酒</div>
                  <div>(7)</div>
                </li>
                <li className="d-flex justify-content-between">
                  <div>葡萄酒</div>
                  <div>(7)</div>
                </li>
                <li className="d-flex justify-content-between">
                  <div>威士忌</div>
                  <div>(7)</div>
                </li>
                <li className="d-flex justify-content-between">
                  <div>氣泡酒</div>
                  <div>(7)</div>
                </li>
                <li className="d-flex justify-content-between">
                  <div>法國香檳</div>
                  <div>(7)</div>
                </li>
                <li className="d-flex justify-content-between">
                  <div>甜白酒</div>
                  <div>(7)</div>
                </li>
                <li className="d-flex justify-content-between">
                  <div>白酒</div>
                  <div>(7)</div>
                </li>
                <li className="d-flex justify-content-between">
                  <div>紅酒</div>
                  <div>(7)</div>
                </li>
              </ul>
          </div>
          </>
        )
    }
}
export default Tasting_left_cate