import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const MONO = '"Roboto Mono", "Courier New", monospace'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const MISSION_TEXT = "ELEVN is a skin & longevity clinic specialising in scientifically driven, personalised treatment plans for skin, body, and hair — designed to activate the body's natural healing power at every age. Led by Skin Experts specialising in advanced skin, body, and hair health, ELEVN bridges the gap between purely dermatological, pharmaceutical, and superficial cosmetic treatments."

const BRAND_BELIEF = "True beauty begins within. The body is inherently programmed to repair itself. By enhancing youthful cell function and boosting collagen production, we help restore skin and cellular health — without relying on artificial solutions."

export default function HomeMission() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-10%" })

    return (
        <section ref={ref} style={{ background: "#FAF9F7", width: "100%", padding: "clamp(64px, 8vw, 120px) clamp(24px, 6vw, 120px)", boxSizing: "border-box" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <motion.p initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: EASE }} style={{ fontFamily: FONT, fontSize: "clamp(14px, 1.2vw, 17px)", fontWeight: 400, letterSpacing: "0.02em", color: "rgba(30,28,24,0.6)", margin: "0 0 24px" }}>Our mission</motion.p>
                <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.15 }} style={{ height: 1, background: "rgba(30,28,24,0.12)", transformOrigin: "left", marginBottom: 36 }} />
                <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: EASE, delay: 0.2 }} style={{ fontFamily: FONT, fontSize: "clamp(18px, 2.2vw, 28px)", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.55, color: "#1E1C18", margin: "0 0 28px", maxWidth: 1000 }}>{MISSION_TEXT}</motion.p>
                <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: EASE, delay: 0.35 }} style={{ fontFamily: FONT, fontSize: "clamp(14px, 1.3vw, 17px)", fontWeight: 300, letterSpacing: "0.01em", lineHeight: 1.7, color: "rgba(30,28,24,0.55)", margin: 0, maxWidth: 800 }}>{BRAND_BELIEF}</motion.p>
            </div>
        </section>
    )
}
