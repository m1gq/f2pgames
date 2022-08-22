import { useState, useEffect } from 'react'
import { BASE_URL, options } from '../settings/index'

export default function getGames(url) {
    return fetch(`${BASE_URL}${url}`, options)
        .then(response => response.json())
        .then(response => {
            const games = response.map(game => {
                return game
            })
            return games
        })
        .catch(err => console.error(err));
}
