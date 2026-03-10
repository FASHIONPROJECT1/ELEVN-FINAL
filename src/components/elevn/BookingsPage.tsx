import { motion } from "framer-motion"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const IFRAME_SRC = "https://schedule.clinicminds.com/services?clinic=dc09df9a-5707-11f0-9c75-0667c42d6c5b&l=de-DE"

export default function BookingsPage({ logoUrl }: { logoUrl?: string }) {
    return (
        <div style={{ background: "#FFFFFF", minHeight: "100vh", width: "100%", paddingTop: 72, boxSizing: "border-box" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE, delay: 0.2 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "clamp(60px, 8vw, 100px) clamp(24px, 5vw, 80px) clamp(48px, 6vw, 72px)", textAlign: "center", borderBottom: "1px solid rgba(17,17,17,0.06)" }}>
                {logoUrl ? <img src={logoUrl} alt="ELEVN" style={{ height: 44, width: "auto", marginBottom: 32, filter: "brightness(0)" }} /> : <div style={{ fontFamily: FONT, fontSize: 32, fontWeight: 600, letterSpacing: "0.08em", color: "#111", marginBottom: 32 }}>1∧∧</div>}
                <h1 style={{ fontFamily: FONT, fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#111111", margin: "0 0 16px" }}>INTELLIGENT BEAUTY.</h1>
                <p style={{ fontFamily: FONT, fontSize: "clamp(10px, 1vw, 12px)", fontWeight: 300, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(17,17,17,0.45)", margin: "0 0 8px" }}>ROOTED IN SCIENCE. GUIDED BY CARE.</p>
                <p style={{ fontFamily: FONT, fontSize: "clamp(13px, 1.1vw, 15px)", fontWeight: 300, letterSpacing: "0.01em", lineHeight: 1.7, color: "rgba(17,17,17,0.55)", margin: "24px 0 0", maxWidth: 480 }}>Select your service below. Our team will confirm your appointment within 24 hours.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.4 }} style={{ maxWidth: 860, margin: "0 auto", padding: "clamp(40px, 5vw, 64px) clamp(24px, 4vw, 48px) clamp(80px, 10vw, 120px)", boxSizing: "border-box" }}>
                <iframe src={IFRAME_SRC} width="100%" style={{ border: "none", borderRadius: 0, boxShadow: "0 2px 40px rgba(0,0,0,0.05)", display: "block", width: "100%", height: "clamp(600px, 80vh, 900px)" }} title="ELEVN Booking System" allow="payment" />
            </motion.div>
            <div style={{ textAlign: "center", padding: "0 24px clamp(60px, 8vw, 100px)", borderTop: "1px solid rgba(17,17,17,0.05)", paddingTop: 36 }}>
                <p style={{ fontFamily: FONT, fontSize: 11, letterSpacing: "0.12em", color: "rgba(17,17,17,0.3)", textTransform: "uppercase", margin: 0 }}>Fraumünsterstrasse 11 · 8001 Zürich · hello@elevn.ch</p>
            </div>
        </div>
    )
}
