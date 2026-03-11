import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const MONO = '"Roboto Mono", "Courier New", monospace'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

interface TreatmentsShowcaseProps {
    photoUrl: string
    productsPhotoUrl: string
}

export default function TreatmentsShowcase({ photoUrl, productsPhotoUrl }: TreatmentsShowcaseProps) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-10%" })
    const isMobile = useIsMobile()

    return (
        <section ref={ref} style={{ background: "#0A0A0A", padding: "clamp(60px, 8vw, 100px) clamp(16px, 3vw, 48px)", boxSizing: "border-box" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, ease: EASE }}
                    style={{ width: 40, height: 1, background: "rgba(255,255,255,0.1)", margin: "0 auto clamp(36px, 4vw, 56px)", transformOrigin: "center" }}
                />

                {/* Label */}
                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: EASE }}
                    style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", textAlign: "center", margin: "0 0 clamp(12px, 1.5vw, 20px)" }}
                >
                    OUR TREATMENTS
                </motion.p>

                <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
                    style={{ fontFamily: FONT, fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 500, letterSpacing: "0.03em", color: "#FFFFFF", textAlign: "center", margin: "0 0 clamp(12px, 1.5vw, 20px)", lineHeight: 1.2 }}
                >
                    Precision in Every Detail
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
                    style={{ fontFamily: FONT, fontSize: "clamp(14px, 1.2vw, 16px)", fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.4)", textAlign: "center", maxWidth: 560, margin: "0 auto clamp(36px, 4vw, 56px)" }}
                >
                    Advanced technologies guided by expert hands — every session is designed around your unique biology, delivering measurable results that compound over time.
                </motion.p>

                {/* Two photos side by side on desktop, stacked on mobile */}
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 16 : "clamp(12px, 1.5vw, 20px)" }}>
                    <ShowcaseImage url={photoUrl} alt="ELEVN treatment session" label="IN SESSION" delay={0.2} />
                    <ShowcaseImage url={productsPhotoUrl} alt="ELEVN curated products" label="CURATED PRODUCTS" delay={0.35} />
                </div>
            </div>
        </section>
    )
}

function ShowcaseImage({ url, alt, label, delay }: { url: string; alt: string; label: string; delay: number }) {
    const ref = useRef(null)
    const [hovered, setHovered] = useState(false)
    const inView = useInView(ref, { once: true, margin: "-10%" })
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
    const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.03])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay }}
            className="clip-round"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ aspectRatio: "16/10", position: "relative", background: "#111", overflow: "hidden", cursor: "default" }}
        >
            <motion.div
                animate={{ scale: hovered ? 1.04 : 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: "absolute", inset: "-5%", scale: imgScale, transformOrigin: "center center" }}
            >
                <img src={url} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", display: "block" }} />
            </motion.div>
            <motion.div
                animate={{ opacity: hovered ? 0 : 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.4) 100%)", zIndex: 1 }}
            />
            <div style={{ position: "absolute", bottom: "clamp(16px, 2vw, 28px)", left: "clamp(16px, 2vw, 28px)", zIndex: 2 }}>
                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: EASE, delay: delay + 0.2 }}
                    style={{ fontFamily: MONO, fontSize: "clamp(8px, 0.7vw, 10px)", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", margin: 0 }}
                >
                    {label}
                </motion.p>
            </div>
        </motion.div>
    )
}
