import ghost from '../../assets/ghost.png'

export default function CarouselItem({ title, children }) {
    return (
        <section className="hero nextCarouselItem" >
            <div className="img-containers"><img src={ghost} alt='ghost' className="img-test"/> </div>
            <h1 className="hero-title font">{title}</h1>
            { children }
        </section>
    )
}
