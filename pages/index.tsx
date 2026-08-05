import { Orbitron } from "next/font/google";
import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import { IntroFacts } from "@/components/Hero";
import Hero from "@/components/Hero";
import BackgroundCogs from "@/components/BackgroundCircles";
import MeetSamuel from "@/components/MeetSamuel";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import ParallaxSection, { SectionBlobs } from "@/components/ParallaxSection";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
const orbitron = Orbitron({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-orbitron",
    display: "swap",
});



export default function Home() {
  const [introFacts, setIntroFacts] = useState<IntroFacts>({
    'name': 'Samuel Egemba',
    'role': 'Technical Project Manager & Software Engineer'
  })
  return (
    <>
      <Head>
        <title>Samuel Egemba - Software Developer</title>
      </Head>
      <div
        className={`${orbitron.variable} relative h-screen snap-y snap-proximity overflow-y-scroll bg-[#002c6e] text-orange-500`}
      >
        <Header />
        {/*hero section*/}
        <ParallaxSection
          id="hero"
          background={<BackgroundCogs />}
          contentClassName="px-4 text-center"
        >
          <Hero name={introFacts.name} role={introFacts.role} />
        </ParallaxSection>
        {/*meet samuel section*/}
        <ParallaxSection id="meet" background={<SectionBlobs color="#f97316" />}>
          <MeetSamuel />
        </ParallaxSection>
        {/*skills & experience section*/}
        <ParallaxSection id="skills" background={<SectionBlobs color="#ec4899" />}>
          <Skills />
        </ParallaxSection>
        {/*the work section*/}
        <ParallaxSection id="work" background={<SectionBlobs color="#22d3ee" />}>
          <Work />
        </ParallaxSection>
        {/*contact section*/}
        <ParallaxSection id="contact" background={<SectionBlobs color="#f97316" />}>
          <Contact />
        </ParallaxSection>
        <Footer />
      </div>
    </>
  );
}
