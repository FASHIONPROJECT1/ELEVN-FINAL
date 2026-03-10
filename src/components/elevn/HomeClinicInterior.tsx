import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const MONO = '"Roboto Mono", "Courier New", monospace'

export default function HomeClinicInterior({ photoUrl }: { photoUrl: string }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1, 1.02])
    const [hovered, setHovered] = useState(false)

    return (
        <section style={{ width: "100%", padding: "clamp(4px, 0.5vw, 8px) clamp(16px, 2vw, 24px)", boxSizing: "border-box", background: "#FAF9F7" }}>
            <div
                ref={ref}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="clip-round"
                style={{ maxWidth: 1440, margin: "0 auto", aspectRatio: "21/9", position: "relative", background: "#9a9080", cursor: "pointer" }}
            >
                <motion.div style={{ position: "absolute", inset: "-5%", scale, transformOrigin: "center center" }}>
                    {photoUrl ? (
                        <img src={photoUrl} alt="ELEVN clinic interior" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", display: "block", transform: hovered ? "scale(1.03)" : "scale(1)", transition: "transform 0.8s ease" }} />
                    ) : null}
                </motion.div>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(30,28,24,0.3) 0%, rgba(30,28,24,0.05) 40%)", zIndex: 1 }} />
                <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src="/images/logo-wordmark.svg" alt="ELEVN" style={{ height: "clamp(40px, 12vw, 160px)", width: "auto", opacity: 0.85, filter: "brightness(0) invert(1)" }} />
                </div>
                <div style={{ position: "absolute", bottom: "clamp(16px, 2.5vw, 32px)", left: "clamp(16px, 2.5vw, 32px)", zIndex: 3 }}>
                    <p style={{ fontFamily: MONO, fontSize: "clamp(8px, 0.65vw, 9px)", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", margin: "0 0 4px" }}>OUR SPACE</p>
                    <p style={{ fontFamily: FONT, fontSize: "clamp(12px, 1.2vw, 18px)", fontWeight: 400, letterSpacing: "0.03em", color: "rgba(255,255,255,0.85)", margin: 0 }}>Where precision meets comfort.</p>
                </div>
            </div>
        </section>
    )
}
