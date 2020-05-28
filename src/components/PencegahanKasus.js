import React, {Component} from 'react'

class PencegahanKasus extends Component {
    render() {
        return (
            <section id="pencegahan-kasus" className="d-flex align-items-center justify-content-center">
                <div className="container">
                    <section className="row">
                        <section className="col-md-12">
                            <section className="col-md-12"> {/* Ini untuk judul */}
                                <h1 className="display-4 mb-5 mt-5 font-weight-bold text-center">Pencegahan <span id="covid-19">COVID-19</span></h1>
                            </section>
                        </section>
                    </section>
                    <section className="row">
                        <section className="col-md-12">
                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="..." className="card-img" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h4 className="card-title">Cek Kondisimu: <span className="font-weight-bold">Self Assessment <span id="covid-19">COVID-19</span></span></h4>
                                            <p className="card-text">Self Assessment COVID-19 adalah salah satu cara untuk mengetahi apakah Anda memiliki gejala yang memerlukan pemeriksaan dan pengujian lebih lanjut mengenai COVID-19 atau tidak.</p>
                                            <button className="btn btn-info btn-lg">Deteksi Sekarang</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </section>
        )
    }
}

export default PencegahanKasus
