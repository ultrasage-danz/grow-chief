import HeroImage from './assets/grid.png'
import HeroImage2 from './assets/cube.png'
import HeroImage3 from './assets/logo.png'
import ContentWrapper from '@/components/ContentWrapper'
import Button from '@/components/Button'


const Hero = () => {
    return (
      <section className="text-white  bg-violet-950/10 min h-screen relative" 
      style={{ backgroundImage: `url(${HeroImage.src}) `}}>

        <ContentWrapper>
            <div className='relative z-10'>
                <h1 className="text-7xl subpixel-antialiased 
                mt-32  font-sans font-medium text-transparent 
                bg-clip-text bg-gradient-to-b from-white to-violet-300 leading-tight 
                tracking-wide">
                    Devtools <br/>
                    Launch Weeks
                </h1>

                <p className="mt-12 text-base font-normal">
                    We do a whole week of launch around your prouct,<br/> 
                    including an article, Reddit promotion, influencers, <br/> posts, 
                    and so much more
                </p>

                <div className='mt-12 relative space-x-5 hover:bg-transparent'><Button>
                    Book a Call
                </Button>

                <Button>
                    Gitroom Blog
                </Button>
                </div>
                <div className="absolute  min-w-screen h-2/5 bg-center bg-cover bg-contain bottom-4"
            style={{ backgroundImage: `url(${HeroImage3.src}) `}}/>
                
                
            </div>
            
            

            <div className="absolute  min-h-screen w-2/5 bg-center right-6 bg-cover bg-contain top-4"
            style={{ backgroundImage: `url(${HeroImage2.src}) `}}/>

            {/* <div className="absolute  min-h-screen w-3/5 bg-center right-5 bg-cover bg-contain top-40" style={{backgroundImage: `url(${HeroImage3.src}) `}}/> */}
            

            

        </ContentWrapper>
        
        
       
        
      </section>
   )
}

export default Hero
