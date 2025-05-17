import './Home.css';
import { Header } from '../../components/Header/Header.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { HeroSection } from '../../components/sections/HeroSection/HeroSection.jsx';

export function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <Footer />
        </>
    )
}