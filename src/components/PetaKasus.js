import React, {Component} from 'react'

class PetaKasus extends Component {
    render() {
        return (
            <section id="peta-kasus" className="d-flex align-items-center justify-content-center">
                {/* ----- Container ----- */}
                <div className="container">
                    {/* ----- Baris ke-1 ------*/}
                    <section className="row">
                        <section className="col-md-12 text-center"> {/* Ini untuk judul */}
                            <h1 className="display-4 mb-5 mt-5 font-weight-bold"><span id="covid-19">COVID-19</span> Case Map</h1>
                        </section>
                    </section>
                    {/* ----- Akhir dari baris ke-1 -----*/}

                    {/* ----- Baris ke-2 ----- */}
                    <section className="row">
                        <section className="col-md-12">
                            <div className="card shadow rounded-lg mb-3">
                                <div className="card-body">
                                    <iframe src="https://inacovid19.maps.arcgis.com/apps/opsdashboard/index.html#/81a3572883014c0088a62e1f320c97e1" frameBorder='0'/>
                                </div>
                            </div>
                        </section>
                    </section>
                    {/* ----- Akhir dari baris ke-2 ----- */}
                </div>
                {/* ----- Akhir dari container ----- */}
            </section>
        )
    }
}

export default PetaKasus
