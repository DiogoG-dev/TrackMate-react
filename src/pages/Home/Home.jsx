import './Home.css';
import { Header } from '../../components/layouts/Header/Header.jsx';
import { Footer } from '../../components/layouts/Footer/Footer.jsx';
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