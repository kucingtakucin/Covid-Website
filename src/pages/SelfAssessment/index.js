import React, {Component} from 'react'
import {AppFooter, AppHeader} from "../index";
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


                <AppHeader/>
                <main>
                    <h1>Self Assessment</h1>
                </main>
                <AppFooter/>
            </React.Fragment>
        )
    }
}

export default SelfAssessment
