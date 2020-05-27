import React, {Component} from 'react'
import Head from 'next/head'
import DataKasus from "../components/DataKasus"
import PetaKasus from "../components/PetaKasus"
import PetaRujukan from "../components/PetaRujukan"
import TentangKasus from "../components/TentangKasus"

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

function AppHeader() {  /* Ini header */
    return (
        <header>
            {/* ----- Navbar ----- */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/images/react.png" width='30' height='30' alt="Navbar Brand"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto"> {/* Disini nanti tempat nambahin menu-menu di navbar nya*/}
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Beranda <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* ----- Akhir dari Navbar ----- */}

            {/* ----- Container ----- */}
            <div className="container d-flex align-items-center justify-content-center">
                {/* ----- Baris ke-1  ----- */}
                <section className="row">
                    {/* ----- Kolom ke-1 ----- */}
                    <section className="col-md-4">
                        <div className="card bg-light border-secondary shadow mb-5">
                            <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Call Center</h5>
                                </div>
                        </div>
                    </section>
                    <section className="col-md-4">
                        <div className="card bg-light border-secondary shadow mb-5">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Self Assessment</h5>
                            </div>
                        </div>
                    </section>
                    {/* ----- Akhir dari kolom ke-1 ----- */}

                    {/* ----- Kolom ke-2 ----- */}
                    <section className="col-md-4">
                        <div className="card bg-light border-secondary shadow mb-5">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Radar Covid-19</h5>
                            </div>
                        </div>
                    </section>
                    <section className="col-md-4">
                        <div className="card bg-light border-secondary shadow mb-5">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Donasi</h5>
                            </div>
                        </div>
                    </section>
                    {/* ----- Akhir dari kolom ke-2*/}

                    {/* ----- Kolom ke-3 ----- */}
                    <section className="col-md-4">
                        <div className="card bg-light border-secondary shadow mb-5">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Podcast Covid-19</h5>
                            </div>
                        </div>
                    </section>
                    <section className="col-md-4">
                        <div className="card bg-light border-secondary shadow mb-5">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Game Whack-A-Corona</h5>
                            </div>
                        </div>
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
                <DataKasus/>        {/* Bagian data kasus COVID-19 */}
                <PetaKasus/>        {/* Bagian peta kasus COVID-19 */}
                <PetaRujukan/>     {/* Bagian peta rujukan kasus COVID-19 */}
                <TentangKasus/>     {/* Bagian edukasi tentang COVID-19 */}
            </main>
        </React.Fragment>
    )
}

function AppFooter() {      /* Ini footer */
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
