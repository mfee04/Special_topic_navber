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


class Tasting_breadcrumb extends React.Component {
    constructor() {
        super()
    }
    //JQ放這
    componentDidMount() {
    }

    render() {
        return (
          <>
            <Row>
              <div className="col-12 d-flex align-items-center bread_crumb mt-3">
                <img src="../images/Wine_Accessories/icon-home.png" alt=""/>
                <p>></p>
                <p>酒</p>
                <p>></p>
                <p>威士忌</p>
                <p>></p>
                <p>可能分類</p>
                <p>></p>
                <p>可能分類</p>
              </div>
            </Row>
          </>
        )
    }
}
export default Tasting_breadcrumb