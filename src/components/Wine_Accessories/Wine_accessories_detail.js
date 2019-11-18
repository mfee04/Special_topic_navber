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
import Wine_acce_detail_breadcrumb from './Wine_acce_detail_breadcrumb'
import Wine_acce_detail_picslider from './Wine_acce_detail_picslider'
import Wine_acce_detail_picslider_preview from './Wine_acce_detail_picslider_preview'
import Wine_acce_detail_info from './Wine_acce_detail_info'
import Wine_acce_detail_info_btn from './Wine_acce_detail_info_btn'
import Wine_acce_detail_dec_title from './Wine_acce_detail_dec_title'
import Wine_acce_detail_recommenditem from './Wine_acce_detail_recommenditem'

import Navigation_Navber from '../Navigation_Navber/Navigation_Navber'
import Footer from '../Navigation_Navber/Footer'
class Wine_accessories_detail extends React.Component {
  
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
          <Wine_acce_detail_breadcrumb />
          {/* --商品照片與資訊 */}
          <Row>
            {/* --商品照片 */}
            <Col lg={6} md={12} sm={12} className="my-4">
              <Wine_acce_detail_picslider />
              <Wine_acce_detail_picslider_preview />
            </Col>
            {/* --商品資訊 */}
            <Col lg={6} md={12} sm={12} className="my-4">
              <Wine_acce_detail_info />
              <Wine_acce_detail_info_btn />
            </Col>
          </Row>
          {/* 商品簡述標題+品牌故事標題 */}
          <Row>
          <Col lg={12}>
            <Wine_acce_detail_dec_title />
          </Col>
          </Row>
          {/* 商品簡述+品牌故事內文 */}
          <Row>
            <Col lg={12} md={12} className="goods_description">若說美酩是一場品酒體驗的主角，嚴選自 Rosendahl 的酒杯便是不可或缺的完美配角；設計師 Erik Bagger 以適合每日使用的酒器為設計核心，用堅固無鉛玻璃打造出剔透輕盈的雙酒杯組。無論是下班後對月獨酌釋放壓力；亦或週末時光，將珍藏美酒開瓶，與摯友暢飲言歡、情人浪漫對杯，它皆會是您必備的品酩良伴。
                </Col>
            <Col lg={12} md={12} className="goods_brand_story">在斯堪的納維亞半島地區，Rosendahl 一直是最知名、最具創新性的設計品牌之一。他們將玻璃、塑料、陶瓷等豐沛材質靈活運用，並把北歐民族對大自然的熱愛精神，融入生活餐具之中；其中 Grand Cru 是最具代表性的系列作品，標誌性的四道冰鑿線，讓餐具著上極北冰川的美麗光影。品牌旗下作品得獎無數，廣受歡迎，走進歐美的設計商店、高級百貨公司、禮品店、生活雜貨店，甚至博物館展覽館，Rosendahl 經常是「架上嘉賓」。
                </Col>
          </Row>
          {/* 幫您推薦標題 */}
          <Row>
            <Col lg={12} className="goods_recommend_title">幫您推薦</Col>
          </Row>
          {/* 幫您推薦商品 */}
          <Row className="mt-4">
            <Col className="recommend_area d-flex">
              <Wine_acce_detail_recommenditem />
              <Wine_acce_detail_recommenditem />
              <Wine_acce_detail_recommenditem />
              <Wine_acce_detail_recommenditem />
              <Wine_acce_detail_recommenditem />
            </Col>
          </Row>

        </Container>
        <Footer />
      </>
    )
  }
}
export default Wine_accessories_detail