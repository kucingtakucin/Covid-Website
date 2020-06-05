/*
 * Copyright (c) 2020.
 * @author (Sari Eka Nur Marifah, Nandhika Kurniasari, Adam Arthur Faizal)
 * @version (5 Juni 2020)
 */

import React, {Component, useState} from 'react'
import Link from "next/link";
import Head from 'next/head'
import {
    Button, Card, CardBody, CardImg, CardTitle, Col, Collapse, Container,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Nav,
    Navbar,
    NavbarBrand, NavbarText,
    NavbarToggler,
    NavItem, NavLink, Row
} from "reactstrap";
import DataKasus from "../components/DataKasus"
import PetaKasus from "../components/PetaKasus"
import PetaRujukan from "../components/PetaRujukan"
import TentangKasus from "../components/TentangKasus"
import PencegahanKasus from "../components/PencegahanKasus";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Ini bagian head */}
                <Head>
                    <title>Covid Website Kita</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                {/* Ini bagian body */}
                <AppHeader/>    {/* header */}
                <AppMain/>      {/* main */}
                <AppFooter/>    {/* footer */}
            </React.Fragment>
        )
    }
}

export function AppNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar color="white" light expand="md" fixed='top' className='shadow'>
            <Container>
                <Link href='/'>
                    <NavbarBrand>
                        <img src="/images/react.png" width='35' height='30' alt="Navbar Brand"/>
                    </NavbarBrand>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link href="/">
                                <NavLink>Beranda</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/Radar">
                                <NavLink>Peta</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/Donasi">
                                <NavLink>Donasi</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/Podcast">
                                <NavLink>Podcast</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/Game">
                                <NavLink>Game</NavLink>
                            </Link>
                        </NavItem>
                    </Nav>
                    <NavbarText>React.Js version : {React.version}</NavbarText>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export function AppHeader() {  /* Ini header */
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <header>
            {/* ----- Navbar ----- */}
            <AppNavbar/>
            {/* ----- Akhir dari Navbar ----- */}

            {/* ----- Container ----- */}
            <Container className="d-flex flex-column align-items-center justify-content-center">
                {/* ----- Baris ke-1 ----- */}
                <Row className="mb-3">
                    {/* ----- Kolom ke-1 ----- */}
                    <Col md='6'>      {/* Ini buat big title */}
                        <h1 className='text-white'>Covid Website Kita</h1>
                    </Col>
                    {/* ----- Akhir dari kolom ke-1 ----- */}

                    {/* ----- Kolom ke-2 ----- */}
                    <Col md='6'>      {/* Ini buat gambar karakter & virus corona */}

                    </Col>
                    {/* ----- Akhir dari kolom ke-2 ----- */}
                </Row>
                {/* ----- Akhir dari baris ke-1 -----*/}

                {/* ----- Baris ke-2  ----- */}
                <Row>
                    {/* ----- Kolom ke-1 ----- */}
                    <Col md='4'>
                        {/* ----- Card -----*/}
                            <a onClick={toggle}>
                                <Card className='bg-white shadow rounded-lg mb-5'>
                                    <CardImg top width="100%" src="/images/emergency-call.svg" className='ml-auto mr-auto mt-2' alt="Call Center" />
                                    <CardBody>
                                        <CardTitle className='m-0'><h5 className='text-center m-0'>Call Center</h5></CardTitle>
                                    </CardBody>
                                </Card>
                            </a>
                        <Modal isOpen={modal} toggle={toggle}>
                            <ModalHeader toggle={toggle}><span id="covid-19">COVID-19</span> Hotline</ModalHeader>
                            <ModalBody>
                                Call center Kementerian Kesehatan RI <span className="font-weight-bold">119</span>. Kami menerima aduan keluhan seputar pandemi Covid-19 dan layanan emergency lain seperti Bencana Alam dan Permohonan Informasi
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={toggle}>Oke</Button>
                            </ModalFooter>
                        </Modal>
                    </Col>
                    <Col md='4'>
                        {/* ----- Card -----*/}
                        <Link href='/SelfAssessment'>
                            <a>
                                <Card className='bg-white shadow rounded-lg mb-5'>
                                    <CardImg top width="100%" src="/images/medical-record.svg" className='ml-auto mr-auto mt-2' alt="Self Assessment" />
                                    <CardBody>
                                        <CardTitle className='m-0'><h5 className='text-center m-0'>Self Assessment</h5></CardTitle>
                                    </CardBody>
                                </Card>
                            </a>
                        </Link>
                    </Col>
                    {/* ----- Akhir dari kolom ke-1 ----- */}

                    {/* ----- Kolom ke-2 ----- */}
                    <Col md='4'>
                        {/* ----- Card ----- */}
                        <Link href='/Radar'>
                            <a>
                                <Card className='bg-white shadow rounded-lg mb-5'>
                                    <CardImg top width="100%" src="/images/placeholder.svg" className='ml-auto mr-auto mt-2' alt="Radar Covid-19" />
                                    <CardBody>
                                        <CardTitle className='m-0'><h5 className='text-center m-0'>Radar</h5></CardTitle>
                                    </CardBody>
                                </Card>
                            </a>
                        </Link>
                    </Col>
                    <Col md='4'>
                        {/* ----- Card ----- */}
                        <Link href='/Donasi'>
                            <a>
                                <Card className='bg-white shadow rounded-lg mb-5'>
                                    <CardImg top width="100%" src="/images/return-of-investment.svg" className='ml-auto mr-auto mt-2' alt="Donasi" />
                                    <CardBody>
                                        <CardTitle className='m-0'><h5 className='text-center m-0'>Donasi</h5></CardTitle>
                                    </CardBody>
                                </Card>
                            </a>
                        </Link>
                    </Col>
                    {/* ----- Akhir dari kolom ke-2*/}

                    {/* ----- Kolom ke-3 ----- */}
                    <Col md='4'>
                        {/* ----- Card ----- */}
                        <Link href='/Podcast'>
                            <a>
                                <Card className='bg-white shadow rounded-lg mb-5'>
                                    <CardImg top width="100%" src="/images/headphones.svg" className='ml-auto mr-auto mt-2' alt="Podcast" />
                                    <CardBody>
                                        <CardTitle className='m-0'><h5 className='text-center m-0'>Podcast</h5></CardTitle>
                                    </CardBody>
                                </Card>
                            </a>
                        </Link>
                    </Col>
                    <Col md='4'>
                        {/* ----- Card ----- */}
                        <Link href='/Game'>
                            <a>
                                <Card className='bg-white shadow rounded-lg mb-5'>
                                    <CardImg top width="100%" src="/images/focus.svg" className='ml-auto mr-auto mt-2' alt="Game" />
                                    <CardBody>
                                        <CardTitle className='m-0'><h5 className='text-center m-0'>Game</h5></CardTitle>
                                    </CardBody>
                                </Card>
                            </a>
                        </Link>
                    </Col>
                    {/* ----- Akhir dari kolom ke-3 ----- */}

                </Row>
                {/* ----- Akhir dari Baris ke-1 ----- */}

            </Container>
            {/* ----- Akhir dari Container ----- */}
        </header>
    )
}

function AppMain() {    /* Ini main */
    return (
        <React.Fragment>
            <main>
                <DataKasus/>        {/* Bagian sebaran data kasus COVID-19 */}
                <PetaKasus/>        {/* Bagian peta kasus COVID-19 */}
                <PetaRujukan/>      {/* Bagian peta rujukan kasus COVID-19 */}
                <TentangKasus/>     {/* Bagian edukasi tentang COVID-19 */}
                <PencegahanKasus/>  {/* Bagian edukasi pencegahan COVID-19 */}
            </main>
        </React.Fragment>
    )
}

export function AppFooter() {      /* Ini footer */
    return (
        <footer>
            <Container className="d-flex align-items-center justify-content-center">
                <a>
                    Powered by{' '}
                    Covid Website Kita 2020
                </a>
            </Container>
        </footer>
    )
}

export default Home;
