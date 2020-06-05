/*
 * Copyright (c) 2020.
 * @author (Sari Eka Nur Marifah, Nandhika Kurniasari, Adam Arthur Faizal)
 * @version (5 Juni 2020)
 */

import React, {Component} from 'react'

class TentangKasus extends Component {
    render() {
        return (
            <section id="tentang-kasus" className='d-flex align-items-center justify-content-center'>
                {/* ----- Container ----- */}
                <div className="container">
                    {/* ----- Baris ke-1 ----- */}
                    <section className="row">
                        <section className="col-md-12"> {/* Ini untuk judul */}
                            <h1 className="display-4 mb-5 mt-5 font-weight-bold text-center">Tentang <span id="covid-19">COVID-19</span></h1>
                        </section>
                    </section>
                    {/* ----- Akhir dari baris ke-1 ----- */}

                    {/* ----- Baris ke-2 ----- */}
                    <section className="row">
                        <section className="col-md-12">
                            {/* ----- Baris ke-1 didalam baris ke-2 -----*/}
                            <section className="row">
                                <section className="col-md-6 border-right">
                                    <h1 className='border-bottom'>Apa itu <span id="covid-19">Covid-19?</span></h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deleniti dolores itaque iusto maiores odio perspiciatis qui sit sunt, tenetur. Beatae dicta distinctio eaque et eum facere id incidunt itaque iure iusto maiores maxime molestias natus, nostrum nulla odio, repellat sit suscipit temporibus vero voluptas voluptate voluptatibus! Ab asperiores cupiditate delectus dicta dolores ducimus, et fugiat modi odit porro possimus quasi sed unde. Aperiam asperiores at aut autem deleniti deserunt ea harum impedit ipsam sed.</p>
                                </section>
                                <section className="col-md-6">
                                    <img src='/vercel.svg' alt="Virus Corona"/>
                                </section>
                            </section>
                            {/* ----- Akhir dari baris ke-1 didalam baris ke-2 -----*/}

                            {/* ----- Baris ke-2 didalam baris ke-2  -----*/}
                            <section className="row">
                                <section className="col-md-6">
                                    <img src='/vercel.svg' alt="Virus Corona"/>
                                </section>
                                <section className="col-md-6 border-right">
                                    <h1 className='border-bottom'>Bagaimana Gejala <span id="covid-19">Covid-19?</span></h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deleniti dolores itaque iusto maiores odio perspiciatis qui sit sunt, tenetur. Beatae dicta distinctio eaque et eum facere id incidunt itaque iure iusto maiores maxime molestias natus, nostrum nulla odio, repellat sit suscipit temporibus vero voluptas voluptate voluptatibus! Ab asperiores cupiditate delectus dicta dolores ducimus, et fugiat modi odit porro possimus quasi sed unde. Aperiam asperiores at aut autem deleniti deserunt ea harum impedit ipsam sed.</p>
                                </section>
                            </section>
                            {/* ----- Akhir dari baris ke-2 didalam baris ke-2 ----- */}

                            {/* ----- Baris ke-3 didalam baris ke-2 ----- */}
                            <section className="row">
                                <section className="col-md-6 border-right">
                                    <h1 className='border-bottom'>Bagaimana <span id="covid-19">Covid-19</span> Menular?</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deleniti dolores itaque iusto maiores odio perspiciatis qui sit sunt, tenetur. Beatae dicta distinctio eaque et eum facere id incidunt itaque iure iusto maiores maxime molestias natus, nostrum nulla odio, repellat sit suscipit temporibus vero voluptas voluptate voluptatibus! Ab asperiores cupiditate delectus dicta dolores ducimus, et fugiat modi odit porro possimus quasi sed unde. Aperiam asperiores at aut autem deleniti deserunt ea harum impedit ipsam sed.</p>
                                </section>
                                <section className="col-md-6">
                                    <img src='/vercel.svg' alt="Virus Corona"/>
                                </section>
                            </section>
                            {/* ----- Akhir dari baris-3 didalam baris ke-2 ----- */}
                        </section>
                    </section>
                    {/* ----- Akhir dari baris ke-2 ----- */}
                </div>
                {/* ----- Akhir dari container ------ */}
            </section>
        )
    }
}

export default TentangKasus
