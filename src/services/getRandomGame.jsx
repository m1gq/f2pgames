import shuffle from 'just-shuffle';
export default function getRandomGame(props) {
    const games = shuffle([...props], {shuffleAll: true})
    return games.splice(0, 3)
}
