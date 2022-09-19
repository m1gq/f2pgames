import './styles.scss'
import Carousel from '../Carousel'
import CarouselItem from '../CarouselItem'
import Card from '../Card'
import ghost from '../../assets/ghost.png'
export default function Hero() {
    return (
        <Carousel>
            <CarouselItem
                title={<>Your place to find <span className="highlight" style={{'--bg': 'rgb(11, 128, 237)'}}>Free</span> Games for All Platforms</>}
            >
                <Card
                    path={'/games'}
                    text={'Go to Games ➜'}
                    title={<>We Love Games and so do You!</>}
                    className="testing"
                    
                >
                    <p className="hero-paragraph">We all know that feeling when you want to buy New Games and you can't afford buy one, We've got you covered. We'll find New Games for You and the best thing is... They're all FREE!</p>
                </Card>
            </CarouselItem>
            <CarouselItem
                title={<>Don't want to <span className="highlight" style={{'--bg': 'rgb(241, 195, 29)'}}>download</span> them?</>}
            >
                <Card
                    path={'/browser'}
                    text={'Go to Browser Games ➜'}
                    title={<>We Love Games and so do You!</>}
                    className="testing"

                >
                    <p className="hero-paragraph">Maybe, for some reason, You don't want to download any games and instead want some Web Browser Games, All you have to do is Look into our Web Browser Category We've made for you and enjoy</p>
                </Card>
            </CarouselItem>
            <CarouselItem
                title={<>Choose your <span style={{'--bg': 'rgb(83, 71, 219)'}} className="highlight" >Category</span> at your Wish</>}
            >
                <Card
                    path={'/about'}
                    text={'See more About Us ➜'}
                    title={<>We Love Games and so do You!</>}
                    className="testing"

                >
                    <p className="hero-paragraph">You can find your favorite Game Categories here.</p>
                </Card>
            </CarouselItem>
        </Carousel>
    )
}
