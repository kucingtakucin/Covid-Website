import React, {Component, useState} from 'react'
import Link from "next/link";
import Head from 'next/head'
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
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
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow">
            <div className="container-fluid">
                <Link href='/'>
                    <a className="navbar-brand">
                        <img src="/images/react.png" width='30' height='30' alt="Navbar Brand"/>
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto"> {/* Disini nanti tempat nambahin menu-menu di navbar nya*/}
                        <li className="nav-item active">
                            <Link href='/'>
                                <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/Link'>
                                <a className="nav-link" href="#">Link</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
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
            <div className="container d-flex flex-column align-items-center justify-content-center">
                {/* ----- Baris ke-1 ----- */}
                <section className="row mb-3">
                    {/* ----- Kolom ke-1 ----- */}
                    <section className="col-md-6">      {/* Ini buat big title */}
                        <h1 className='text-white'>Covid Website Kita</h1>
                    </section>
                    {/* ----- Akhir dari kolom ke-1 ----- */}

                    {/* ----- Kolom ke-2 ----- */}
                    <section className="col-md-6">      {/* Ini buat gambar karakter & virus corona */}

                    </section>
                    {/* ----- Akhir dari kolom ke-2 ----- */}
                </section>
                {/* ----- Akhir dari baris ke-1 -----*/}

                {/* ----- Baris ke-2  ----- */}
                <section className="row">
                    {/* ----- Kolom ke-1 ----- */}
                    <section className="col-md-4">
                        {/* ----- Card -----*/}
                            <a onClick={toggle}>
                                <div className="card bg-light shadow rounded-lg mb-5">
                                    <img src="/images/emergency-call.svg" className="card-img-top ml-auto mr-auto mt-2" alt="Call Center"/>
                                    <div className="card-body">
                                        <h5 className="card-title text-center m-0">Call Center</h5>
                                    </div>
                                </div>
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
                    </section>
                    <section className="col-md-4">
                        {/* ----- Card -----*/}
                        <Link href='/SelfAssessment'>
                            <a>
                                <div className="card bg-light shadow rounded-lg mb-5">
                                    <img src="/images/medical-record.svg" className="card-img-top ml-auto mr-auto mt-2" alt="Self Assessment"/>
                                    <div className="card-body">
                                        <h5 className="card-title text-center m-0">Self Assessment</h5>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </section>
                    {/* ----- Akhir dari kolom ke-1 ----- */}

                    {/* ----- Kolom ke-2 ----- */}
                    <section className="col-md-4">
                        {/* ----- Card ----- */}
                        <Link href='/Radar'>
                            <a>
                                <div className="card bg-light shadow rounded-lg mb-5">
                                    <img src="/images/placeholder.svg" className="card-img-top ml-auto mr-auto mt-2" alt="Radar"/>
                                    <div className="card-body">
                                        <h5 className="card-title text-center m-0">Radar Covid-19</h5>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </section>
                    <section className="col-md-4">
                        {/* ----- Card ----- */}
                        <Link href='/Donasi'>
                            <a>
                                <div className="card bg-light shadow rounded-lg mb-5">
                                    <img src="/images/return-of-investment.svg" className="card-img-top ml-auto mr-auto mt-2" alt="Donasi"/>
                                    <div className="card-body">
                                        <h5 className="card-title text-center m-0">Donasi</h5>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </section>
                    {/* ----- Akhir dari kolom ke-2*/}

                    {/* ----- Kolom ke-3 ----- */}
                    <section className="col-md-4">
                        {/* ----- Card ----- */}
                        <Link href='/Podcast'>
                            <a>
                                <div className="card bg-light shadow rounded-lg mb-5">
                                    <img src="/images/headphones.svg" className="card-img-top ml-auto mr-auto mt-2" alt="Podcast"/>
                                    <div className="card-body">
                                        <h5 className="card-title text-center m-0">Podcast Covid-19</h5>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </section>
                    <section className="col-md-4">
                        {/* ----- Card ----- */}
                        <Link href='/Game'>
                            <a>
                                <div className="card bg-light shadow rounded-lg mb-5">
                                    <img src="/images/focus.svg" className="card-img-top ml-auto mr-auto mt-2" alt="Game"/>
                                    <div className="card-body">
                                        <h5 className="card-title text-center m-0">Game Whack-A-Corona</h5>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </section>
                    {/* ----- Akhir dari kolom ke-3 ----- */}

                </section>
                {/* ----- Akhir dari Baris ke-1 ----- */}

            </div>
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
            <div className="container d-flex align-items-center justify-content-center">
                <a>
                    Powered by{' '}
                    Covid Website Kita 2020
                </a>
            </div>
        </footer>
    )
}

export default Home;
