import Image from "next/image";
import FirstPage_section2 from "./components/FirstPage_section2";
import SocialHandles from "./components/SocialHandles";
import FirstPage_section1 from "./components/FirstPage_section1";
import Skills from "./components/Skills";
import About from "./components/About";
import Exp from "./components/Exp";
import Project from "./components/Project";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between cursor-pointer">

      <div className="relative flex-col before:absolute 
       before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2
        before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent
         before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full
          sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200
           after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br 
           before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900
            after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <SocialHandles/>
            <FirstPage_section1/>
            

      </div>

      
            <FirstPage_section2/>
            <div className="flex ">
              <About/>
              <Skills/>
             
            </div>
            <br/>
            <Exp/>
            <br/> <br/>
            <Project/>
            <br/>
            <Footer/>
    </main>


    </>
  );
}


//cd into portfolio den to start project do npm run dev