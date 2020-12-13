import React, { Component } from 'react';
import {Format} from '../database/Format';
import {Container, Navbar, Button, Nav, Row, Col, Card, Form} from 'react-bootstrap';

function Formlayout(props) {
    var oneCol = true;
    if(props.input != null) {
        oneCol = false;
    }
    if(oneCol){
        return(
            <Form.Group as={Row} controlId={props.id}>
                <Form.Label column sm={3} md={2}>{props.name}</Form.Label>
                <Col sm={9} md={10}>
                    <Form.Control as="select" readOnly={props.read}>
                        {Format[props.id].map((val) =>
                            <option>{val}</option>
                        )}
                    </Form.Control>
                </Col>
            </Form.Group>
        );
    } else {
        return(
            <Form.Group as={Row} controlId={props.id} className="align-items-center">
                <Form.Label column sm={3} md={2}>{props.name}</Form.Label>
                <Col sm={4} md={5}>
                    <Form.Control as="select" readOnly={props.read}>
                        {Format[props.id].map((val) =>
                            <option>{val}</option>
                        )}
                    </Form.Control>
                </Col>
                <Col sm={5}>
                    <Form.Control type="input" placeholder={props.place} />
                </Col>
            </Form.Group>
        );
    }
}

class DefaultLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSide: "",
            notShowOffset: 1
        };
        this.onShow = this.onShow.bind(this); 
    }

    onShow() {
        this.setState({
            showSide: (this.state.showSide === "" ? 'none' : ''),
            notShowOffset: (this.state.showSide === "" ? 2 : 1)
        });
    }

    render() {
        return(
            <Container fluid style={{padding:"0", margin:"0", overflowX:"hidden"}}> 
                <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
                    <Button className="homepageBut">
                        <span className="fa fa-caret-left"></span> Homepage
                    </Button>
                    <Navbar.Brand className="nav_brand">Enrollment</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar">
                        <span className="fa fa-ellipsis-v"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbar">
                        <Nav className="ml-auto">
                            <Nav.Link href="#"><i className="fa fa-home"></i></Nav.Link>
                            <Nav.Link href="#"><i className="fa fa-search"></i></Nav.Link>
                            <Nav.Link href="#"><span className="fa fa-ellipsis-v"></span></Nav.Link>
                            <Nav.Link href="#"><i className="fa fa-compass"></i></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Row noGutters>
                    <Col sm={2} style={{display: this.state.showSide}}>
                        <div className="sideNav">
                            <Nav justify className="flex-column">
                                <Nav.Link href="#" className="sideLink">Meme</Nav.Link>
                                <Nav.Link href="#" className="sideLink active">Class Search</Nav.Link>
                            </Nav>
                        </div>
                        
                    </Col>
                    <Col sm={1} className="align-self-center">
                        <Button onClick={this.onShow}><i className="fa fa-bars"></i></Button>
                    </Col>
                    <Col sm={8} md={8} lg={{span:6, offset: this.state.notShowOffset}}>
                        <Card border="primary" style={{width:'px'}}>
                            <Card.Header>Hello</Card.Header>
                            <Card.Body>
                                <p>Use the drop down menu to select the term.</p>
                                <Form>
                                    <Formlayout name={"Term"} id={"term"}/>
                                    <Formlayout name={"Session"} id={"session"} read={"false"}/>
                                    <Formlayout name={"Status"} id={"status"} /> 
                                    <Formlayout name={"Subject"} id={"subject"} />
                                    <Formlayout name={"Course Number"} id={"courseNum"} place={"Course Number"} input={false} />
                                    <Form.Group as={Row} controlId="courseKeyword" className="align-items-center">
                                        <Form.Label column sm={2}>Course Title Keyword</Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="text"/>
                                        </Col>
                                    </Form.Group>
                                    <Formlayout name={"Instructor Last Name"} id={"instructor"} place={"Last Name"} input={false} />
                                    <Formlayout name={"General"} id={"general"} />
                                    <Formlayout name={"Course Unit"} id={"courseUnit"} place="Units" input={false} />
                                    <Formlayout name={"Meeting Days"} id={"meetingDay"} />
                                    <Formlayout name={"Meeting Times"} id={"meetingTimes"} />
                                    <Formlayout name={"Course Career"} id={"courseCareer"} />
                                    <Form.Group as={Row} controlId="online">
                                        <Col>
                                            <Form.Check type="checkbox" label="Show Online and Remote Classes Only" />
                                        </Col>
                                    </Form.Group>
                                    <Button block>Search</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DefaultLayout;