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


class Tasting_detail_picslider_preview extends React.Component {
    constructor() {
        super()
    }
    //JQ放這
    componentDidMount() {
      let sliderWidth = $("#slider_wrap").width();
      let sliderNum = 0;
      let sliderCont = $(".slider-cont li").length
      $(".slider-cont").css("width",sliderWidth*sliderCont)
      $(window).resize(function(event){
        sliderWidth = $("#slider_wrap").width();
        $(".slider-cont").css("width",sliderWidth*sliderCont)
      })
      $(".preview_img").click(function(event){
        $(this).css("border-color","var(--text-color)")
        $(this).siblings().css("border-color","transparent")
        let previewImgIndex = $(this).index()
        $(".slider-cont").css("left",0-sliderWidth*previewImgIndex)
      })
    }

    render() {
        return (
          <>
            <div class="preview_area d-flex">
              <div class="preview_img"><img src="../images/Wine_Accessories/whitewine-rosendahl-grand-cru.jpg" alt=""/></div>
              <div class="preview_img"><img src="../images/Wine_Accessories/slider01.jpg" alt=""/></div>
              <div class="preview_img"><img src="../images/Wine_Accessories/slider03.jpg" alt=""/></div>
              <div class="preview_img"><img src="../images/Wine_Accessories/slider04.jpg" alt=""/></div>
            </div>
          </>
        )
    }
}
export default Tasting_detail_picslider_preview