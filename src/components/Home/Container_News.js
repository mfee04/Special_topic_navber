import React from 'react'

//Bootstrap 標籤
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../style/Container_News/Container_News.scss'

class Container_News extends React.Component {
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
                <div className="Container_News_Bg_img">
                    <h3>LAIESI EVENIS</h3>
                    <Container>
                        <div className="Container_News_figure">
                            <Row>
                                <Col xl={3} md={4} sm>
                                    <div>
                                        <div>

                                        </div>
                                        <div>
                                            <p></p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={3} md={4} sm></Col>
                                <Col xl={3} md={4} sm></Col>
                                <Col xl={3} md={4} sm></Col>
                            </Row>
                            <Row>
                                <Col xl={3} md={4} sm></Col>
                                <Col xl={3} md={4} sm></Col>
                                <Col xl={3} md={4} sm></Col>
                                <Col xl={3} md={4} sm></Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </>
        )
    }
}
export default Container_News



