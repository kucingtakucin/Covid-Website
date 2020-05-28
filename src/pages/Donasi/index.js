import React, {Component} from 'react'
import {AppFooter, AppNavbar} from "../index";
import Head from "next/head";

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
                        <section className="row">
                            <section className="col-md-12">
                                <h1 className="display-4 mt-5 mb-5 font-weight-bold text-center text-white">Donasi untuk Pencegahan <span id="covid-19">COVID-19</span></h1>
                            </section>
                        </section>
                        <section className="row">
                            <section className="col-md-12">
                                <div className="card shadow mb-3">
                                    <div className="row no-gutters">
                                        <div className="col-md-4 d-flex justify-content-center">
                                            <img src="/images/masker.svg" className="card-img mt-3 mb-3" alt="Masker"/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h3 className="card-title font-weight-bold">Donasi Masker</h3>
                                                <button className="btn btn-lg btn-info">Donasi Sekarang</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow mb-3">
                                    <div className="row no-gutters">
                                        <div className="col-md-4 d-flex justify-content-center">
                                            <img src="/images/sanitizer.svg" className="card-img mt-3 mb-3" alt="Hand Sanitizer"/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h3 className="card-title font-weight-bold">Donasi Hand-Sanitizer</h3>
                                                <button className="btn btn-lg btn-info">Donasi Sekarang</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow mb-3">
                                    <div className="row no-gutters">
                                        <div className="col-md-4 d-flex justify-content-center">
                                            <img src="/images/beauty.svg" className="card-img mt-3 mb-3" alt="Desinfektan"/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h3 className="card-title font-weight-bold">Donasi Desinfektan</h3>
                                                <button className="btn btn-lg btn-info">Donasi Sekarang</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </div>
                </main>
                <AppFooter/>
            </React.Fragment>
        )
    }
}

export default Donasi
