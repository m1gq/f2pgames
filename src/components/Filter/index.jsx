import './styles.scss'
export default function Filter({ children }) {
    function handleSubmit(e) {
        e.preventDefault()
    }
    return (
        <section className="filter-container">
            <h3>Filter By</h3>
            <form className="filter" onSubmit={handleSubmit}>
                {children}
                <button className="btn" type="submit">Filter Items</button>
            </form>
        </section>
    )
}
