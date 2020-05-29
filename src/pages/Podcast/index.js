import React, {Component} from 'react'
import {AppFooter, AppHeader, AppNavbar} from "../index";
import Head from "next/head";

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
                    <div className="container mt-5">
                        <section className="row">
                            <section className="col-md-12">
                                <h1 className="display-4 mt-5 mb-5 font-weight-bold text-center text-white">Podcast seputar pandemi <span id="covid-19">COVID-19</span></h1>
                            </section>
                        </section>
                        <section className="row">
                            <section className="col-md-12">
                                <div className="card shadow ml-auto mr-auto bg-light mb-3">
                                    <div className="card-header font-weight-bold">Episode 6 - Bedanya ODP dengan PDP?</div>
                                    <div className="card-body d-flex flex-column justify-content-center">
                                        <h5 className="card-title">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</h5>
                                        <audio src="#" controls/>
                                    </div>
                                </div>
                            </section>
                            <section className="col-md-12">
                                <div className="card shadow ml-auto mr-auto bg-light mb-3">
                                    <div className="card-header font-weight-bold">Episode 5 - Pencegahan COVID-19 di institusi pendidikan?</div>
                                    <div className="card-body d-flex flex-column justify-content-center">
                                        <h5 className="card-title">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</h5>
                                        <audio src="#" controls/>
                                    </div>
                                </div>
                            </section>
                            <section className="col-md-12">
                                <div className="card shadow ml-auto mr-auto bg-light mb-3">
                                    <div className="card-header font-weight-bold">Episode 4 - Apa yang bisa dilakukan oleh anak-anak?</div>
                                    <div className="card-body d-flex flex-column justify-content-center">
                                        <h5 className="card-title">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</h5>
                                        <audio src="#" controls/>
                                    </div>
                                </div>
                            </section>
                            <section className="col-md-12">
                                <div className="card shadow ml-auto mr-auto bg-light mb-3">
                                    <div className="card-header font-weight-bold">Episode 3 - Bagaimana cara membunuh COVID-19?</div>
                                    <div className="card-body d-flex flex-column justify-content-center">
                                        <h5 className="card-title">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</h5>
                                        <audio src="#" controls/>
                                    </div>
                                </div>
                            </section>
                            <section className="col-md-12">
                                <div className="card shadow ml-auto mr-auto bg-light mb-3">
                                    <div className="card-header font-weight-bold">Episode 2 - COVID-19 tidak bisa diremehkan?</div>
                                    <div className="card-body d-flex flex-column justify-content-center">
                                        <h5 className="card-title">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</h5>
                                        <audio src="#" controls/>
                                    </div>
                                </div>
                            </section>
                            <section className="col-md-12">
                                <div className="card shadow ml-auto mr-auto bg-light mb-3">
                                    <div className="card-header font-weight-bold">Episode 1 - Mengenal COVID-19</div>
                                    <div className="card-body d-flex flex-column justify-content-center">
                                        <h5 className="card-title">Some quick example text to build on the card title and make
                                            up the bulk of the card's content</h5>
                                        <audio src="#" controls/>
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

export default Podcast
