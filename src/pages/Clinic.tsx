import Navbar from "@/components/elevn/Navbar"
import Footer from "@/components/elevn/Footer"
import ClinicHero from "@/components/elevn/ClinicHero"
import ClinicDetails from "@/components/elevn/ClinicDetails"
import ClinicTeam from "@/components/elevn/ClinicTeam"
import ClinicProcess from "@/components/elevn/ClinicProcess"
import { LOGOS, IMAGES } from "@/lib/assets"
import { useDocumentTitle } from "@/hooks/use-document-title"

const Clinic = () => {
  useDocumentTitle("ELEVN — Our Clinic. Zürich.")
  return (
  <div style={{ background: "#FAF9F7" }}>
    <Navbar logoUrl={LOGOS.symbol} />
    <ClinicHero photoUrl={IMAGES.aboutUs.photo1} />
    <ClinicDetails photo2Url={IMAGES.home.photo5} photo3Url={IMAGES.home.photo6} hidePhotos />
    <ClinicProcess photoUrl={IMAGES.home.photo3} />
    <ClinicTeam
      accentPhoto={IMAGES.aboutUs.photo3}
      vasePhoto={IMAGES.aboutUs.photo2}
      womanPhoto1={IMAGES.home.photo5}
      womanPhoto2={IMAGES.home.photo6}
    />
    <Footer />
  </div>
  )
}

export default Clinic
