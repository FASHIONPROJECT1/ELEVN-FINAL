import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion"
import { useRef, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const MONO = '"Roboto Mono", "Courier New", monospace'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const ABOUT_TEXT = "ELEVN is a medically-led longevity clinic with a rigorously scientific approach. Our focus lies on evidence-based medicine, interdisciplinary thinking, and structured, responsible treatment processes."
const ABOUT_TEXT_2 = "Holistic Intelligence means the connection between precise diagnostics, a comprehensive understanding of physiological relationships, and patient-centred, professional care."

export default function ClinicDetails({ photo2Url, photo3Url, hidePhotos }: { photo2Url: string; photo3Url: string; hidePhotos?: boolean }) {
    const textRef = useRef(null)
    const textInView = useInView(textRef, { once: true, margin: "-10%" })
    const isMobile = useIsMobile()

    return (
        <div style={{ background: "#FAF9F7" }}>
            {/* About text — editorial split layout */}
            <div ref={textRef} style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(80px, 10vw, 140px) clamp(24px, 4vw, 64px)", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "0.4fr 1fr", gap: isMobile ? 24 : "clamp(32px, 5vw, 80px)", alignItems: "start" }}>
                <div>
                    <motion.p initial={{ opacity: 0, y: 8 }} animate={textInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: EASE }} style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(30,28,24,0.35)", margin: "0 0 16px" }}>ABOUT</motion.p>
                    <motion.div initial={{ scaleX: 0 }} animate={textInView ? { scaleX: 1 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.1 }} style={{ height: 1, background: "rgba(30,28,24,0.12)", transformOrigin: "left" }} />
                </div>
                <div>
                    <motion.p initial={{ opacity: 0, y: 16 }} animate={textInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: EASE, delay: 0.15 }} style={{ fontFamily: FONT, fontSize: "clamp(20px, 2.4vw, 32px)", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.45, color: "#1E1C18", margin: "0 0 24px" }}>
                        {ABOUT_TEXT}
                    </motion.p>
                    <motion.p initial={{ opacity: 0, y: 12 }} animate={textInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.25 }} style={{ fontFamily: FONT, fontSize: "clamp(15px, 1.3vw, 18px)", fontWeight: 300, lineHeight: 1.75, color: "rgba(30,28,24,0.55)", margin: 0 }}>
                        {ABOUT_TEXT_2}
                    </motion.p>
                </div>
            </div>

            {!hidePhotos && (
                <>
                    {/* Women photo 1 — labeled */}
                    <div style={{ padding: "0 clamp(16px, 2vw, 24px)" }}>
                        <LabeledParallax
                            url={photo2Url}
                            alt="ELEVN skin expert"
                            height="clamp(350px, 55vw, 650px)"
                            label="THE SKIN EXPERTS"
                            caption="Where precision meets intuition."
                        />
                    </div>

                    {/* Women photo 2 — labeled */}
                    <div style={{ padding: "clamp(8px, 1vw, 16px) clamp(16px, 2vw, 24px)" }}>
                        <LabeledParallax
                            url={photo3Url}
                            alt="ELEVN care"
                            height="clamp(350px, 50vw, 600px)"
                            label="PERSONALIZED CARE"
                            caption="Every protocol begins with listening."
                        />
                    </div>
                </>
            )}
        </div>
    )
}

export function LabeledParallax({ url, alt, height, label, caption, showLogo }: {
    url: string; alt: string; height: string; label?: string; caption?: string; showLogo?: boolean
}) {
    const ref = useRef(null)
    const [hovered, setHovered] = useState(false)
    const inView = useInView(ref, { once: true, margin: "-15%" })
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.04])

    return (
        <div
            ref={ref}
            className="clip-round"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ maxWidth: 1440, margin: "0 auto", height, position: "relative", background: "#FAF9F7", overflow: "hidden", cursor: "default" }}
        >
            <motion.div
                animate={{ scale: hovered ? 1.05 : 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: "absolute", inset: "-8%", scale, transformOrigin: "center center" }}
            >
                {url ? (
                    <img src={url} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
                ) : (
                    <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #E8E4DE 0%, #DDD8D0 100%)" }} />
                )}
            </motion.div>

            {/* White overlay — fades out on hover */}
            <motion.div
                animate={{ opacity: hovered ? 0 : 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(255,255,255,0.65) 100%)", zIndex: 1 }}
            />

            {/* Logo + label overlay */}
            <div style={{ position: "absolute", bottom: "clamp(24px, 3vw, 44px)", left: "clamp(24px, 3vw, 44px)", zIndex: 2, display: "flex", flexDirection: "column", gap: 8 }}>
                {showLogo && (
                    <motion.img
                        src="/images/logo-symbol.svg"
                        alt="ELEVN"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 0.85, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
                        style={{ height: "clamp(28px, 4vw, 44px)", width: "auto", filter: "brightness(0) invert(1)", marginBottom: 4 }}
                    />
                )}
                {label && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
                        style={{ fontFamily: MONO, fontSize: "clamp(8px, 0.7vw, 10px)", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(30,28,24,0.5)", margin: 0 }}
                    >
                        {label}
                    </motion.p>
                )}
                {caption && (
                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
                        style={{ fontFamily: FONT, fontSize: "clamp(14px, 1.4vw, 20px)", fontWeight: 400, letterSpacing: "0.01em", color: "rgba(30,28,24,0.75)", margin: 0 }}
                    >
                        {caption}
                    </motion.p>
                )}
            </div>
        </div>
    )
}
