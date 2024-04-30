import AllTutors from "@/components/AllTutors/AllTutors";
import Categories from "@/components/Categories/Categories";
import Counter from "@/components/CountSection/Counter";
import HeroSection from "@/components/HeroSection/HeroSection";
import TestimonialUser from "@/components/TestimoniaUser/TestimonialUser";
import TuitionTypes from "@/components/TuitionTypes/TuitionTypes";
import Footer from "@/components/common/Footer/Footer";
import NavBar from "@/components/common/NavBar/NavBar";
import Featured from "@/components/featured/Featured";
import Howitswork from "@/components/howitswork/Howitswork";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Counter />
      <TuitionTypes />
      <Categories />
      <Howitswork />
      <TestimonialUser />
      <AllTutors />
      <Featured />
      <Footer />
    </div>
  );
}
