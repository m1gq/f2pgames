import './styles.scss'

export default function Showcase({ title, children }) {

    return (
        <section className="showcase">
            <h3 className="showcase-title">{title}</h3>
            {children}
        </section>
    )
}
