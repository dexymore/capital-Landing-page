import NavBar from "../components/NavBar";
import Hero from "../sections/Hero";
import CapitalSection from "../sections/CapitalSection";
import firstSection from "../assets/ey-arab-business-people-shaking-hands-1-1536x1024.jpg";
import ButtonSection from "../sections/ButtonSection";
import Contact from "../sections/Contact";
import MapEmbed from "../sections/MapEmbed";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <CapitalSection />
      <ButtonSection></ButtonSection>
      <Contact></Contact>
      <MapEmbed />
    </>
  );
};

export default Home;
