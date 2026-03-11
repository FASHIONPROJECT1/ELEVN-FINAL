import Navbar from "@/components/elevn/Navbar"
import Footer from "@/components/elevn/Footer"
import TreatmentsHero from "@/components/elevn/TreatmentsHero"
import TreatmentsIntro from "@/components/elevn/TreatmentsIntro"
import TreatmentsPhilosophy from "@/components/elevn/TreatmentsPhilosophy"
import TreatmentsGrid from "@/components/elevn/TreatmentsGrid"
import TreatmentsShowcase from "@/components/elevn/TreatmentsShowcase"
import TreatmentsCTA from "@/components/elevn/TreatmentsCTA"
import { LOGOS, IMAGES, VIDEOS } from "@/lib/assets"
import { useDocumentTitle } from "@/hooks/use-document-title"

const Treatments = () => {
  useDocumentTitle("ELEVN — Treatments. Skin, Hair & Body.")
  return (
  <div style={{ background: "#0A0A0A" }}>
    <Navbar logoUrl={LOGOS.symbol} />
    <TreatmentsHero videoUrl={VIDEOS.treatments.video1} />
    <TreatmentsIntro photoUrl={IMAGES.treatments.photo1} />
    <TreatmentsPhilosophy videoUrl={VIDEOS.treatments.video2} />
    <TreatmentsGrid video3Url={VIDEOS.treatments.video3} video4Url={VIDEOS.treatments.video4} />
    <TreatmentsShowcase photoUrl={IMAGES.clinic.treatmentPhoto} productsPhotoUrl={IMAGES.clinic.productsPhoto} />
    <TreatmentsCTA />
    <Footer />
  </div>
  )
}

export default Treatments
