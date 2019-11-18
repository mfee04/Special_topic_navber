import React from 'react'

//Bootstrap 標籤
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../style/HomeContainer_News/Home_About_us.scss'
import '../../style/animate/animate.min.css'

class Home_About_us extends React.Component {
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
                <div className="Home_About_us_bg">
                    <Container className="">
                        <Row className="d-flex Home_About_area">
                            <Col xl={6} lg={12} className="Home_About_us_img_piece">
                                <div className="Home_About_us_frame d-flex Home_About_us_img_1">
                                    <div className="Home_About_us_img">
                                        <img src="../images/Container_News/StockSnap_YO2USSKK2K.jpg"></img>
                                    </div>
                                </div>
                                <div className="Home_About_us_frame d-flex Home_About_us_img_2">
                                    <div className="Home_About_us_img">
                                        <img src="../images/Container_News/StockSnap_SBQGCXR4AS.jpg"></img>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={6} lg={12} className="d-flex Home_About_us_textarea">
                                <div className="Home_About_us_text">
                                    <p>關於我們</p>
                                    <p>ABOUT US</p>
                                    <p>Bistro秉持著創新與整合的精神<br></br>不變的信念是<br></br>我們相信可以透過多元化的服務影響周遭的人<br></br>讓每個仁更加重視生活的每個片刻</p>
                                    <p>Bistro秉持著創新與整合的精神Bistro秉持著創新與整合的精神Bistro秉持著創新與整合的精神Bistro秉持著創新與整合的精神Bistro秉持著創新與整合的精神Bistro秉持著創新與整合的精神Bistro秉持著創新與整合的精神Bistro秉持著創新與整合的精神Bistro秉持著創新與整合的精神Bistro秉持著創新與整合的精神Bistro秉持著創新與整合的精神Bistro秉持著創新與整合的精神</p>
                                    <a href="#" className="Home_About_us_btn"><p>VIEW MORE</p></a>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </>
        )
    }
}
export default Home_About_us
