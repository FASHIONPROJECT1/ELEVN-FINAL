import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const MONO = '"Roboto Mono", "Courier New", monospace'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function TreatmentsPhilosophy({ videoUrl }: { videoUrl: string }) {
    const ref = useRef(null)
    const textRef = useRef(null)
    const textInView = useInView(textRef, { once: true, margin: "-10%" })
    const [mediaHover, setMediaHover] = useState(false)

    return (
        <section ref={ref} style={{ background: "#0A0A0A", padding: "clamp(40px, 5vw, 72px) clamp(16px, 3vw, 48px)", boxSizing: "border-box" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: "clamp(36px, 5vw, 72px)", alignItems: "center" }}>
                <div
                    className="clip-round"
                    onMouseEnter={() => setMediaHover(true)}
                    onMouseLeave={() => setMediaHover(false)}
                    style={{ aspectRatio: "3 / 4", position: "relative", width: "100%", background: "#0A0A0A" }}
                >
                    <motion.div
                        animate={{ scale: mediaHover ? 1.05 : 1 }}
                        transition={{ duration: 0.8, ease: EASE }}
                        style={{ position: "absolute", inset: 0 }}
                    >
                        {videoUrl ? (
                            <video autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
                                <source src={videoUrl} type="video/mp4" />
                            </video>
                        ) : null}
                    </motion.div>
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 50%, rgba(10,10,10,0.2) 100%)", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", inset: 0, zIndex: 3, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                        <motion.img
                            src="/images/logo-symbol.svg"
                            alt="ELEVN symbol"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 0.7, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.2, ease: EASE }}
                            style={{ height: "clamp(36px, 7vw, 70px)", width: "auto", filter: "brightness(0)" }}
                        />
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "clamp(16px, 2vw, 28px)", zIndex: 2 }}>
                        <span style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>PRECISION · CARE</span>
                    </div>
                </div>

                <div ref={textRef} style={{ padding: "clamp(8px, 1vw, 16px) 0" }}>
                    <motion.p initial={{ opacity: 0, y: 8 }} animate={textInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: EASE }} style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", margin: "0 0 20px" }}>PRECISION MEDICINE</motion.p>
                    <motion.h3 initial={{ opacity: 0, y: 14 }} animate={textInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: EASE, delay: 0.1 }} style={{ fontFamily: FONT, fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 500, letterSpacing: "0.03em", color: "#FFFFFF", margin: "0 0 18px", lineHeight: 1.2 }}>Science Meets Intuition.</motion.h3>
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={textInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.2 }} style={{ fontFamily: FONT, fontSize: "clamp(14px, 1.2vw, 16px)", fontWeight: 300, lineHeight: 1.75, color: "rgba(255,255,255,0.5)", margin: "0 0 32px", maxWidth: 440 }}>
                        Our treatments combine advanced medical expertise with a holistic understanding of the body. We use evidence-based protocols refined through years of clinical practice — each one tailored to your individual health profile.
                    </motion.p>
                    <motion.div initial={{ scaleX: 0 }} animate={textInView ? { scaleX: 1 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.25 }} style={{ height: 1, background: "rgba(255,255,255,0.08)", transformOrigin: "left", marginBottom: 32, maxWidth: 300 }} />
                    <motion.p initial={{ opacity: 0, y: 8 }} animate={textInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: EASE, delay: 0.3 }} style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", margin: "0 0 20px" }}>REGENERATIVE FOCUS</motion.p>
                    <motion.h3 initial={{ opacity: 0, y: 14 }} animate={textInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: EASE, delay: 0.35 }} style={{ fontFamily: FONT, fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 500, letterSpacing: "0.03em", color: "#FFFFFF", margin: "0 0 18px", lineHeight: 1.2 }}>Healing, Not Masking.</motion.h3>
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={textInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.45 }} style={{ fontFamily: FONT, fontSize: "clamp(14px, 1.2vw, 16px)", fontWeight: 300, lineHeight: 1.75, color: "rgba(255,255,255,0.5)", margin: 0, maxWidth: 440 }}>
                        Rather than surface-level fixes, we stimulate the body's own regenerative processes — from collagen synthesis and stem cell activation to cellular repair. Results that look natural because they are natural.
                    </motion.p>
                </div>
            </div>
        </section>
    )
}
