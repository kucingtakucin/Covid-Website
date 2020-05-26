import React, {Component} from 'react'

class PetaKasus extends Component {
    render() {
        return (
            <section id="peta-kasus" className="d-flex align-items-center justify-content-center p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-4 mb-5 font-weight-bold"><span id="covid-19">COVID-19</span> Case Map</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <iframe src="https://inacovid19.maps.arcgis.com/apps/opsdashboard/index.html#/81a3572883014c0088a62e1f320c97e1" frameBorder='0'/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default PetaKasus
