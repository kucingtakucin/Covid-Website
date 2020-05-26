import React, {Component} from 'react'

class PetaKasus extends Component {
    render() {
        return (
            <section id="peta-kasus" className="d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-3 mb-5 font-weight-bold"><span id="covid-19">COVID-19</span> Case Map</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <iframe src="https://experience.arcgis.com/experience/57237ebe9c5b4b1caa1b93e79c920338" frameBorder='0'/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default PetaKasus
