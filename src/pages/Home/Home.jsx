import './Home.css';
import { Header } from '../../components/layouts/Header/Header.jsx';
import { Footer } from '../../components/layouts/Footer/Footer.jsx';
import { HeroSection } from '../../components/sections/HeroSection/HeroSection.jsx';
import { ExerciseTrackingSection } from '../../components/sections/ExerciseTrackingSection/ExerciseTrackingSection.jsx';
import { NotificationSystemSection } from '../../components/sections/NotificationSystemSection/NotificationSystemSection.jsx';
import { BraceletVarietySection } from '../../components/sections/BraceletVarietySection/BraceletVarietySection.jsx';
import { AlertSystemSection } from '../../components/sections/AlertSystemSection/AlertSystemSection.jsx';
import { ProductSpecifications } from '../../components/sections/ProductSpecifications/ProductSpecifications.jsx';
import { LiveBetterSection } from '../../components/sections/LiveBetterSection/LiveBetterSection.jsx';
import { ClosingSection } from '../../components/sections/ClosingSection/ClosingSection.jsx';
import { DiscountOffer } from '../../components/sections/DiscountOffer/DiscountOffer.jsx';

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
            <LiveBetterSection />
            <ClosingSection />
            <DiscountOffer />
            <Footer />
        </>
    )
}