import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useIsMobile } from "@/hooks/use-mobile"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const MONO = '"Roboto Mono", "Courier New", monospace'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function HomeCTA({ photoUrl }: { photoUrl: string }) {
    const sectionRef = useRef(null)
    const cardRef = useRef(null)
    const cardInView = useInView(cardRef, { once: true, margin: "-10%" })
    const [btnHover, setBtnHover] = useState(false)
    const [imgHover, setImgHover] = useState(false)
    const isMobile = useIsMobile()
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"])

    return (
        <section ref={sectionRef} style={{ width: "100%", padding: "clamp(4px, 0.5vw, 8px) clamp(16px, 2vw, 24px)", boxSizing: "border-box", background: "#FAF9F7" }}>
            <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr", gap: isMobile ? 16 : "clamp(10px, 1.2vw, 16px)", alignItems: "stretch" }}>
                <motion.div
                    ref={cardRef}
                    initial={{ opacity: 0, y: 24 }}
                    animate={cardInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: EASE }}
                    style={{ background: "#1E1C18", borderRadius: 20, padding: "clamp(32px, 4vw, 56px) clamp(28px, 3vw, 44px)", display: "flex", flexDirection: "column", justifyContent: "center" }}
                >
                    <p style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: "0 0 20px" }}>ELEVN · ZÜRICH</p>
                    <h2 style={{ fontFamily: FONT, fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase", color: "#FFFFFF", margin: "0 0 16px", lineHeight: 1.1 }}>Begin Your Journey.</h2>
                    <p style={{ fontFamily: FONT, fontSize: "clamp(12px, 1vw, 14px)", fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", margin: "0 0 28px" }}>Take the first step towards a deeper understanding of your health. A comprehensive, personalised exploration of your unique biology.</p>
                    <div>
                        <Link
                            to="/bookings"
                            onMouseEnter={() => setBtnHover(true)}
                            onMouseLeave={() => setBtnHover(false)}
                            style={{
                                display: "inline-block", fontFamily: FONT, fontSize: 10, fontWeight: 400,
                                letterSpacing: "0.18em", textTransform: "uppercase",
                                color: btnHover ? "#1E1C18" : "#FFFFFF",
                                backgroundColor: btnHover ? "#FFFFFF" : "transparent",
                                border: "1px solid rgba(255,255,255,0.3)",
                                borderRadius: 28, padding: "12px 28px",
                                textDecoration: "none", transition: "all 0.35s ease", cursor: "pointer",
                            }}
                        >
                            Book a Consultation
                        </Link>
                    </div>
                </motion.div>

                {/* Right: photo with zoom on hover */}
                <div
                    onMouseEnter={() => setImgHover(true)}
                    onMouseLeave={() => setImgHover(false)}
                    style={{ overflow: "hidden", borderRadius: 20, position: "relative", background: "#E8E4DE", cursor: "pointer" }}
                >
                    <motion.div style={{ position: "absolute", inset: "-6% 0", y: bgY }}>
                        {photoUrl ? <img src={photoUrl} alt="ELEVN clinic" style={{ width: "100%", height: "100%", objectFit: "cover", transform: imgHover ? "scale(1.05)" : "scale(1)", transition: "transform 0.8s ease" }} /> : null}
                    </motion.div>
                    <div style={{ position: "absolute", inset: 0, background: "rgba(30,28,24,0.08)" }} />
                    <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img src="/images/logo-symbol.svg" alt="ELEVN" style={{ height: "clamp(50px, 10vw, 120px)", width: "auto", opacity: 0.7 }} />
                    </div>
                    <div style={{ paddingTop: "50%" }} />
                </div>
            </div>
        </section>
    )
}
