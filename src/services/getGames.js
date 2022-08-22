import { useState, useEffect } from 'react'
import { BASE_URL, options } from '../settings/index'

export default function getGames(url) {
    console.log(BASE_URL + url);
    return fetch(`${BASE_URL}${url}`, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
}
