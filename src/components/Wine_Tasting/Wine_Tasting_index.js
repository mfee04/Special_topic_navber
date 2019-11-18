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
import Tasting_left_origin from './Tasting_left_origin'
import Tasting_left_cate from './Tasting_left_cate'
import Tasting_left_sort from './Tasting_left_sort'
import Tasting_left_priceSlider from './Tasting_left_priceSlider'
import Tasting_right_goods from './Tasting_right_goods'
import Tasting_right_pages from './Tasting_right_pages'

class Wine_Tasting_index extends React.Component {
    constructor() {
        super()
    }
    //JQ放這
    componentDidMount() {
      // 動態修改折價後的價格
      // 因為是套用整頁所以放在這裡
      $(".price_area>span>del").each(function() {
        var goods_org_price = $(this).text();
        // console.log(goods_org_price);
        var goods = $(this);
        var goods_discount = parseInt(goods_org_price) * 0.9;
        // console.log(goods_discount);
        $(
          `<span class="price_discount">` + goods_discount + `</span>`
        ).insertAfter(goods);
      });
      // RWD 左邊欄位下拉選單
      $(".plus-minus-cate").click(function(){
        $("#left_menu_cate>ul").slideToggle()
        $(".plus-cate").toggle()
        $(".minus-cate").toggle()
      })
      $(".plus-minus-sort").click(function(){
        $(".sort_option").slideToggle()
        $(".plus-sort").toggle()
        $(".minus-sort").toggle()
      })
    }

    render() {
        return (
          <>
          <Container>
              <Row>
              {/* 左邊 分類篩選*/}
                <Col lg={3} sm={12} id="left_menu">
                  <Tasting_left_origin/>
                  <Tasting_left_cate/>
                  <Tasting_left_sort/>
                  <Tasting_left_priceSlider/>
                </Col>
              {/* 右邊 顯示商品列表*/}
                <Col lg={9} sm={12} id="main_area">
                  <Row>
                  <Tasting_right_goods/>
                  <Tasting_right_goods/>
                  <Tasting_right_goods/>
                  <Tasting_right_goods/>
                  <Tasting_right_goods/>
                  <Tasting_right_goods/>
                  <Tasting_right_goods/>
                  <Tasting_right_goods/>
                  <Tasting_right_goods/>
                  <Tasting_right_goods/>
                  <Tasting_right_goods/>
                  {/* 下方顯示總頁數*/}
                  <Col lg={12}>
                    <Tasting_right_pages/>
                  </Col>
                  </Row>
                </Col>
              </Row>
          </Container>
          </>
        )
    }
}
export default Wine_Tasting_index