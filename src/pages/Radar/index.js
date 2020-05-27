import React, {Component} from 'react'
import {AppFooter, AppHeader} from "../index";
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


                <AppHeader/>
                <main>
                    <h1>Radar</h1>
                </main>
                <AppFooter/>
            </React.Fragment>
        )
    }
}

export default Radar
