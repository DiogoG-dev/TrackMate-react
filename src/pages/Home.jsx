import { HeroSection } from '../components/allSections/heroSection/HeroSection'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import './Home.css'

export function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <Footer />
        </>
    )
}