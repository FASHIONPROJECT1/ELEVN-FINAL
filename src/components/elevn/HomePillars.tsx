import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useIsMobile } from "@/hooks/use-mobile"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const MONO = '"Roboto Mono", "Courier New", monospace'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const DEFAULT_CARDS = [
    { title: "Precision\nDiagnostics", body: "Your journey begins with a comprehensive analysis of your unique biology — understanding your skin, body, and health at the deepest level." },
    { title: "Personalized\nProtocols", body: "Every treatment plan is custom-built around your lifestyle and goals. Care that adapts with you, continuously refined over time." },
    { title: "Long-Term\nRegeneration", body: "By stimulating natural collagen production and enhancing youthful cell function, our treatments work in harmony with your body." },
]

interface HomePillarsProps { photo4Url: string; photo5Url: string; photo6Url: string }

export default function HomePillars({ photo4Url, photo5Url, photo6Url }: HomePillarsProps) {
    const sectionRef = useRef(null)
    const inView = useInView(sectionRef, { once: true, margin: "-10%" })
    const photos = [photo4Url, photo5Url, photo6Url]
    const [btnHover, setBtnHover] = useState(false)
    const isMobile = useIsMobile()

    return (
        <section ref={sectionRef} style={{ background: "#FAF9F7", width: "100%", padding: "clamp(40px, 5vw, 64px) clamp(16px, 2vw, 24px)", boxSizing: "border-box" }}>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: EASE }} style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(30,28,24,0.35)", margin: "0 auto clamp(32px, 4vw, 48px)", maxWidth: 1440, textAlign: "center" }}>THE ELEVN METHOD</motion.p>
            <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 20 : "clamp(10px, 1.2vw, 20px)" }}>
                {DEFAULT_CARDS.map((card, i) => (
                    <PillarCard key={i} index={i} title={card.title} body={card.body} photoUrl={photos[i]} inView={inView} />
                ))}
            </div>
            {/* CTA button between pillars and Begin Your Journey */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
                style={{ textAlign: "center", marginTop: "clamp(40px, 5vw, 64px)" }}
            >
                <Link
                    to="/treatments"
                    onMouseEnter={() => setBtnHover(true)}
                    onMouseLeave={() => setBtnHover(false)}
                    style={{
                        display: "inline-block", fontFamily: FONT, fontSize: 11, fontWeight: 400,
                        letterSpacing: "0.18em", textTransform: "uppercase",
                        color: btnHover ? "#FFFFFF" : "#1E1C18",
                        backgroundColor: btnHover ? "#1E1C18" : "transparent",
                        border: "1px solid rgba(30,28,24,0.3)",
                        borderRadius: 28, padding: "14px 36px",
                        textDecoration: "none", transition: "all 0.35s ease", cursor: "pointer",
                        marginRight: 16,
                    }}
                >
                    Explore Treatments
                </Link>
                <Link
                    to="/shop"
                    style={{
                        display: "inline-block", fontFamily: FONT, fontSize: 11, fontWeight: 400,
                        letterSpacing: "0.16em", textTransform: "uppercase",
                        color: "rgba(30,28,24,0.5)",
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(30,28,24,0.15)",
                        paddingBottom: 3,
                    }}
                >
                    Shop Products
                </Link>
            </motion.div>
        </section>
    )
}

function PillarCard({ index, title, body, photoUrl, inView }: { index: number; title: string; body: string; photoUrl: string; inView: boolean }) {
    const [hovered, setHovered] = useState(false)
    return (
        <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: EASE, delay: index * 0.14 }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid rgba(30,28,24,0.06)", transition: "transform 0.4s ease, box-shadow 0.4s ease", transform: hovered ? "translateY(-6px)" : "translateY(0)", boxShadow: hovered ? "0 20px 60px rgba(30,28,24,0.08)" : "none", overflow: "hidden", cursor: "default" }}>
            <div style={{ width: "100%", aspectRatio: "4/5", overflow: "hidden" }}>
                {photoUrl ? <img src={photoUrl} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", transform: hovered ? "scale(1.04)" : "scale(1)", transition: "transform 0.8s ease" }} /> : <div style={{ width: "100%", height: "100%", background: `hsl(${30 + index * 15}, 10%, ${82 - index * 3}%)` }} />}
            </div>
            <div style={{ padding: "clamp(20px, 2.5vw, 32px)" }}>
                <p style={{ fontFamily: '"Roboto Mono", monospace', fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(30,28,24,0.35)", margin: "0 0 12px" }}>{String(index + 1).padStart(2, "0")}</p>
                <h3 style={{ fontFamily: FONT, fontSize: "clamp(16px, 1.8vw, 20px)", fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase", color: "#1E1C18", margin: "0 0 14px", lineHeight: 1.15, whiteSpace: "pre-line" }}>{title}</h3>
                <p style={{ fontFamily: FONT, fontSize: "clamp(12px, 1vw, 14px)", fontWeight: 300, letterSpacing: "0.01em", lineHeight: 1.7, color: "rgba(30,28,24,0.55)", margin: 0 }}>{body}</p>
            </div>
        </motion.div>
    )
}
