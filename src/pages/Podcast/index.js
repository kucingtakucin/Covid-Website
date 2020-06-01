import React, {Component} from 'react'
import {AppFooter, AppHeader, AppNavbar} from "../index";
import Head from "next/head";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

class Podcast extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Ini bagian head */}
                <Head>
                    <title>Covid Website Kita | Podcast</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <header className='podcast'>
                    <AppNavbar/>
                </header>
                <main className='podcast'>
                    <Container className="mt-5">
                        <Row>
                            <Col md='12'>
                                <h1 className="display-4 mt-5 mb-5 font-weight-bold text-center text-white">Podcast seputar pandemi <span id="covid-19">COVID-19</span></h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='12'>
                                <Card className="shadow rounded-lg ml-auto mr-auto bg-white mb-3">
                                    <CardHeader className="font-weight-bold">Episode 6 - Bedanya ODP dengan PDP?</CardHeader>
                                    <CardBody className="d-flex flex-column justify-content-center">
                                        <h5 className="card-title">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</h5>
                                        <audio src="#" controls/>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='12'>
                                <Card className="shadow rounded-lg ml-auto mr-auto bg-white mb-3">
                                    <CardHeader className="font-weight-bold">Episode 5 - Pencegahan COVID-19 di institusi pendidikan?</CardHeader>
                                    <CardBody className="d-flex flex-column justify-content-center">
                                        <h5 className="card-title">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</h5>
                                        <audio src="#" controls/>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='12'>
                                <Card className="shadow rounded-lg ml-auto mr-auto bg-white mb-3">
                                    <CardHeader className="font-weight-bold">Episode 4 - Apa yang bisa dilakukan oleh anak-anak?</CardHeader>
                                    <CardBody className="d-flex flex-column justify-content-center">
                                        <h5 className="card-title">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</h5>
                                        <audio src="#" controls/>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='12'>
                                <Card className="shadow rounded-lg ml-auto mr-auto bg-white mb-3">
                                    <CardHeader className="font-weight-bold">Episode 3 - Bagaimana cara membunuh COVID-19?</CardHeader>
                                    <CardBody className="d-flex flex-column justify-content-center">
                                        <h5 className="card-title">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</h5>
                                        <audio src="#" controls/>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='12'>
                                <Card className="shadow rounded-lg ml-auto mr-auto bg-white mb-3">
                                    <CardHeader className="font-weight-bold">Episode 2 - COVID-19 tidak bisa diremehkan?</CardHeader>
                                    <CardBody className="d-flex flex-column justify-content-center">
                                        <h5 className="card-title">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</h5>
                                        <audio src="#" controls/>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='12'>
                                <Card className="shadow rounded-lg ml-auto mr-auto bg-white mb-3">
                                    <CardHeader className="font-weight-bold">Episode 1 - Mengenal COVID-19</CardHeader>
                                    <CardBody className="d-flex flex-column justify-content-center">
                                        <h5 className="card-title">Some quick example text to build on the card title and make
                                            up the bulk of the card's content</h5>
                                        <audio src="#" controls/>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </main>
                <AppFooter/>
            </React.Fragment>
        )
    }
}

export default Podcast
