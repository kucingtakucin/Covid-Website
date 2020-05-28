import React, {Component} from 'react'
import {AppFooter, AppHeader} from "../index";
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


                <AppHeader/>
                <main>
                    <div className="container">
                        <section className="row">
                            <section className="col-md-12">
                                <h1 className="display-4 mb-5 font-weight-bold text-center">Donasi</h1>
                            </section>
                        </section>
                        <section className="row">
                            <section className="col-md-12">
                                <div className="card mb-3">
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Donasi Masker</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
                                        <button className="btn btn-info btn-lg">Donasi Sekarang</button>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <img src="..." className="card-img-top" alt="..."/>
                                        <h5 className="card-title">Donasi Hand-Sanitizer</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit longer.</p>
                                        <button className="btn btn-info btn-lg">Donasi Sekarang</button>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <img src="..." className="card-img-top" alt="..."/>
                                        <h5 className="card-title">Donasi Desinfektan</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit longer.</p>
                                        <button className="btn btn-info btn-lg">Donasi Sekarang</button>
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
