import React, {Component} from 'react'
import {AppFooter, AppHeader} from "../index";
import Head from "next/head";

class CallCenter extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Ini bagian head */}
                <Head>
                    <title>Covid Website Kita | Call Center</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <AppHeader/>
                <main>
                    <div className="container">
                        <section className="row">
                            <section className="col-md-12">
                                <h1 className="display-4 mb-5 font-weight-bold text-center"><span id="covid-19">COVID-19</span> Hotline</h1>
                            </section>
                        </section>
                        <section className="row text-center">
                            <section className="col-md-6">
                                <div className="card mb-5">
                                    <div className="card-body">
                                        <h3 className="card-title font-weight-bold">Kementerian Kesehatan Republik Indonesia</h3>
                                        <h4 className="card-subtitle"><span className="text-muted">Hotline 1</span> : 119</h4>
                                    </div>
                                </div>
                            </section>
                            <section className="col-md-6">
                                <div className="card mb-5">
                                    <div className="card-body">
                                        <h3 className="card-title font-weight-bold">Pemerintah Provinsi Jawa Tengah</h3>
                                        <h4 className="card-subtitle"><span className="text-muted">Hotline 2</span> : (024) 3580713</h4>
                                    </div>
                                </div>
                            </section>
                            <section className="col-md-6">
                                <div className="card mb-5">
                                    <div className="card-body">
                                        <h3 className="card-title font-weight-bold">Dinas Kesehatan Provinsi Jawa Tengah</h3>
                                        <h4 className="card-subtitle"><span className="text-muted">Hotline 3</span> : 1500 649</h4>
                                    </div>
                                </div>
                            </section>
                            <section className="col-md-6">
                                <div className="card mb-5">
                                    <div className="card-body">
                                        <h3 className="card-title font-weight-bold">Pemerintah Provinsi Jawa Timur</h3>
                                        <h4 className="card-subtitle"><span className="text-muted">Hotline 4</span> : 1500 117</h4>
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

export default CallCenter
