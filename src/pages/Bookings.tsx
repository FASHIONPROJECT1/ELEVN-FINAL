import Navbar from "@/components/elevn/Navbar"
import BookingsPageComponent from "@/components/elevn/BookingsPage"
import { LOGOS } from "@/lib/assets"
import { useDocumentTitle } from "@/hooks/use-document-title"

const Bookings = () => {
  useDocumentTitle("ELEVN — Book a Consultation.")
  return (
  <div>
    <Navbar logoUrl={LOGOS.symbol} forceOpaque />
    <BookingsPageComponent logoUrl={LOGOS.symbol} />
  </div>
  )
}

export default Bookings
