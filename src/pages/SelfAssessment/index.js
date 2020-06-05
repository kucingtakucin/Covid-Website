/*
 * Copyright (c) 2020.
 * @author (Sari Eka Nur Marifah, Nandhika Kurniasari, Adam Arthur Faizal)
 * @version (5 Juni 2020)
 */

import React, {Component} from 'react'
import {AppFooter, AppHeader, AppNavbar} from "../index";
import Head from "next/head";

class SelfAssessment extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Ini bagian head */}
                <Head>
                    <title>Covid Website Kita | Self Assessment</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <header className='self-assessment'>
                    <AppNavbar/>
                </header>
                <main className='self-assessment'>
                    <div className="container mt-5">
                        <section className="row">
                            <section className="col-md-12">
                                <h1 className="display-4 mt-5 mb-5 font-weight-bold text-center text-white">Self Assessment <span id="covid-19">COVID-19</span></h1>
                            </section>
                        </section>
                        <section className="row">
                            <section className="col-md-12 text-center">
                                <div className="card shadow mb-3">
                                    <img src="/images/doctor.svg" className="card-img-top ml-auto mr-auto mt-3" alt="Self Assessment"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Self assesment ini adalah aplikasi sederhana yang bisa membantu menentukan apakah kamu sehat-sehat saja atau ada gejala yang memerlukan penilaian, pemeriksaan dan pengujian lebih lanjut untuk COVID-19. Aplikasi ini berisikan beberapa daftar pertanyaan
                                            untuk mengecek kondisi fisikmu</h5>
                                        <button className="btn btn-lg btn-info shadow">Cek Kondisimu Sekarang</button>
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

export default SelfAssessment
