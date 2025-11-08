import Navbar from "@/components/Navbar";
import HeroCountdown from "@/components/HeroCountdown";
import EventHighlights from "@/components/EventHighlights";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* This ID matches the `href` in the "Skip to Content" link 
        in app/layout.tsx for accessibility.
      */}
      <main id="main-content">
        <HeroCountdown />
        <EventHighlights />
        <About />
        <Timeline />
        {/* <Resources /> */}
      </main>
      <Footer />
    </>
  );
}
