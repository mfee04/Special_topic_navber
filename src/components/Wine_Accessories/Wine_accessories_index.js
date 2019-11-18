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
import Accessories_left_cate from './Accessories_left_cate'
import Accessories_left_sort from './Accessories_left_sort'
import Accessories_left_priceSlider from './Accessories_left_priceSlider'
import Accessories_right_goods from './Accessories_right_goods'
import Accessories_right_pages from './Accessories_right_pages'

class Wine_accessories_index extends React.Component {
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
                  <Accessories_left_cate/>
                  <Accessories_left_sort/>
                  <Accessories_left_priceSlider/>
                </Col>
              {/* 右邊 顯示商品列表*/}
                <Col lg={9} sm={12} id="main_area">
                  <Row>
                  <Accessories_right_goods/>
                  <Accessories_right_goods/>
                  <Accessories_right_goods/>
                  <Accessories_right_goods/>
                  <Accessories_right_goods/>
                  <Accessories_right_goods/>
                  <Accessories_right_goods/>
                  <Accessories_right_goods/>
                  <Accessories_right_goods/>
                  <Accessories_right_goods/>
                  <Accessories_right_goods/>
                  {/* 下方顯示總頁數*/}
                  <Col lg={12}>
                    <Accessories_right_pages/>
                  </Col>
                  </Row>
                </Col>
              </Row>
          </Container>
          </>
        )
    }
}
export default Wine_accessories_index