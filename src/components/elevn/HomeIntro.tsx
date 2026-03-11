import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useIsMobile } from "@/hooks/use-mobile"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const MONO = '"Roboto Mono", "Courier New", monospace'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

interface HomeIntroProps { videoUrl: string; photo1Url: string; photo2Url: string }

export default function HomeIntro({ videoUrl, photo1Url, photo2Url }: HomeIntroProps) {
    const textRef = useRef(null)
    const textInView = useInView(textRef, { once: true, margin: "-15%" })
    const [hoverIdx, setHoverIdx] = useState<number | null>(null)
    const isMobile = useIsMobile()

    return (
        <section style={{ background: "#FAF9F7", width: "100%", padding: "clamp(40px, 5vw, 64px) clamp(16px, 2vw, 24px)", boxSizing: "border-box", overflow: "hidden" }}>
            <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(8px, 3vw, 56px)" }}>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 12 : "clamp(10px, 1.2vw, 16px)" }}>
                    {/* Video - SKIN */}
                    <div
                        onMouseEnter={() => setHoverIdx(0)}
                        onMouseLeave={() => setHoverIdx(null)}
                        style={{ aspectRatio: "3/4", overflow: "hidden", borderRadius: 16, position: "relative", background: "#E8E4DE", cursor: "pointer" }}
                    >
                        {videoUrl ? (
                            <video autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transform: hoverIdx === 0 ? "scale(1.05)" : "scale(1)", transition: "transform 0.8s ease" }}>
                                <source src={videoUrl} type="video/mp4" />
                            </video>
                        ) : null}
                        <div style={{ position: "absolute", bottom: 14, left: 14, zIndex: 2 }}>
                            <span style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#fff", background: "rgba(30,28,24,0.5)", padding: "4px 10px", borderRadius: 3 }}>SKIN</span>
                        </div>
                    </div>

                    {/* Photo - HAIR */}
                    <motion.div
                        onMouseEnter={() => setHoverIdx(1)}
                        onMouseLeave={() => setHoverIdx(null)}
                        style={{ aspectRatio: "3/4", overflow: "hidden", borderRadius: 16, position: "relative", background: "#E8E4DE", cursor: "pointer" }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: EASE, delay: 0.1 }}
                    >
                        {photo2Url ? <img src={photo2Url} alt="Hair" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transform: hoverIdx === 1 ? "scale(1.05)" : "scale(1)", transition: "transform 0.8s ease" }} /> : null}
                        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src="/images/logo-symbol.svg" alt="ELEVN" style={{ height: "30%", width: "auto", filter: "brightness(0) invert(1)", opacity: 0.85 }} />
                        </div>
                        <div style={{ position: "absolute", bottom: 14, left: 14, zIndex: 2 }}>
                            <span style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#fff", background: "rgba(30,28,24,0.5)", padding: "4px 10px", borderRadius: 3 }}>HAIR</span>
                        </div>
                    </motion.div>

                    {/* Photo - BODY */}
                    <motion.div
                        onMouseEnter={() => setHoverIdx(2)}
                        onMouseLeave={() => setHoverIdx(null)}
                        style={{ aspectRatio: "3/4", overflow: "hidden", borderRadius: 16, position: "relative", background: "#E8E4DE", cursor: "pointer" }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
                    >
                        {photo1Url ? <img src={photo1Url} alt="Body" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", transform: hoverIdx === 2 ? "scale(1.05)" : "scale(1)", transition: "transform 0.8s ease" }} /> : null}
                        <div style={{ position: "absolute", bottom: 14, left: 14, zIndex: 2 }}>
                            <span style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#fff", background: "rgba(30,28,24,0.5)", padding: "4px 10px", borderRadius: 3 }}>BODY</span>
                        </div>
                    </motion.div>
                </div>

                {/* Text underneath */}
                <div ref={textRef} style={{ marginTop: "clamp(32px, 4vw, 48px)", maxWidth: 700 }}>
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={textInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: EASE }} style={{ fontFamily: MONO, fontSize: 9, fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(30,28,24,0.4)", margin: "0 0 14px" }}>OUR PHILOSOPHY</motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 16 }} animate={textInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: EASE, delay: 0.1 }} style={{ fontFamily: FONT, fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "#1E1C18", margin: "0 0 16px", lineHeight: 1.1 }}>A Quiet Realignment.</motion.h2>
                    <motion.p initial={{ opacity: 0, y: 12 }} animate={textInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.2 }} style={{ fontFamily: FONT, fontSize: "clamp(14px, 1.2vw, 16px)", fontWeight: 300, lineHeight: 1.75, color: "rgba(30,28,24,0.65)", margin: "0 0 20px", maxWidth: 520 }}>
                        ELEVN bridges scientific precision and holistic intelligence — a comprehensive understanding of skin, body and hair health forms the foundation of every treatment. We don't rebel against aging; we realign beauty with biology.
                    </motion.p>
                    <motion.div initial={{ opacity: 0 }} animate={textInView ? { opacity: 1 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}>
                        <Link to="/clinic" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: FONT, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1E1C18", textDecoration: "none", borderBottom: "1px solid rgba(30,28,24,0.25)", paddingBottom: 4 }}>
                            Our Approach <span style={{ fontSize: 14 }}>→</span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
