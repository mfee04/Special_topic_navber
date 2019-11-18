import React from 'react'
//Bootstrap 標籤
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../style/HomeContainer_News/Home_Fome.scss'

class Home_Fome extends React.Component {

    constructor(props) {
        super(props);
        this.state = { input1: '', input2: '', input3: '', input4: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // aaa = ()=>alert(this.state.input1)
    handleChange = (event) => {
        console.log(event.target.id);
        let obj = {};
        if (event.target.id) {
            obj[event.target.id] = event.target.value;
        }
        this.setState(obj,()=>console.log(this.state));       
    }

    handleSubmit(event) {
        console.log(this.state.input1)
        alert('A name was submitted: '
            + this.state.input1 + this.state.input2 + this.state.input3 + this.state.input4);
        event.preventDefault();
    }
    render() {
        return (
            <>
                <div className="Home_Fome_bg position-relative">
                    <Container className="mg-auto position-absolute Home_Fome_container">
                        <Row className="d-flex mg-auto">
                            <Col lg={4} md={12} sm={12} className="d-flex flex-column align-items-start">
                                <div className="Home_Fome_text d-flex flex-column mb-auto">
                                    <p>官方客服</p>
                                    <p>Email：service@iii.com.tw</p>
                                    <p>LINE：請搜尋＠Bistro</p>
                                </div>
                                <div className="Home_Fome_icon d-flex">
                                    <a href="#"><i class="fab fa-facebook-f Home_Fome_icon_text"></i></a>
                                    <a href="#"><i class="fab fa-youtube Home_Fome_icon_text"></i></a>
                                    <a href="#"><i class="fas fa-phone-square-alt Home_Fome_icon_text"></i></a>
                                    <a href="#"><i class="fab fa-instagram Home_Fome_icon_text"></i></a>
                                </div>

                            </Col>
                            <Col lg={8} md={12} sm={12}>
                                <from onSubmit={this.handleSubmit} className="Home_Fome_input d-flex flex-column">
                                    <label className="">
                                        <input id="input1" placeholder="Name" type="text" onChange={this.handleChange} className="Home_Fome_inputname w-100">

                                        </input>
                                    </label>
                                    <label>
                                        <input id="input2" placeholder="Email" type="text" onChange={this.handleChange} className="Home_Fome_inputname w-100">

                                        </input>
                                    </label>
                                    <label>
                                        <input id="input3" placeholder="Phone" type="text" onChange={this.handleChange} className="Home_Fome_inputname w-100">

                                        </input>
                                    </label>
                                    <label className="input_Message">
                                        {/* <input defaultValue="Message" type="text" value={this.state.input4} onChange={this.handleChange} className="Home_Fome_inputname w-100"> */}
                                        <textarea id="input4" placeholder="Message" onChange={this.handleChange} className="Home_Fome_inputname w-100" />
                                        {/* </input> */}
                                    </label>
                                    <input type="submit" value="Submit" className="Home_Fome_input_btn" onClick={this.handleSubmit} />
                                </from>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}
export default Home_Fome
