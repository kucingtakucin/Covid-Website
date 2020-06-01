import React, {Component} from 'react'
import {AppFooter, AppNavbar} from "../index"
import Head from "next/head"
import fetch from 'isomorphic-unfetch'
import {Card, CardBody, Col, Container, Row, Table} from "reactstrap"

class Radar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://data.covid19.go.id/public/api/prov.json?_=1590465793872')}`)
            .then(response => {
                if (response.ok) return response.json();
                throw new Error(response.statusText)
            })
            .then(result => {
                this.setState({
                    data: JSON.parse(result.contents).list_data
                })
                console.log(this.state.data)
            })
    }

    render() {
        return (
            <React.Fragment>
                {/* Ini bagian head */}
                <Head>
                    <title>Covid Website Kita | Radar</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <header className='radar'>
                    <AppNavbar/>
                </header>
                <main className='radar'>
                    <Container className="mt-5">
                        <Row>
                            <Col sm='12'>
                                <h1 className="display-4 mt-5 mb-5 font-weight-bold text-center text-white">Radar <span id="covid-19">COVID-19</span> di Indonesia</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm='12'>
                                <Card className="shadow mb-3">
                                    <CardBody>
                                        <iframe src="https://tiger.maps.arcgis.com/apps/opsdashboard/index.html#/088cb05292ed49319aaab70ab2705eca" frameBorder='0'/>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <h1 className="display-4 mt-5 mb-5 font-weight-bold text-center text-white">Kasus <span id="covid-19">COVID-19</span> Tiap Provinsi</h1>
                                <Card className="shadow mb-3 provinsi">
                                    <CardBody>
                                        <Table hover bordered responsive>
                                            <thead>
                                                <tr className='font-weight-bold'>
                                                    <th>No</th>
                                                    <th>PROVINSI</th>
                                                    <th>POSITIF</th>
                                                    <th>DIRAWAT</th>
                                                    <th>SEMBUH</th>
                                                    <th>MENINGGAL</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {this.state.data.map((element,index) => {
                                                return (
                                                    <tr key={element.key}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{element.key}</td>
                                                        <td>{element.jumlah_kasus}</td>
                                                        <td>{element.jumlah_dirawat}</td>
                                                        <td>{element.jumlah_sembuh}</td>
                                                        <td>{element.jumlah_meninggal}</td>
                                                    </tr>
                                                )
                                            })}
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </main>
                <AppFooter/>
            </React.Fragment>
        )
    }
}

export default Radar
