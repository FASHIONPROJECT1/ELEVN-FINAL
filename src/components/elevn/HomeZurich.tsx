import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const MONO = '"Roboto Mono", "Courier New", monospace'
const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function HomeZurich({ videoUrl }: { videoUrl: string }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-10%" })

    return (
        <section style={{ width: "100%", padding: "clamp(4px, 0.5vw, 8px) clamp(16px, 2vw, 24px)", boxSizing: "border-box", background: "#FAF9F7" }}>
            <div ref={ref} className="clip-round" style={{ maxWidth: 1440, margin: "0 auto", height: "clamp(300px, 50vw, 600px)", position: "relative", background: "#FAF9F7" }}>
                {videoUrl ? (
                    <video autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                ) : null}
                <div style={{ position: "absolute", inset: 0, background: "rgba(245,242,236,0.12)", zIndex: 0, pointerEvents: "none" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,18,14,0.0) 0%, rgba(20,18,14,0.0) 35%, rgba(20,18,14,0.3) 70%, rgba(20,18,14,0.6) 100%)", zIndex: 1, pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2, padding: "clamp(28px, 4vw, 52px)" }}>
                    <motion.p initial={{ opacity: 0, y: 6 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.2, ease: EASE }} style={{ fontFamily: MONO, fontSize: "clamp(8px, 0.65vw, 9px)", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", margin: "0 0 8px" }}>LOCATION</motion.p>
                    <motion.p initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.2, ease: EASE, delay: 0.1 }} style={{ fontFamily: FONT, fontSize: "clamp(18px, 2.2vw, 30px)", fontWeight: 400, letterSpacing: "0.03em", color: "#FFFFFF", margin: "0 0 8px" }}>Fraumünsterstrasse 11 · Zürich</motion.p>
                    <motion.p initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.2, ease: EASE, delay: 0.2 }} style={{ fontFamily: FONT, fontSize: "clamp(12px, 1vw, 14px)", fontWeight: 300, color: "rgba(255,255,255,0.65)", margin: 0, maxWidth: 420 }}>Steps from Paradeplatz and the shores of Lake Zürich.</motion.p>
                </div>
            </div>
        </section>
    )
}
