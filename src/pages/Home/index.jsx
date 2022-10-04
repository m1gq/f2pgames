import Hero from '../../components/Hero'
import './styles.scss'
import { Helmet } from 'react-helmet'
export default function Home() {
    return (
        <main >
            <Helmet>
                <title>Home | F2PGames</title>
                <meta name="description" content="F2PGames is all about Games" />
                <meta name="description" content="Find Free Games for Web Browsers or PC" />
                <meta name="description" content="We love Games as same as You" />
                <meta name="author" content="https://github.com/m1gq" />
            </Helmet>
            <Hero />
        </main>
    )
}
