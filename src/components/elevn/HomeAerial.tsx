import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const MONO = '"Roboto Mono", "Courier New", monospace'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function HomeAerial({ videoUrl }: { videoUrl: string; logoUrl?: string }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-10%" })

    return (
        <section style={{ width: "100%", padding: "clamp(4px, 0.5vw, 8px) clamp(16px, 2vw, 24px)", boxSizing: "border-box", background: "#FAF9F7" }}>
            <div ref={ref} style={{ maxWidth: 1440, margin: "0 auto" }}>
                <div style={{ textAlign: "center", padding: "clamp(48px, 6vw, 80px) clamp(16px, 3vw, 48px) clamp(36px, 4vw, 52px)" }}>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : {}}
                        transition={{ duration: 1, ease: EASE }}
                        style={{ width: 40, height: 1, background: "rgba(30,28,24,0.15)", margin: "0 auto 24px", transformOrigin: "center" }}
                    />
                    <motion.p initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.05 }} style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(30,28,24,0.35)", margin: "0 0 18px" }}>THE SETTING</motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: EASE, delay: 0.12 }} style={{ fontFamily: FONT, fontSize: "clamp(22px, 3vw, 38px)", fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase", color: "#1E1C18", margin: "0 0 16px", lineHeight: 1.15 }}>A Sanctuary Above the City.</motion.h2>
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.2 }} style={{ fontFamily: FONT, fontSize: "clamp(13px, 1.1vw, 15px)", fontWeight: 300, lineHeight: 1.75, color: "rgba(30,28,24,0.5)", margin: "0 auto", maxWidth: 520 }}>
                        Overlooking the rooftops and spires of Zürich's historic Altstadt, ELEVN occupies a space where the rhythm of the city softens into stillness. Every detail — from the light to the view — is part of the experience.
                    </motion.p>
                </div>

                <div className="clip-round" style={{ position: "relative", height: "clamp(300px, 50vw, 600px)", background: "#FAF9F7" }}>
                    {videoUrl ? (
                        <video autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
                            <source src={videoUrl} type="video/mp4" />
                        </video>
                    ) : null}
                    <div style={{ position: "absolute", inset: 0, background: "rgba(245,242,236,0.1)", zIndex: 0, pointerEvents: "none" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,18,14,0.0) 0%, rgba(20,18,14,0.0) 40%, rgba(20,18,14,0.25) 70%, rgba(20,18,14,0.5) 100%)", zIndex: 1, pointerEvents: "none" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2, padding: "clamp(20px, 3vw, 36px)" }}>
                        <motion.p initial={{ opacity: 0, y: 6 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.2, ease: EASE, delay: 0.3 }} style={{ fontFamily: MONO, fontSize: "clamp(8px, 0.65vw, 9px)", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", margin: "0 0 6px" }}>AERIAL VIEW</motion.p>
                        <motion.p initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.2, ease: EASE, delay: 0.4 }} style={{ fontFamily: FONT, fontSize: "clamp(14px, 1.6vw, 22px)", fontWeight: 400, letterSpacing: "0.03em", color: "rgba(255,255,255,0.9)", margin: 0 }}>Where Lake Meets City</motion.p>
                    </div>
                </div>
            </div>
        </section>
    )
}
