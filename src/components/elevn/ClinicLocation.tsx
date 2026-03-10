import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const MONO = '"Roboto Mono", "Courier New", monospace'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function ClinicLocation({ videoUrl }: { videoUrl: string }) {
    const ref = useRef(null)
    const badgeRef = useRef(null)
    const badgeInView = useInView(badgeRef, { once: false, margin: "-20%" })
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.04])
    const [btnHover, setBtnHover] = useState(false)

    return (
        <section style={{ width: "100%", padding: "clamp(8px, 1vw, 16px) clamp(16px, 2vw, 24px) clamp(40px, 5vw, 80px)", boxSizing: "border-box", background: "#FAF9F7" }}>
            <div ref={ref} className="clip-round" style={{ maxWidth: 1440, margin: "0 auto", height: "clamp(400px, 60vw, 700px)", position: "relative", background: "#FAF9F7" }}>
                <motion.div style={{ position: "absolute", inset: "-6%", scale, transformOrigin: "center center" }}>
                    {videoUrl ? (
                        <video autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}>
                            <source src={videoUrl} type="video/mp4" />
                        </video>
                    ) : (
                        <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #E8E4DE 0%, #DDD8D0 100%)" }} />
                    )}
                </motion.div>
                <div style={{ position: "absolute", inset: 0, background: "rgba(30,28,24,0.25)", zIndex: 1 }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(10,10,10,0.4) 100%)", zIndex: 1 }} />

                <div ref={badgeRef} style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
                    <motion.img
                        src="/images/logo-symbol.svg"
                        alt="ELEVN"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={badgeInView ? { opacity: 0.85, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 1.2, ease: EASE }}
                        style={{ height: "clamp(40px, 6vw, 64px)", width: "auto", filter: "brightness(0) invert(1)" }}
                    />
                    <motion.span
                        initial={{ opacity: 0, y: 6 }}
                        animate={badgeInView ? { opacity: 0.85, y: 0 } : { opacity: 0, y: 6 }}
                        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
                        style={{ fontFamily: FONT, fontSize: "clamp(16px, 2vw, 24px)", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#FFFFFF" }}
                    >
                        ELEVN
                    </motion.span>
                    <motion.p
                        initial={{ opacity: 0, y: 6 }}
                        animate={badgeInView ? { opacity: 0.55, y: 0 } : { opacity: 0, y: 6 }}
                        transition={{ duration: 1, ease: EASE, delay: 0.35 }}
                        style={{ fontFamily: MONO, fontSize: "clamp(9px, 0.8vw, 11px)", letterSpacing: "0.2em", textTransform: "uppercase", color: "#FFFFFF", margin: "4px 0 0" }}
                    >
                        FRAUMÜNSTERSTRASSE 11 · 8001 ZÜRICH
                    </motion.p>
                </div>

                <div style={{ position: "absolute", bottom: "clamp(24px, 3vw, 40px)", left: "50%", transform: "translateX(-50%)", zIndex: 3 }}>
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={badgeInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}>
                        <Link
                            to="/bookings"
                            onMouseEnter={() => setBtnHover(true)}
                            onMouseLeave={() => setBtnHover(false)}
                            style={{
                                display: "inline-block", fontFamily: FONT, fontSize: 10, fontWeight: 400,
                                letterSpacing: "0.18em", textTransform: "uppercase",
                                color: btnHover ? "#1E1C18" : "#FFFFFF",
                                backgroundColor: btnHover ? "#FFFFFF" : "rgba(255,255,255,0.08)",
                                border: "1px solid rgba(255,255,255,0.35)",
                                borderRadius: 28, padding: "13px 32px",
                                textDecoration: "none", transition: "all 0.35s ease", cursor: "pointer",
                                backdropFilter: "blur(8px)",
                            }}
                        >
                            Book a Visit
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
