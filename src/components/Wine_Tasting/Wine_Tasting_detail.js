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
import Tasting_breadcrumb from './Tasting_breadcrumb'
import Tasting_detail_picslider from './Tasting_detail_picslider'
import Tasting_detail_picslider_preview from './Tasting_detail_picslider_preview'
import Tasting_detail_info from './Tasting_detail_info'
import Tasting_detail_info_btn from './Tasting_detail_info_btn'
import Tasting_detail_dec_title from './Tasting_detail_dec_title'
import Tasting_detail_recommenditem from './Tasting_detail_recommenditem'

import Navigation_Navber from '../Navigation_Navber/Navigation_Navber'
import Footer from '../Navigation_Navber/Footer'

class Wine_Tasting_detail extends React.Component {
  constructor() {
    super()
  }
  //JQ放這
  componentDidMount() {
    // 動態修改折價後的價格
    // 因為是套用整頁所以放在這裡
    // 產品原價 & 會員價設定
    let costPrice = $(".info_des>del>span").text()
    console.log(costPrice)
    $(".member_price").text("$" + costPrice * 0.8)

    // 商品簡述內文 & 品牌故事內文 切換動畫
    $(".goods_description_title").click(function () {
      $(this).addClass("bg_grey")
      $(".goods_brand_story_title").removeClass("bg_grey")
      $(".goods_description").show()
      $(".goods_brand_story").hide()
    })
    $(".goods_brand_story_title").click(function () {
      $(this).addClass("bg_grey")
      $(".goods_description_title").removeClass("bg_grey")
      $(".goods_brand_story").show()
      $(".goods_description").hide()
    })

    // 幫您推薦的商品價錢的 $
    $(".recommend_price").prepend("$ ")
  }

  render() {
    return (
      <>
        <Navigation_Navber />

        <Container>
          {/* 麵包屑 */}
          <Tasting_breadcrumb />
          {/* --商品照片與資訊 */}
          <Row>
            {/* --商品照片 */}
            <Col lg={6} md={12} sm={12} className="my-4">
              <Tasting_detail_picslider />
              <Tasting_detail_picslider_preview />
            </Col>
            {/* --商品資訊 */}
            <Col lg={6} md={12} sm={12} className="my-4">
              <Tasting_detail_info />
              <Tasting_detail_info_btn />
            </Col>
          </Row>
          {/* 商品簡述標題+品牌故事標題 */}
          <Row>
          <Col lg={12}>
            <Tasting_detail_dec_title />
          </Col>
          </Row>
          {/* 商品簡述+品牌故事內文 */}
          <Row>
            <Col lg={12} md={12} className="goods_description">限量生產的銀璽17年雪莉桶風味輕原酒，是經Oloroso與PX首次雪莉桶陳釀後調製而成。兼具PX的滑順與Oloroso的豐富木質口感。特殊的46%非冷凝過濾，保留住酒液完整風味。
                </Col>
            <Col lg={12} md={12} className="goods_brand_story">The brand has always maintained a close relationship to the Muirhead’s Clan. The history of the clan can be traced far back in Scottish History. The name Muirhead’s means “Head of the Moor” or “Highest Point of the Moor” in Gaelic.
                </Col>
          </Row>
          {/* 幫您推薦標題 */}
          <Row>
            <Col lg={12} className="goods_recommend_title">幫您推薦</Col>
          </Row>
          {/* 幫您推薦商品 */}
          <Row className="mt-4">
            <Col className="recommend_area d-flex">
              <Tasting_detail_recommenditem />
              <Tasting_detail_recommenditem />
              <Tasting_detail_recommenditem />
              <Tasting_detail_recommenditem />
              <Tasting_detail_recommenditem />
            </Col>
          </Row>

        </Container>
        <Footer />
      </>
    )
  }
}
export default Wine_Tasting_detail