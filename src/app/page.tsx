import About from "@/components/sections/About";
import Apresentation from "@/components/sections/Apresentation";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Apresentation />
      <About />
      <Projects />
    </div>
  );
}
