import React, {Component} from 'react'

class PetaRujukan extends Component {
    render() {
        return (
            <section id="peta-rujukan" className='d-flex align-items-center justify-content-center'>
                {/* ------ Container ----- */}
                <div className="container">
                    {/* ----- Baris ke-1 ----- */}
                    <section className="row">
                        <section className="col-md-12 text-center"> {/* Ini untuk judul */}
                            <h1 className="display-4 mb-5 mt-5 font-weight-bold">Laboratorium & Rumah Sakit Rujukan <span id="covid-19">COVID-19</span></h1>
                        </section>
                    </section>
                    {/* ----- Akhir dari baris ke-1 ----- */}

                    {/* ----- Baris ke-2 ----- */}
                    <section className="row">
                        <section className="col-md-12">
                            <div className="card shadow rounded-lg mb-3">
                                <div className="card-body">
                                    <iframe src="https://inacovid19.maps.arcgis.com/apps/webappviewer/index.html?id=d2595853cbc849ab9e9a790b4345ba38" frameBorder='0'/>
                                </div>
                            </div>
                        </section>
                    </section>
                    {/* ----- Akhir dari baris ke-2 ----- */}
                </div>
                {/* ----- Akhir dari container ------ */}
            </section>
        )
    }
}

export default PetaRujukan
