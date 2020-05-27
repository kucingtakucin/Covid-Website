import React, {Component} from 'react'
import Head from 'next/head'
import DataKasus from "../components/DataKasus"
import PetaKasus from "../components/PetaKasus"
import PetaRujukan from "../components/PetaRujukan"
import TentangKasus from "../components/TentangKasus"
import PencegahanKasus from "../components/PencegahanKasus";
import Link from "next/link";

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

function AppNavbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
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
    return (
        <header>
            {/* ----- Navbar ----- */}
            <AppNavbar/>
            {/* ----- Akhir dari Navbar ----- */}

            {/* ----- Container ----- */}
            <div className="container d-flex align-items-center justify-content-center">
                {/* ----- Baris ke-1 ----- */}
                <section className="row">
                    {/* ----- Kolom ke-1 ----- */}
                    <section className="col-md-6">      {/* Ini buat big title */}

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
                        <Link href='/CallCenter'>
                            <a>
                                <div className="card bg-light shadow rounded-lg mb-5">
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title text-center m-0">Call Center</h5>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </section>
                    <section className="col-md-4">
                        {/* ----- Card -----*/}
                        <Link href='/SelfAssessment'>
                            <a>
                                <div className="card bg-light shadow rounded-lg mb-5">
                                    <img src="..." className="card-img-top" alt="..."/>
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
                                    <img src="..." className="card-img-top" alt="..."/>
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
                                    <img src="..." className="card-img-top" alt="..."/>
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
                                    <img src="..." className="card-img-top" alt="..."/>
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
                                    <img src="..." className="card-img-top" alt="..."/>
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
