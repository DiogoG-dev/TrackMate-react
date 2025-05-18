import './Home.css';
import { Header } from '../../components/layouts/Header/Header.jsx';
import { Footer } from '../../components/layouts/Footer/Footer.jsx';
import { HeroSection } from '../../components/sections/HeroSection/HeroSection.jsx';
import { ExerciseTrackingSection } from '../../components/sections/ExerciseTrackingSection/ExerciseTrackingSection.jsx';
import { NotificationSystemSection } from '../../components/sections/NotificationSystemSection/NotificationSystemSection.jsx';
import { BraceletVarietySection } from '../../components/sections/BraceletVarietySection/BraceletVarietySection.jsx';

export function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <ExerciseTrackingSection />
            <NotificationSystemSection />
            <BraceletVarietySection />
            <Footer />
        </>
    )
}