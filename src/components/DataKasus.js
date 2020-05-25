import React, {Component} from 'react'
import fetch from 'isomorphic-unfetch'

class DataKasus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            global: {},
            local: {},
        }

        this.getGlobalData = this.getGlobalData.bind(this)
        this.getLocalData = this.getLocalData.bind(this)
    }

    async componentDidMount() {
        try {
            await this.getGlobalData()
            await this.getLocalData()
        } catch (Error) {
            console.error(Error)
        }
    }

    getGlobalData(){
        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('covid-website-kita.now.sh/api/global')}`)
            .then(response => {
                if (!response.ok) throw new Error(response.statusText)
                return response.json()
            })
            .then(data => {
                this.setState({
                    global: JSON.parse(data.contents)
                })
            })
            .catch(error => {
                console.error(`Error: ${error}`)
            })
    }

    getLocalData(){
        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('covid-website-kita.now.sh/api/local')}`)
            .then(response => {
                if (!response.ok) throw new Error(response.statusText)
                return response.json()
            })
            .then(data => {
                this.setState({
                    local: JSON.parse(data.contents),
                })
            })
            .catch(error => {
                console.error(`Error: ${error}`)
            })
    }

    render() {
        return (
            <section id="data-kasus" className="d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-3 mb-5 font-weight-bold"><span id="covid-19">COVID-19</span> Global Data</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card bg-danger text-white shadow rounded-pill overflow-hidden mb-3">
                                <div className="card-header p-1 text-center"><h5 className="m-0">TOTAL POSITIF</h5>
                                </div>
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="..." className="card-img" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h2 className="card-title font-weight-bold mb-0">{this.state.global.global_positif}</h2>
                                            <p className="card-text">Orang</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card bg-success text-white shadow rounded-pill overflow-hidden mb-3">
                                <div className="card-header p-1 text-center"><h5 className="m-0">TOTAL SEMBUH</h5></div>
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="..." className="card-img" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h2 className="card-title font-weight-bold mb-0">{this.state.global.global_sembuh}</h2>
                                            <p className="card-text">Orang</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card bg-dark text-white shadow rounded-pill overflow-hidden mb-3">
                                <div className="card-header p-1 text-center"><h5 className="m-0">TOTAL MENINGGAL</h5>
                                </div>
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="..." className="card-img" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h2 className="card-title font-weight-bold mb-0">{this.state.global.global_meninggal}</h2>
                                            <p className="card-text">Orang</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card bg-info rounded-lg shadow mb-3">
                                <div className="card-header text-white d-flex flex-row justify-content-center">
                                    <h1 className="m-0 mr-3">INDONESIA</h1>
                                    <img src="/images/Bendera-Indonesia.png" style={{width: '50px'}}
                                         alt="Bendera Indonesia"/>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="card rounded-pill border-danger shadow mb-3">
                                                <div
                                                    className="card-body d-flex flex-column align-items-center justify-content-center">
                                                    <h3 className="card-title font-weight-bold text-danger mb-0">{this.state.local.local_positif}</h3>
                                                    <p className="card-text">POSITIF</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card rounded-pill border-warning shadow mb-3">
                                                <div
                                                    className="card-body d-flex flex-column align-items-center justify-content-center">
                                                    <h3 className="card-title font-weight-bold text-warning mb-0">{this.state.local.local_dirawat}</h3>
                                                    <p className="card-text">DALAM PERAWATAN</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card rounded-pill border-success shadow mb-3">
                                                <div
                                                    className="card-body d-flex flex-column align-items-center justify-content-center">
                                                    <h3 className="card-title font-weight-bold text-success mb-0">{this.state.local.local_sembuh}</h3>
                                                    <p className="card-text">SEMBUH</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card rounded-pill border-dark shadow mb-3">
                                                <div
                                                    className="card-body d-flex flex-column align-items-center justify-content-center">
                                                    <h3 className="card-title font-weight-bold text-dark mb-0">{this.state.local.local_meninggal}</h3>
                                                    <p className="card-text">MENINGGAL</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default DataKasus
