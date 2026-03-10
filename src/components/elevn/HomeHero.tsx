import { motion } from "framer-motion"
import { useState } from "react"
import { Link } from "react-router-dom"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const MONO = '"Roboto Mono", "Courier New", monospace'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function HomeHero({ videoUrl }: { videoUrl: string }) {
    const [btnHover, setBtnHover] = useState(false)

    return (
        <section style={{ position: "relative", width: "100%", background: "#FAF9F7", padding: "0 clamp(16px, 2vw, 24px) clamp(4px, 0.5vw, 8px)" }}>
            <div className="clip-round" style={{ maxWidth: 1440, margin: "0 auto", height: "clamp(400px, 56vw, 700px)", position: "relative", background: "#FAF9F7" }}>
                {videoUrl && (
                    <video autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                )}
                <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,0.3)" }} />

                <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 clamp(24px, 6vw, 80px)" }}>
                    <motion.span
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
                        style={{ fontFamily: FONT, fontSize: "clamp(60px, 14vw, 200px)", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#FFFFFF", lineHeight: 0.9, display: "block", marginBottom: 20 }}
                    >
                        ELEVN
                    </motion.span>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
                        style={{ fontFamily: FONT, fontSize: "clamp(14px, 2vw, 28px)", fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)", margin: "0 0 10px" }}
                    >
                        INTELLIGENT BEAUTY
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
                        style={{ fontFamily: MONO, fontSize: "clamp(8px, 0.75vw, 10px)", fontWeight: 400, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", margin: "0 0 36px" }}
                    >
                        ROOTED IN SCIENCE · GUIDED BY CARE
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE, delay: 1.1 }}>
                        <Link
                            to="/bookings"
                            onMouseEnter={() => setBtnHover(true)}
                            onMouseLeave={() => setBtnHover(false)}
                            style={{
                                display: "inline-block", fontFamily: FONT, fontSize: 10, fontWeight: 400,
                                letterSpacing: "0.18em", textTransform: "uppercase",
                                color: btnHover ? "#1E1C18" : "#FFFFFF",
                                backgroundColor: btnHover ? "#FFFFFF" : "transparent",
                                border: "1px solid rgba(255,255,255,0.45)",
                                borderRadius: 28, padding: "13px 32px",
                                textDecoration: "none", transition: "all 0.35s ease", cursor: "pointer",
                            }}
                        >
                            Book a Consultation
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
