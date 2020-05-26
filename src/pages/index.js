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

function AppHeader() {
    return (
        <header>
            <div className="container d-flex align-items-center justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card bg-light border-secondary shadow mb-5">
                            <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-light border-secondary shadow mb-5">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-light border-secondary shadow mb-5">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-light border-secondary shadow mb-5">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-light border-secondary shadow mb-5">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-light border-secondary shadow mb-5">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

function AppMain() {
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

function AppFooter() {
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
