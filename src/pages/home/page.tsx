import Header from "./components/Header";
import Hero from "./components/Hero";
import PrefectureCards from "./components/PrefectureCards";
import BeginnerGuide from "./components/BeginnerGuide";
import SakeDiagnosis from "./components/SakeDiagnosis";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background-50 text-foreground-900">
      <Header />
      <main>
        <Hero />
        <PrefectureCards />
        <BeginnerGuide />
        <SakeDiagnosis />
        <About />
      </main>
      <Footer />
    </div>
  );
}