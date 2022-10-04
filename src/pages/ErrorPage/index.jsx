import Button from '../../components/Button'
import './styles.scss'
export default function ErrorPage() {
    return (
            <main className="error" style={{'--bg': 'rgb(55, 55, 55)'}}>
            <h1 className="font">404</h1>
            <h2>Page Not Found :(</h2>
            <Button to="/" className="test">Back to Home</Button>
        </main>
    )
}
