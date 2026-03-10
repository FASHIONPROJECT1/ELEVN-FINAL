import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const MONO = '"Roboto Mono", "Courier New", monospace'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function TreatmentsIntro({ photoUrl }: { photoUrl: string }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-10%" })
    const [mediaHover, setMediaHover] = useState(false)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"])

    return (
        <section ref={ref} style={{ background: "#0A0A0A", padding: "clamp(4px, 0.5vw, 8px) clamp(16px, 2vw, 24px)" }}>
            <div
                className="clip-round"
                onMouseEnter={() => setMediaHover(true)}
                onMouseLeave={() => setMediaHover(false)}
                style={{
                    maxWidth: 1440,
                    margin: "0 auto",
                    aspectRatio: "2 / 1",
                    position: "relative",
                    background: "#2a2520",
                    cursor: "pointer",
                }}
            >
                {/* Parallax photo */}
                <motion.div style={{ position: "absolute", inset: "-8% 0", y: bgY }}>
                    <img
                        src={photoUrl}
                        alt="ELEVN clinic"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                            transform: mediaHover ? "scale(1.03)" : "scale(1)",
                            transition: "transform 0.8s ease",
                        }}
                    />
                </motion.div>

                {/* Gradient overlays for text readability */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.45) 50%, rgba(10,10,10,0.1) 100%)", zIndex: 1, pointerEvents: "none" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0) 40%, rgba(10,10,10,0.3) 100%)", zIndex: 1, pointerEvents: "none" }} />

                {/* Text overlaid on left */}
                <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", alignItems: "center", padding: "clamp(32px, 5vw, 80px)" }}>
                    <div style={{ maxWidth: 520 }}>
                        <motion.p initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: EASE }} style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", margin: "0 0 20px" }}>OUR APPROACH</motion.p>
                        <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.1 }} style={{ height: 1, background: "rgba(255,255,255,0.15)", transformOrigin: "left", marginBottom: 28, maxWidth: 300 }} />
                        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: EASE, delay: 0.15 }} style={{ fontFamily: FONT, fontSize: "clamp(22px, 2.8vw, 38px)", fontWeight: 500, letterSpacing: "0.03em", color: "#FFFFFF", margin: "0 0 20px", lineHeight: 1.2 }}>
                            We Don't Treat Symptoms.<br />We Treat You.
                        </motion.h2>
                        <motion.p initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.25 }} style={{ fontFamily: FONT, fontSize: "clamp(13px, 1.1vw, 15px)", fontWeight: 300, lineHeight: 1.75, color: "rgba(255,255,255,0.6)", margin: "0 0 18px" }}>
                            Every treatment at ELEVN begins with understanding — a comprehensive analysis of your skin, body, and hair using advanced diagnostic methods. From thorough health assessments to precision skin mapping, we build a complete picture of your unique biology.
                        </motion.p>
                        <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.35 }} style={{ fontFamily: FONT, fontSize: "clamp(12px, 1vw, 14px)", fontWeight: 300, lineHeight: 1.75, color: "rgba(255,255,255,0.4)", margin: 0 }}>
                            The result: treatment plans that are never generic, always evolving, and designed to work with — not against — your natural biology.
                        </motion.p>
                    </div>
                </div>

                {/* Bottom label */}
                <div style={{ position: "absolute", bottom: "clamp(16px, 2vw, 28px)", right: "clamp(16px, 2vw, 28px)", zIndex: 3 }}>
                    <span style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>ELEVN · ZÜRICH</span>
                </div>
            </div>
        </section>
    )
}
