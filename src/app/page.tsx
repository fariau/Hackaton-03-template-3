import DontMiss from "./components/DONTMISS";
import Essential from "./components/ESSENTIAL";
import Featured from "./components/FEATURED";
import GearUp from "./components/GREAPUP";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";


export default function Home() {
  return (
  <main>
 
    <Hero/>
    <Featured/>
    <GearUp/>
    <DontMiss/>
    <Essential/>
    <Navigation/>
  </main>
  )
}