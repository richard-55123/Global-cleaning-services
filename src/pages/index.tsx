import AboutNaoussi from "../components/sections/About"
import CleaningServicesPage from "../components/sections/CleaningServicesPage"
import CleanServices from "../components/sections/CleanServices"
import ContactSection from "../components/sections/contact"
import Hero from "../components/sections/hero"
import HowItWorks from "../components/sections/HowItWorks"
import GlobalWorldMap from "../components/sections/map"
import ProductsSection from "../components/sections/vente"
import VisionMissionValues from "../components/sections/VisionMissionValues"

export const Home = () => {
    return (
        <>
            <Hero />
            <HowItWorks/>
            <AboutNaoussi/>
            <VisionMissionValues/>
            <CleanServices/>
            <CleaningServicesPage/>
            <ProductsSection/>
            <ContactSection/>
            <GlobalWorldMap/>
        </>
    )
}