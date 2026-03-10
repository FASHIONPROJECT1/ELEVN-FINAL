import { motion } from "framer-motion"
import { useState } from "react"
import { Link } from "react-router-dom"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const MONO = '"Roboto Mono", "Courier New", monospace'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function TreatmentsHero({ videoUrl }: { videoUrl: string }) {
    const [btnHover, setBtnHover] = useState(false)
    const [mediaHover, setMediaHover] = useState(false)

    return (
        <section style={{ background: "#0A0A0A", padding: "0 clamp(16px, 2vw, 24px) clamp(4px, 0.5vw, 8px)" }}>
            <div
                className="clip-round"
                onMouseEnter={() => setMediaHover(true)}
                onMouseLeave={() => setMediaHover(false)}
                style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: 1440,
                    margin: "0 auto",
                    aspectRatio: "2 / 1",
                    background: "#0A0A0A",
                }}
            >
                {videoUrl && (
                    <motion.div
                        animate={{ scale: mediaHover ? 1.04 : 1 }}
                        transition={{ duration: 0.8, ease: EASE }}
                        style={{ position: "absolute", inset: 0 }}
                    >
                        <video autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
                            <source src={videoUrl} type="video/mp4" />
                        </video>
                    </motion.div>
                )}

                <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,0.28)", zIndex: 1, pointerEvents: "none" }} />
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 30%, rgba(10,10,10,0.4) 100%)", zIndex: 1, pointerEvents: "none" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0) 30%, rgba(10,10,10,0) 50%, rgba(10,10,10,0.5) 100%)", zIndex: 1, pointerEvents: "none" }} />

                <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 clamp(24px, 6vw, 80px)" }}>
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.5 }} style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", margin: "0 0 24px" }}>TREATMENTS</motion.p>
                    <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE, delay: 0.65 }} style={{ fontFamily: FONT, fontSize: "clamp(44px, 7vw, 100px)", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "#FFFFFF", margin: "0 0 22px", lineHeight: 0.96, whiteSpace: "pre-line" }}>{"Regeneration\nfrom Within."}</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.88 }} style={{ fontFamily: FONT, fontSize: "clamp(14px, 1.3vw, 18px)", fontWeight: 300, letterSpacing: "0.02em", lineHeight: 1.7, color: "rgba(255,255,255,0.75)", margin: "0 auto 36px", maxWidth: 500 }}>Designed to work with your body's natural healing power. Advanced, scientifically-proven therapies for skin, hair, and body.</motion.p>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE, delay: 1.1 }}>
                        <Link to="/bookings" onMouseEnter={() => setBtnHover(true)} onMouseLeave={() => setBtnHover(false)} style={{ display: "inline-block", fontFamily: FONT, fontSize: 11, fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase", color: btnHover ? "#0A0A0A" : "#FFFFFF", backgroundColor: btnHover ? "#FFFFFF" : "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.4)", borderRadius: 28, padding: "14px 36px", textDecoration: "none", transition: "background 0.35s ease, color 0.35s ease", cursor: "pointer", backdropFilter: "blur(8px)" }}>Book a Consultation</Link>
                    </motion.div>
                </div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 1 }} style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    <span style={{ fontFamily: MONO, fontSize: 8, letterSpacing: "0.2em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>SCROLL</span>
                    <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} style={{ width: 1, height: 22, background: "rgba(255,255,255,0.25)" }} />
                </motion.div>
            </div>
        </section>
    )
}
