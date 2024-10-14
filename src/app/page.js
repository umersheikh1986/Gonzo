import Hero from "./componants/hero";
import Navbar from "./componants/navbar";
import SectionThree from "./componants/sectionThree";
import SectionTwo from "./componants/sectionTwo";
import Tokenommics from "./componants/tokenoimics";
import Roadmap from "./componants/roadmap";
import LastSection from "./componants/lastSection";
import Footer from "./componants/footer";

export default function Home() {
  return (
<<<<<<< HEAD
    <div className=" w-full relative h-auto bg-center bg-fixed bg-contain no-repeat bg-no-repeat">
=======
    <div className=" w-full relative h-auto bg-white bg-center bg-fixed bg-contain no-repeat bg-no-repeat ">
>>>>>>> cf71f19cfdcb24dd0ef59e40b32022aba911c94b
      <div className="lg:mt-20">
        <Navbar />
        {/* section 1 */}
        <Hero />
        {/* section 2 */}

        <SectionTwo />

        {/* section 3 */}
        <SectionThree />
        {/* section 4 */}

        <Tokenommics />
        {/* section 5 */}
        <Roadmap />
        {/* Last Section */}
        <LastSection />
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}
