import HeroImage2 from '@/components/Home/Hero/assets/grid.png'
import MainNavigation from '@/components/MainNavigation';
import Hero from '@/components/Home/Hero';
import Intro from '@/components/Home/Intro';
import Testimonial from '@/components/Home/Testimonial';
function Home() {
  return (
    <main>
    <main style={{ backgroundImage: `url(${HeroImage2.src}) `}}>
      <MainNavigation  />
      <Hero/>
      
    </main>
    <Intro/>
    <Testimonial/>
    </main>
  )
  
}

export default Home
