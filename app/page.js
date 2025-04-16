import Course from "@/src/components/course/Course";
import Hero from "@/src/components/hero/Hero";
import Navbar from "@/src/components/navbar/Navbar";
import Question from "@/src/components/question/Question";
import Services from "@/src/components/services/Services";
import TimrPrayer from "@/src/components/timePrayer/TimrPrayer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Question />
      <Course />
      <TimrPrayer />
    </div>
  );
}
