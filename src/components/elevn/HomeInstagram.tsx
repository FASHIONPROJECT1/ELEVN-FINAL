import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const MONO = '"Roboto Mono", "Courier New", monospace'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const PHOTOS = [
    "/images/insta-1.jpg",
    "/images/insta-2.jpg",
    "/images/insta-4.png",
]

export default function HomeInstagram() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-8%" })
    const isMobile = useIsMobile()

    return (
        <section ref={ref} style={{ background: "#FAF9F7", width: "100%", padding: "clamp(40px, 5vw, 64px) clamp(16px, 2vw, 24px)", boxSizing: "border-box" }}>
            <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "clamp(24px, 3vw, 36px)" }}>
                    <motion.p initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: EASE }} style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(30,28,24,0.4)", margin: "0 0 8px" }}>Follow us</motion.p>
                    <motion.a href="https://www.instagram.com/elevn11.clinic/" target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: EASE, delay: 0.1 }} style={{ fontFamily: FONT, fontSize: "clamp(14px, 1.5vw, 18px)", fontWeight: 400, letterSpacing: "0.02em", color: "#1E1C18", textDecoration: "none" }}>@elevn11.clinic</motion.a>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 10 : "clamp(8px, 1vw, 14px)" }}>
                    {PHOTOS.map((photo, i) => (
                        <InstaPhoto key={i} photo={photo} index={i} inView={inView} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function InstaPhoto({ photo, index, inView }: { photo: string; index: number; inView: boolean }) {
    const [hovered, setHovered] = useState(false)

    return (
        <motion.a
            href="https://www.instagram.com/elevn11.clinic/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: index * 0.08 }}
            style={{ aspectRatio: "1", overflow: "hidden", borderRadius: 14, position: "relative", display: "block" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.8s ease" }} />
            {/* Logo overlay on hover */}
            <div style={{
                position: "absolute", inset: 0,
                background: "rgba(30,28,24,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                opacity: hovered ? 1 : 0,
                transition: "opacity 0.4s ease",
                pointerEvents: "none",
            }}>
                <img src="/images/logo-symbol.svg" alt="ELEVN" style={{ height: "28%", width: "auto", filter: "brightness(0) invert(1)", opacity: 0.9 }} />
            </div>
        </motion.a>
    )
}
