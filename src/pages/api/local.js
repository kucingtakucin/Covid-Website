/*
 * Copyright (c) 2020.
 * @author (Sari Eka Nur Marifah, Nandhika Kurniasari, Adam Arthur Faizal)
 * @version (5 Juni 2020)
 */

import React from 'react'
import fetch from "isomorphic-unfetch";

export default async (request, response) => {
    const data = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('api.kawalcorona.com/indonesia')}`)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText)
            return response.json()
        })
        .then(data => {
            return JSON.parse(data.contents)[0]
        })
        .catch(error => {
            console.error(`Error: ${error}`)
        })
    response.status(200).json({
        local_positif: data.positif,
        local_sembuh: data.sembuh,
        local_meninggal: data.meninggal,
        local_dirawat: data.dirawat
    })
}
