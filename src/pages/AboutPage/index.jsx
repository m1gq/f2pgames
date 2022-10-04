import './styles.scss'
import AboutSection from '../../components/AboutSection'
import { Link } from 'react-router-dom'
export default function AboutPage() {
    return (
        <main className="about-container">
            <section className="about">
                <h2>Hi Friend, I hope you had a good Experience!</h2>
                <p>My name is Miguel Quintero, someone who is trying to get into Web-Development and Programming in general, I really enjoyed making this and learned a lot from it</p>
                <div>You can contact me through:
                    <ul>
                        <li>Discord: m1.#6599</li>
                        <li>
                            Or <a href='https://www.linkedin.com/in/mdavidq' target='_blank' >LinkedIn</a>
                        </li>
                    </ul>
                </div>
                <p>Don't forget that you're here because We are Gamers and</p>
                <h1 className="font text-big">We Love Games</h1>
            </section>
        </main>
    )
}
