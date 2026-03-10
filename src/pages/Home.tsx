import Navbar from "@/components/elevn/Navbar"
import Footer from "@/components/elevn/Footer"
import HomeHero from "@/components/elevn/HomeHero"
import HomeMission from "@/components/elevn/HomeMission"
import HomeIntro from "@/components/elevn/HomeIntro"
import HomeClinicInterior from "@/components/elevn/HomeClinicInterior"
import HomePillars from "@/components/elevn/HomePillars"
import HomeCTA from "@/components/elevn/HomeCTA"
import HomeNavCards from "@/components/elevn/HomeNavCards"
import HomeZurich from "@/components/elevn/HomeZurich"
import HomeAerial from "@/components/elevn/HomeAerial"
import HomeInstagram from "@/components/elevn/HomeInstagram"
import HomeNewsletter from "@/components/elevn/HomeNewsletter"
import { LOGOS, IMAGES, VIDEOS } from "@/lib/assets"

const Home = () => (
  <div style={{ background: "#FAF9F7" }}>
    <Navbar logoUrl={LOGOS.symbol} />
    <HomeHero videoUrl={VIDEOS.home.video1} />
    <HomeMission />
    <HomeIntro videoUrl={VIDEOS.home.video2} photo1Url={IMAGES.home.photo1} photo2Url={IMAGES.home.photo2} />
    <HomeClinicInterior photoUrl={IMAGES.home.photo3} />
    <HomePillars photo4Url={IMAGES.home.photo4} photo5Url={IMAGES.home.photo5} photo6Url={IMAGES.home.photo6} />
    <HomeCTA photoUrl={IMAGES.home.photo7} />
    <HomeNavCards />
    <HomeZurich videoUrl={VIDEOS.home.video3} />
    <HomeAerial videoUrl={VIDEOS.home.video4} />
    <HomeInstagram />
    <HomeNewsletter />
    <Footer />
  </div>
)

export default Home
