import Navbar from "@/components/elevn/Navbar"
import BookingsPageComponent from "@/components/elevn/BookingsPage"
import { LOGOS } from "@/lib/assets"

const Bookings = () => (
  <div>
    <Navbar logoUrl={LOGOS.symbol} />
    <BookingsPageComponent logoUrl={LOGOS.symbol} />
  </div>
)

export default Bookings
