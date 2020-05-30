import React, {Component} from 'react'
import {AppFooter, AppNavbar} from "../index"
import Head from "next/head"

class Game extends Component {
    constructor(props) {
        super(props)
        this.startGame = this.startGame.bind(this)
    }

    componentDidMount() {
        this.holes = document.getElementsByClassName('hole')
        this.scoreBoard = document.getElementById('score')
        this.moles = document.getElementsByClassName('mole')
        this.lastHole = null
        this.timeUp = false
        this.score = 0
        Array.from(this.moles).forEach(mole => {
            mole.addEventListener('click', this.bonk)
        })
        document.body.addEventListener('click', function(event) {
            if (event.target.classList.contains('mole')) {
                this.parentNode.classList.remove('up')
            }
        })
    }

    randomTime(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }

    randomHole(holes) {
        const idx = Math.floor(Math.random() * holes.length)
        const hole = holes[idx]
        if (hole === this.lastHole) {
            console.log('Ah nah thats the same one bud')
            return this.randomHole(holes)
        }
        this.lastHole = hole
        return hole
    }

    peep() {
        const time = this.randomTime(200, 1000)
        const hole = this.randomHole(this.holes)
        hole.classList.add('up')
        setTimeout(() => {
            hole.classList.remove('up')
            if (!this.timeUp) this.peep()
        }, time)
    }

    startGame() {
        this.scoreBoard.textContent = 0
        this.timeUp = false
        this.score = 0
        this.peep()
        setTimeout(() => this.timeUp = true, 10000)
    }

    bonk = (e) => {
        if (!e.isTrusted) return // cheater!
        this.score++
        this.scoreBoard.textContent = this.score
    }

    render() {
        return (
            <React.Fragment>
                {/* Ini bagian head */}
                <Head>
                    <title>Covid Website Kita | Game</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <header className='game'>
                    <AppNavbar/>
                </header>
                <main className='game'>
                    <div className="container mt-5">
                        <section className="row">
                            <section className="col-sm-12 d-flex flex-column justify-content-center align-items-center">
                                <h1 className='mt-5 text-white text-center'>Whack-a-Corona! <span id="score">0</span></h1>
                                <button className='btn btn-lg btn-success mt-3' onClick={this.startGame}>Start!</button>
                            </section>
                        </section>

                        <div className="game-area">
                            <div className="hole hole1">
                                <div className="mole"/>
                            </div>
                            <div className="hole hole2">
                                <div className="mole"/>
                            </div>
                            <div className="hole hole3">
                                <div className="mole"/>
                            </div>
                            <div className="hole hole4">
                                <div className="mole"/>
                            </div>
                            <div className="hole hole5">
                                <div className="mole"/>
                            </div>
                            <div className="hole hole6">
                                <div className="mole"/>
                            </div>
                        </div>
                    </div>
                </main>
                <AppFooter/>
            </React.Fragment>
        )
    }
}

export default Game
