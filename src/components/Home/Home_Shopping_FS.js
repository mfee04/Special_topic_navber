import React from 'react'

//Bootstrap 標籤
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../style/HomeContainer_News/Home_Shopping_FS.scss'
import '../../style/animate/animate.min.css'

class Home_Shopping_FS extends React.Component {
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
                <div className="Home_Shopping_FS_bg">
                    <div className="d-flex justify-content-space-between">
                        <p className="line"></p>
                        <h3 className="pt-95">SHOPPING&ensp;FLOW&nbsp;STEPS</h3>
                        <p className="line"></p>
                    </div>
                    <Container className="d-flex justify-content-center Shooping_area">
                        <div className="Shopping_FS_Block">
                            <div className="Shopping_FS_svg">
                                <img src="../images/Wine_Accessories/step1.svg"></img>
                                <p>挑選商品</p>
                                <p>逛逛我們的Bistro網站選擇你所愛的那支酒</p>
                            </div>
                            <div className="Shopping_FS_text">
                                <p>→</p>
                            </div>
                        </div>
                        <div className="Shopping_FS_Block">
                            <div className="Shopping_FS_svg">
                                <img src="../images/Wine_Accessories/step2.svg"></img>
                                <p>挑選商品</p>
                                <p>逛逛我們的Bistro網站選擇你所愛的那支酒</p>
                            </div>
                            <div className="Shopping_FS_text">
                                <p>→</p>
                            </div>
                        </div>
                        <div className="Shopping_FS_Block">
                            <div className="Shopping_FS_svg">
                                <img src="../images/Wine_Accessories/step3.svg"></img>
                                <p>挑選商品</p>
                                <p>逛逛我們的Bistro網站選擇你所愛的那支酒</p>
                            </div>
                            <div className="Shopping_FS_text">
                                <p>→</p>
                            </div>
                        </div>
                        <div className="Shopping_FS_Block">
                            <div className="Shopping_FS_svg">
                                <img src="../images/Wine_Accessories/step4.svg"></img>
                                <p>挑選商品</p>
                                <p>逛逛我們的Bistro網站選擇你所愛的那支酒</p>
                            </div>
                            <div className="Shopping_FS_text">
                                <p>→</p>
                            </div>
                        </div>
                        <div className="Shopping_FS_Block">
                            <div className="Shopping_FS_svg">
                                <img src="../images/Wine_Accessories/step5.svg"></img>
                                <p>挑選商品</p>
                                <p>逛逛我們的Bistro網站選擇你所愛的那支酒</p>
                            </div>
                        </div>
                    </Container>
                </div>
            </>
        )
    }
}
export default Home_Shopping_FS
