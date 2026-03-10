import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const MONO = '"Roboto Mono", "Courier New", monospace'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const STEPS = [
    { num: "01", title: "Deep Diagnostics", subtitle: "COMPREHENSIVE ANALYSIS", body: "We look closer. Through advanced mapping and thorough health assessments, we uncover the unique blueprint of your wellbeing — skin, body, and beyond." },
    { num: "02", title: "Holistic Intelligence", subtitle: "EXPERT SYNTHESIS", body: "Science meets human insight. Our specialists connect the dots between your lifestyle, skin health, and long-term vitality to form a complete picture." },
    { num: "03", title: "The Realignment", subtitle: "LONG-TERM PLAN", body: "You receive a deeply personal protocol. No standardized treatments — only exactly what your body needs to heal and regenerate from within." },
]

export default function ClinicProcess({ photoUrl }: { photoUrl: string }) {
    const labelRef = useRef(null)
    const labelInView = useInView(labelRef, { once: true, margin: "-10%" })

    return (
        <section style={{ position: "relative", background: "#FAF9F7", width: "100%" }}>
            {/* Sticky background image */}
            <div style={{ position: "sticky", top: 0, height: "100vh", zIndex: 0 }}>
                <div style={{ position: "absolute", inset: "0 clamp(16px, 2vw, 24px)" }}>
                    <div className="clip-round" style={{ width: "100%", height: "100%", position: "relative", background: "#FAF9F7" }}>
                        {photoUrl ? (
                            <img src={photoUrl} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
                        ) : (
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #D8D4CF 0%, #C8C4BE 100%)" }} />
                        )}
                        <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.45)" }} />
                    </div>
                </div>
            </div>

            {/* Content overlay */}
            <div style={{ position: "relative", zIndex: 1, marginTop: "-100vh", padding: "clamp(100px, 12vw, 160px) clamp(40px, 6vw, 120px)", boxSizing: "border-box" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div ref={labelRef} style={{ marginBottom: "clamp(60px, 8vw, 100px)" }}>
                        <motion.p initial={{ opacity: 0, y: 10 }} animate={labelInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: EASE }} style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(30,28,24,0.4)", margin: "0 0 16px" }}>THE PROCESS</motion.p>
                        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={labelInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: EASE, delay: 0.1 }} style={{ fontFamily: FONT, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 500, letterSpacing: "0.03em", color: "#1E1C18", margin: 0, lineHeight: 1.15 }}>Three Steps to<br />Your Realignment.</motion.h2>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 3vw, 32px)", maxWidth: 580 }}>
                        {STEPS.map((step, i) => <ProcessCard key={i} step={step} index={i} />)}
                    </div>

                    <div style={{ height: "30vh" }} />
                </div>
            </div>
        </section>
    )
}

function ProcessCard({ step, index }: { step: typeof STEPS[0]; index: number }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-15%" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: index * 0.06 }}
            style={{
                background: "rgba(30,28,24,0.04)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(30,28,24,0.08)",
                borderRadius: 16,
                padding: "clamp(28px, 3.5vw, 44px)",
                display: "flex",
                gap: 28,
                alignItems: "flex-start",
            }}
        >
            <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: "50%", background: "rgba(30,28,24,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.08em", color: "rgba(30,28,24,0.4)" }}>{step.num}</span>
            </div>
            <div>
                <p style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(30,28,24,0.25)", margin: "0 0 10px" }}>{step.subtitle}</p>
                <h3 style={{ fontFamily: FONT, fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase", color: "#1E1C18", margin: "0 0 12px" }}>{step.title}</h3>
                <p style={{ fontFamily: FONT, fontSize: "clamp(13px, 1.1vw, 15px)", fontWeight: 300, lineHeight: 1.75, color: "rgba(30,28,24,0.55)", margin: 0 }}>{step.body}</p>
            </div>
        </motion.div>
    )
}
