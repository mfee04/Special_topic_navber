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

class Tasting_left_origin extends React.Component {
    constructor() {
        super()
    }
    //JQ放這
    componentDidMount() {
    }

    render() {
        return (
          <>
            <div id="left_menu_cate" className="mt-4">
              <div className="menu_cate_tit">
                <p>ORIGIN</p>
                <div className="plus-minus-cate">
                  <img src="../images/Wine_Accessories/plus.png" className="plus-cate" alt="" />
                  <img src="../images/Wine_Accessories/minus.png" className="minus-cate" alt="" />
                </div>
              </div>
              <ul>
                <li className="d-flex justify-content-between">
                  <div>美國 USA</div>
                  {/* <div>(7)</div> */}
                </li>
                <li className="d-flex justify-content-between">
                  <div>法國 France</div>
                  {/* <div>(7)</div> */}
                </li>
                <li className="d-flex justify-content-between">
                  <div>義大利 Italy</div>
                  {/* <div>(7)</div> */}
                </li>
                <li className="d-flex justify-content-between">
                  <div>西班牙 Spain</div>
                  {/* <div>(7)</div> */}
                </li>
              </ul>
          </div>
          </>
        )
    }
}
export default Tasting_left_origin