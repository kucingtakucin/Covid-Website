import React, {Component} from 'react'
import {AppFooter, AppHeader, AppNavbar} from "../index";
import Head from "next/head";

class Radar extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Ini bagian head */}
                <Head>
                    <title>Covid Website Kita | Radar</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <header className='radar'>
                    <AppNavbar/>
                </header>
                <main className='radar'>
                    <div className="container mt-5">
                        <section className="row">
                            <section className="col-md-12">
                                <h1 className="display-4 mt-5 mb-5 font-weight-bold text-center text-white">Radar <span id="covid-19">COVID-19</span> di Indonesia</h1>
                            </section>
                        </section>
                        <section className="row">
                            <section className="col-md-12">
                                <div className="card shadow mb-3">
                                    <div className="card-body">
                                        <iframe src="https://tiger.maps.arcgis.com/apps/opsdashboard/index.html#/088cb05292ed49319aaab70ab2705eca" frameBorder='0'/>
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

export default Radar
