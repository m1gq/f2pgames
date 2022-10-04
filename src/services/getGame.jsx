import { useState, useEffect } from 'react'
import { GET_GAME_BY_ID, options } from '../settings/index'

export default function getGames(id) {
    return fetch(`${GET_GAME_BY_ID}${id}`, options)
        .then(response => {
            return response.json()
        })
        .then(response => {
            return response
        })
}
