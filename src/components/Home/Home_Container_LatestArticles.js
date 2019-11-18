import React from 'react'

//Bootstrap 標籤
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../style/HomeContainer_News/Home_Container_LatestArticles.scss'

class Home_Container_LatestArticles extends React.Component {
    componentDidMount() {

    }
    constructor() {
        super()
    }

    // a = (props) => () => {

    // }

    render() {
        return (
            <>
                <div className="Home_Container_LatestArticles_Bg_img">
                    <Container>
                        <h3 className="pt-95">LAIESI&ensp;ARTICLES</h3>
                        <Row className="d-flex">
                            <Col xl={3} lg={12} className="flex-row LatestArticles_Area1">
                                <a href="#" className="figure">
                                    <img src="../images/Container_News/StockSnap_MUUFPYI14D.jpg" className="d-block w-100" />
                                    <p>威尼斯必去的音樂酒吧</p>
                                </a>
                                <a href="#" className="figure">
                                    <img src="../images/Container_News/StockSnap_MUUFPYI14D.jpg" className="d-block w-100" />
                                    <p>威尼斯必去的音樂酒吧</p>
                                </a>
                                <a href="#" className="figure">
                                    <img src="../images/Container_News/StockSnap_MUUFPYI14D.jpg" className="d-block w-100" />
                                    <p>威尼斯必去的音樂酒吧</p>
                                </a>
                            </Col>
                            <Col xl={6} lg className="LatestArticles_Area2">
                                <div className="M_img">
                                    <div className="figure">
                                        <img src="../images/Container_News/StockSnap_QIZWBURQ54.jpg" />
                                    </div>
                                    <div className="text_region">
                                        <strong><p className="figure_text color1">超簡單酒譜！<br></br>炎炎夏日也能輕鬆調出出餐前開胃酒</p></strong>
                                        <p className="figure_text position-relative">在1950年代開始，Aperol Spritz 在義大利開始流行起來，慢慢演化出「義大利國民飲料」的地位。在 2003 年 Aperol 被金巴利集團收購後，集團更把這調酒定位為「最適合社交場合的飲料」，並且下了不少預算贊助如 Moto GP 等賽事，營業額比起收購前爆增四倍</p>
                                        <a href="#" className="position-absolute">Read More</a>

                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={12} className="LatestArticles_Area3 flex-row">
                                <a href="#" className="figure ">
                                    <img src="../images/Container_News/StockSnap_MUUFPYI14D.jpg" className="d-block w-100" />
                                    <p>威尼斯必去的音樂酒吧</p>
                                </a>
                                <a href="#" className="figure">
                                    <img src="../images/Container_News/StockSnap_MUUFPYI14D.jpg" className="d-block w-100" />
                                    <p>威尼斯必去的音樂酒吧</p>
                                </a>
                                <a href="#" className="figure">
                                    <img src="../images/Container_News/StockSnap_MUUFPYI14D.jpg" className="d-block w-100" />
                                    <p>威尼斯必去的音樂酒吧</p>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}
export default Home_Container_LatestArticles
