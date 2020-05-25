import React, {Component} from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import DataKasus from "../components/DataKasus";

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

function AppHeader() {
    return (
        <header>
            <h1 className="title">
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>
        </header>
    )
}

function AppMain() {
    return (
        <React.Fragment>
            <main>
                <DataKasus/>    {/* Bagian data kasus COVID-19 */}
            </main>
        </React.Fragment>
    )
}

function AppFooter() {
    return (
        <footer>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <img src="/vercel.svg" alt="Vercel Logo" className="logo"/>
            </a>
        </footer>
    )
}

export default Home;
