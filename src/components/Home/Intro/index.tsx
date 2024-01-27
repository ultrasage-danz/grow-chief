import ContentWrapper from "@/components/ContentWrapper"
import IntroImage from "./assets/glow.png"
import IntroImage2 from "./assets/cubes.png"
import IntroImage3 from "./assets/Vector 6.png"
const Intro = () => {


   return (
      <section >
        <ContentWrapper>
            <div className='relative z-10' >
            <div className="text-lg text-grow subpixel-antialiased 
                ml-32 mt-32 mr-32  font-sans font-normal tracking-widest leading-loose">
                    <h1>WHAT'S  GROWCHIEF</h1>
                
            </div>
            <h1 className="items-center"><p className="ml-32  text-5xl font-semibold font-sans  text-transparent 
                bg-clip-text bg-gradient-to-b from-white to-slate-500 leading-tight 
                tracking-wide">
                    We specialize in human-centered design <br />
                    where technology serves <br />
                    humanity, not the other way 
                    <br />around.
            </p></h1>
            <div className="absolute -mr-2 min-h-screen w-2/6 rotate-180 -right-56 top-0"  style={{ backgroundImage: `url(${IntroImage.src}) `}} />

            <div className="absolute top-0 min-h-screen w-2/6 bg-center -left-12"  style={{ backgroundImage: `url(${IntroImage.src}) `}} />
            
        <div className="flex mt-40 items-center content-center  relative space-x-96 ">

            <div className="absolute  min-h-screen w-4/5 content-center bg-center left-0  bg-contain top-1 mx-0.5"
            style={{ backgroundImage: `url(${IntroImage2.src}) `}}/>

            <div>
                
            </div>

            <div className="mt-60 space-x-24  ">This not only elevates your brand but also solves <br /> 
            real-world problems. We see ourselves as your long<br />
            -term partner – working closely with you for true <br /> 
            collaboration, from initial concept to final product.<br /> 
            This way, we’re invested in your success.
            </div>
        </div> 
            
        </div>
           
            
        </ContentWrapper>
      </section >
   )
}
export default Intro
