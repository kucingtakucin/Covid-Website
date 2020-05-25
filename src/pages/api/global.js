import React from 'react'
import fetch from "isomorphic-unfetch";

export default async (request, response) => {
    const positif = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('api.kawalcorona.com/positif')}`)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText)
            return response.json()
        })
        .then(data => JSON.parse(data.contents))
        .catch(error => console.error(`Error: ${error}`))

    const sembuh = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('api.kawalcorona.com/sembuh')}`)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText)
            return response.json()
        })
        .then(data => JSON.parse(data.contents))
        .catch(error => console.error(`Error: ${error}`))

    const meninggal = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('api.kawalcorona.com/meninggal')}`)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText)
            return response.json()
        })
        .then(data => JSON.parse(data.contents))
        .catch(error => console.error(`Error: ${error}`))

    response.status(200).json({
        global_positif: positif.value,
        global_sembuh: sembuh.value,
        global_meninggal: meninggal.value
    })
}
