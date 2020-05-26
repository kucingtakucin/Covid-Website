import React, {Component} from 'react'

class PetaRujukan extends Component {
    render() {
        return (
            <section id="peta-rujukan" className='d-flex align-items-center justify-content-center p-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-4 mb-5 font-weight-bold">Laboratorium & Rumah Sakit Rujukan <span id="covid-19">COVID-19</span></h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <iframe src="https://inacovid19.maps.arcgis.com/apps/webappviewer/index.html?id=d2595853cbc849ab9e9a790b4345ba38" frameBorder='0'/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default PetaRujukan
