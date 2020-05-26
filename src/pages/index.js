import React, {Component} from 'react'
import Head from 'next/head'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Ini bagian head */}
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                {/* Ini bagian body */}
                <div className="container">
                    <header>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>

                        <h1 className="title">
                            Welcome to <a href="https://nextjs.org">Next.js!</a>
                        </h1>
                    </header>

                    <main>
                        <p className="description">
                            Get started by editing <code>pages/index.js</code>
                        </p>

                        <div className="grid">
                            <a href="https://nextjs.org/docs" className="card">
                                <h3>Documentation &rarr;</h3>
                                <p>Find in-depth information about Next.js features and API.</p>
                            </a>

                            <a href="https://nextjs.org/learn" className="card">
                                <h3>Learn &rarr;</h3>
                                <p>Learn about Next.js in an interactive course with quizzes!</p>
                            </a>

                            <a
                                href="https://github.com/zeit/next.js/tree/master/examples"
                                className="card"
                            >
                                <h3>Examples &rarr;</h3>
                                <p>Discover and deploy boilerplate example Next.js projects.</p>
                            </a>

                            <a
                                href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                                className="card"
                            >
                                <h3>Deploy &rarr;</h3>
                                <p>
                                    Instantly deploy your Next.js site to a public URL with Vercel.
                                </p>
                            </a>
                        </div>
                    </main>

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
                </div>
            </React.Fragment>
        )
    }
}

export default Home;
