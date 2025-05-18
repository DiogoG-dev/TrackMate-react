import './Home.css';
import { Header } from '../../components/layouts/Header/Header.jsx';
import { Footer } from '../../components/layouts/Footer/Footer.jsx';
import { HeroSection } from '../../components/sections/HeroSection/HeroSection.jsx';
import { ExerciseTrackingSection } from '../../components/sections/ExerciseTrackingSection/ExerciseTrackingSection.jsx';
import { NotificationSystemSection } from '../../components/sections/NotificationSystemSection/NotificationSystemSection.jsx';
import { BraceletVarietySection } from '../../components/sections/BraceletVarietySection/BraceletVarietySection.jsx';
import { AlertSystemSection } from '../../components/sections/AlertSystemSection/AlertSystemSection.jsx';
import { ProductSpecifications } from '../../components/sections/ProductSpecifications/ProductSpecifications.jsx';

export function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <ExerciseTrackingSection />
            <NotificationSystemSection />
            <BraceletVarietySection />
            <AlertSystemSection />
            <ProductSpecifications />
            <Footer />
        </>
    )
}