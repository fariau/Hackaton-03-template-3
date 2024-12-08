import DontMiss from "./components/DONTMISS";
import Essential from "./components/ESSENTIAL";
import Featured from "./components/FEATURED";
import Footer from "./components/FOOTER";
import Nav from "./components/HEADER.tsx";
import Hero from "./components/HERO";
import Navigation from "./components/Navigation";


export default function Home() {
  return (
  <main>
    <Nav/>
    <Hero/>
    <Featured/>
    <DontMiss/>
    <Essential/>
    <Navigation/>
    <Footer/>
  </main>
  )
}