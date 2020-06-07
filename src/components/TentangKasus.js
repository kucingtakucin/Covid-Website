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
                            <h1 className="display-4 mb-5 mt-5 font-weight-bold text-center">Tentang <span
                                id="covid-19">COVID-19</span></h1>
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
                                    <p className='text-justify'>Coronavirus Disease 2019 atau COVID-19 adalah penyakit
                                        baru yang dapat
                                        menyebabkan gangguan pernapasan dan radang paru. Penyakit ini disebabkan oleh
                                        infeksi Severe Acute Respiratory Syndrome Coronavirus 2 (SARS-CoV-2). Gejala
                                        klinis yang muncul sangatlah beragam, mulai dari gejala flu biasa (batuk, pilek,
                                        nyeri tenggorokan, nyeri otot, nyeri kepala) sampai yang berkomplikasi berat
                                        (pneumonia atau sepsis), bahkan bisa menyebabkan kematian.
                                    </p>
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
                                    <h1 className='border-bottom'>Bagaimana Gejala <span id="covid-19">Covid-19?</span>
                                    </h1>
                                    <p className='text-justify'>Dari berbagai penelitian, metode penyebaran utama
                                        penyakit ini diduga melalui droplet saluran pernapasan dan kontak dekat dengan
                                        penderita. Droplet merupakan partikel kecil dari mulut yang dapat
                                        mengandung virus
                                        penyakit, yang dihasilkan pada saat batuk, bersin, atau berbicara. Droplet dapat
                                        melewati sampai jarak tertentu (biasanya 1 meter). Droplet bisa menempel di
                                        pakaian atau benda di sekitar pada saat batuk
                                        atau bersin. Namun, partikel droplet cukup besar sehingga tidak akan bertahan
                                        atau mengendap di udara dalam waktu yang lama. Walaupun begitu, masyarakat tetap diwajibkan
                                        untuk menggunakan masker kain yang menutupi hidung dan mulut untuk mencegah
                                        penyebaran droplet.</p>
                                </section>
                            </section>
                            {/* ----- Akhir dari baris ke-2 didalam baris ke-2 ----- */}

                            {/* ----- Baris ke-3 didalam baris ke-2 ----- */}
                            <section className="row">
                                <section className="col-md-6 border-right">
                                    <h1 className='border-bottom'>Bagaimana <span id="covid-19">Covid-19</span> Menular?
                                    </h1>
                                    <p className='text-justify'>Gejala COVID-19 mulai dari seperti gejala flu biasa
                                        sampai kondisi berat seperti
                                        pneumonia (radang paru akut yang gejalanya sesak napas). Jika Anda mengalami
                                        gejala, memiliki riwayat perjalanan ke wilayah terjangkit, atau berpaparan
                                        dengan orang positif/kemungkinan COVID-19, maka Anda diimbau untuk melakukan
                                        isolasi diri dan menghubungi Jakarta Tanggap COVID-19 di nomor 112 atau pesan
                                        Whatsapp melalui 081 112 112 112 atau 081 388 376 955.</p>
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
        );
    }
}

export default TentangKasus
