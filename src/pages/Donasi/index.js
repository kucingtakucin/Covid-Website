/*
 * Copyright (c) 2020.
 * @author (Sari Eka Nur Marifah, Nandhika Kurniasari, Adam Arthur Faizal)
 * @version (5 Juni 2020)
 */

import React, {Component} from 'react'
import {AppFooter, AppNavbar} from "../index";
import Head from "next/head";
import {Button, Card, CardBody, CardImg, Col, Row} from "reactstrap";

class Donasi extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Ini bagian head */}
                <Head>
                    <title>Covid Website Kita | Donasi</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <header className='donasi'>
                    <AppNavbar/>
                </header>
                <main className='donasi'>
                    <div className="container mt-5">
                        <Row>
                            <Col md='12'>
                                <h1 className="display-4 mt-5 mb-5 font-weight-bold text-center text-white">Donasi untuk Pencegahan <span id="covid-19">COVID-19</span></h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='12'>
                                <Card className="ml-auto mr-auto bg-white rounded-lg shadow mb-3">
                                    <Row className="no-gutters">
                                        <Col md='4' className="d-flex justify-content-center">
                                            <CardImg src="/images/masker.svg" className="mt-3 mb-3" alt="Masker"/>
                                        </Col>
                                        <Col md='8'>
                                            <CardBody>
                                                <h3 className="card-title font-weight-bold">Donasi Masker</h3>
                                                <Button color='info' size='lg'>Donasi Sekarang</Button>
                                            </CardBody>
                                        </Col>
                                    </Row>
                                </Card>
                                <Card className="ml-auto mr-auto bg-white rounded-lg shadow mb-3">
                                    <Row className="no-gutters">
                                        <Col md='4' className="d-flex justify-content-center">
                                            <CardImg src="/images/sanitizer.svg" className="mt-3 mb-3" alt="Hand-Sanitizer"/>
                                        </Col>
                                        <Col md='8'>
                                            <CardBody>
                                                <h3 className="card-title font-weight-bold">Donasi Hand-Sanitizer</h3>
                                                <Button color='info' size='lg'>Donasi Sekarang</Button>
                                            </CardBody>
                                        </Col>
                                    </Row>
                                </Card>
                                <Card className="ml-auto mr-auto bg-white rounded-lg shadow mb-3">
                                    <Row className="no-gutters">
                                        <Col md='4' className="d-flex justify-content-center">
                                            <CardImg src="/images/beauty.svg" className="mt-3 mb-3" alt="Desinfektan"/>
                                        </Col>
                                        <Col md='8'>
                                            <CardBody>
                                                <h3 className="card-title font-weight-bold">Donasi Desinfektan</h3>
                                                <Button color='info' size='lg'>Donasi Sekarang</Button>
                                            </CardBody>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </main>
                <AppFooter/>
            </React.Fragment>
        )
    }
}

export default Donasi
