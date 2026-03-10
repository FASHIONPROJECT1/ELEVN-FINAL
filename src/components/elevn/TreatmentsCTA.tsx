import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const MONO = '"Roboto Mono", "Courier New", monospace'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function TreatmentsCTA() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-10%" })
    const [btnHover, setBtnHover] = useState(false)
    const [shopHover, setShopHover] = useState(false)

    return (
        <section ref={ref} style={{ background: "#0A0A0A", padding: "clamp(80px, 10vw, 140px) clamp(24px, 6vw, 120px)", boxSizing: "border-box" }}>
            <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, ease: EASE }}
                    style={{ width: 40, height: 1, background: "rgba(255,255,255,0.1)", margin: "0 auto 36px", transformOrigin: "center" }}
                />
                <motion.p initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: EASE }} style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", margin: "0 0 22px" }}>YOUR JOURNEY</motion.p>
                <motion.h2 initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: EASE, delay: 0.1 }} style={{ fontFamily: FONT, fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase", color: "#FFFFFF", margin: "0 0 22px", lineHeight: 1.1 }}>Ready to Begin?</motion.h2>
                <motion.p initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.2 }} style={{ fontFamily: FONT, fontSize: "clamp(15px, 1.3vw, 17px)", fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.45)", margin: "0 auto 44px", maxWidth: 500 }}>
                    Every treatment begins with a comprehensive consultation — a conversation about you, your goals, and the science behind your care plan. No pressure, no obligations.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: EASE, delay: 0.3 }} style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                    <Link to="/bookings" onMouseEnter={() => setBtnHover(true)} onMouseLeave={() => setBtnHover(false)} style={{ display: "inline-block", fontFamily: FONT, fontSize: 11, fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase", color: btnHover ? "#0A0A0A" : "#FFFFFF", backgroundColor: btnHover ? "#FFFFFF" : "transparent", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 28, padding: "14px 36px", textDecoration: "none", transition: "all 0.35s ease", cursor: "pointer" }}>Book a Consultation</Link>
                    <Link to="/shop" onMouseEnter={() => setShopHover(true)} onMouseLeave={() => setShopHover(false)} style={{ fontFamily: FONT, fontSize: 11, fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase", color: shopHover ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.35)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.12)", paddingBottom: 4, transition: "color 0.3s ease", cursor: "pointer" }}>Shop Products</Link>
                </motion.div>
            </div>
        </section>
    )
}
