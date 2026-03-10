import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const MONO = '"Roboto Mono", "Courier New", monospace'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function HomeNewsletter() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-10%" })

    return (
        <section style={{ width: "100%", padding: "0 clamp(16px, 2vw, 24px) clamp(8px, 1vw, 16px)", boxSizing: "border-box", background: "#FAF9F7" }}>
            <div ref={ref} style={{ position: "relative", maxWidth: 1440, margin: "0 auto", overflow: "hidden", borderRadius: 20 }}>
                <img src="/images/newsletter-bg.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(30,28,24,0.35)" }} />
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: EASE }}
                    style={{
                        position: "relative", zIndex: 2,
                        padding: "clamp(60px, 8vw, 100px) clamp(32px, 5vw, 80px)",
                        display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
                    }}
                >
                    <p style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: "0 0 16px" }}>GET IN TOUCH</p>
                    <h3 style={{ fontFamily: FONT, fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 500, letterSpacing: "0.03em", color: "#FFFFFF", margin: "0 0 16px", lineHeight: 1.15 }}>We'd Love to Hear From You.</h3>
                    <p style={{ fontFamily: FONT, fontSize: "clamp(13px, 1.1vw, 15px)", fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: "0 0 32px", maxWidth: 480 }}>
                        Whether you have a question about our treatments, want to learn more about our approach, or are ready to begin — reach out directly. We're here for you.
                    </p>
                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
                        <a href="mailto:hello@elevn.ch" style={{ display: "inline-block", fontFamily: FONT, fontSize: 11, fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.35)", borderRadius: 28, padding: "12px 28px", textDecoration: "none", transition: "all 0.3s ease" }}>
                            hello@elevn.ch
                        </a>
                        <a href="tel:+41786150852" style={{ display: "inline-block", fontFamily: FONT, fontSize: 11, fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", textDecoration: "none", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
                            078 615 0852
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
