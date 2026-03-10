import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const MONO = '"Roboto Mono", "Courier New", monospace'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const CHAPTERS = [
    {
        label: "HOLISTIC INTELLIGENCE™",
        heading: "Closing the Gap",
        body: "Holistic Intelligence™ is Elevn's Skin Expert approach — closing the gap between aesthetic medicine and traditional cosmetics, to create results that are natural, lasting, and truly elevated.",
    },
    {
        label: "OUR SKIN EXPERTS",
        heading: "Beyond the Surface",
        body: "Led by Skin Experts — specialists in advanced skin, body, and hair health — ELEVN bridges the gap between purely dermatological, pharmaceutical, and superficial cosmetic treatments.",
    },
    {
        label: "OUR MEDICAL EXPERTS",
        heading: "A New Standard in Aesthetic Care",
        body: "Our specialized practitioners are creating a new standard in aesthetic treatments — combining inner wellness, personalized care, and long-term skin regeneration beyond Botox and fillers. Our approach integrates collagen induction therapies with advanced diagnostic methods and a thorough review of each individual's health background to develop targeted, long-term solutions.",
    },
    {
        label: "CONSCIOUSLY CHOSEN",
        heading: "Science as Selection Criteria",
        body: "At ELEVN, we select only scientifically validated and biocompatible materials to ensure safety and efficacy. Each ingredient and technology is chosen for its proven regenerative impact on skin, hair, and body. This commitment to precise materials reflects our philosophy: Intelligent Beauty, rooted in science and guided by care.",
    },
]

export default function ClinicTeam({ accentPhoto, vasePhoto, womanPhoto1, womanPhoto2 }: { accentPhoto?: string; vasePhoto?: string; womanPhoto1?: string; womanPhoto2?: string }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-10%" })
    const imgRef = useRef(null)
    const vaseRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] })
    const { scrollYProgress: vaseSP } = useScroll({ target: vaseRef, offset: ["start end", "end start"] })
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.03])
    const vaseScale = useTransform(vaseSP, [0, 0.5, 1], [1.06, 1, 1.03])
    const crystalInView = useInView(imgRef, { once: true, margin: "-15%" })
    const vaseInView = useInView(vaseRef, { once: true, margin: "-15%" })
    const [vaseHovered, setVaseHovered] = useState(false)
    const [crystalHovered, setCrystalHovered] = useState(false)

    const firstHalf = CHAPTERS.slice(0, 2)
    const secondHalf = CHAPTERS.slice(2)

    return (
        <section ref={ref} style={{ background: "#FAF9F7", width: "100%", padding: "clamp(80px, 10vw, 140px) clamp(16px, 2vw, 24px)", boxSizing: "border-box" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(8px, 2vw, 40px)" }}>
                {/* Section intro + vase photo side by side */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 0.7fr", gap: "clamp(32px, 5vw, 64px)", alignItems: "start", marginBottom: "clamp(64px, 8vw, 120px)" }}>
                    <div>
                        <div style={{ marginBottom: "clamp(24px, 3vw, 40px)" }}>
                            <motion.p initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: EASE }} style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(30,28,24,0.35)", margin: "0 0 16px" }}>THE PHILOSOPHY</motion.p>
                            <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.1 }} style={{ height: 1, background: "rgba(30,28,24,0.12)", transformOrigin: "left", maxWidth: 200 }} />
                        </div>
                        <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.15 }} style={{ fontFamily: FONT, fontSize: "clamp(20px, 2.4vw, 32px)", fontWeight: 400, lineHeight: 1.45, color: "#1E1C18", margin: 0, letterSpacing: "-0.01em" }}>
                            A multidisciplinary collective united by a shared vision — intelligent, human-centred care that transcends conventional aesthetics.
                        </motion.p>
                    </div>
                    {/* Vase — labeled */}
                    {vasePhoto && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, ease: EASE, delay: 0.25 }}
                        >
                            <div
                                ref={vaseRef}
                                className="clip-round"
                                onMouseEnter={() => setVaseHovered(true)}
                                onMouseLeave={() => setVaseHovered(false)}
                                style={{ height: "clamp(280px, 36vw, 440px)", position: "relative", background: "#FAF9F7", overflow: "hidden", cursor: "default" }}
                            >
                                <motion.div
                                    animate={{ scale: vaseHovered ? 1.05 : 1 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    style={{ position: "absolute", inset: "-8%", scale: vaseScale, transformOrigin: "center center" }}
                                >
                                    <img src={vasePhoto} alt="ELEVN vessels" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
                                </motion.div>
                                <motion.div
                                    animate={{ opacity: vaseHovered ? 0 : 1 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(255,255,255,0.6) 100%)", zIndex: 1 }}
                                />
                                <motion.div
                                    animate={{ opacity: vaseHovered ? 0 : 1 }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    style={{ position: "absolute", bottom: "clamp(16px, 2vw, 28px)", left: "clamp(16px, 2vw, 28px)", zIndex: 2 }}
                                >
                                    <motion.p
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={vaseInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
                                        style={{ fontFamily: MONO, fontSize: "clamp(8px, 0.7vw, 10px)", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(30,28,24,0.5)", margin: "0 0 4px" }}
                                    >
                                        SELECTED WITH CARE
                                    </motion.p>
                                    <motion.p
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={vaseInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
                                        style={{ fontFamily: FONT, fontSize: "clamp(13px, 1.3vw, 18px)", fontWeight: 400, color: "rgba(30,28,24,0.7)", margin: 0 }}
                                    >
                                        Every detail, intentional.
                                    </motion.p>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Woman photo 1 — after text+vase intro */}
                {womanPhoto1 && (
                    <div style={{ margin: "clamp(40px, 6vw, 80px) 0", padding: "0" }}>
                        <LabeledParallaxInline
                            url={womanPhoto1}
                            alt="ELEVN skin expert"
                            height="clamp(350px, 55vw, 650px)"
                            label="THE SKIN EXPERTS"
                            caption="Where precision meets intuition."
                        />
                    </div>
                )}

                {/* First two chapters: Holistic Intelligence + Closing the Gap */}
                <div style={{ display: "flex", flexDirection: "column", gap: "clamp(60px, 8vw, 100px)" }}>
                    {firstHalf.map((ch, i) => (
                        <ChapterBlock key={i} chapter={ch} index={i} />
                    ))}
                </div>

                {/* Woman photo 2 — after Closing the Gap, before Beyond Surface */}
                {womanPhoto2 && (
                    <div style={{ margin: "clamp(40px, 6vw, 80px) 0", padding: "0" }}>
                        <LabeledParallaxInline
                            url={womanPhoto2}
                            alt="ELEVN care"
                            height="clamp(350px, 50vw, 600px)"
                            label="PERSONALIZED CARE"
                            caption="Every protocol begins with listening."
                        />
                    </div>
                )}

                {/* Crystal / diamond blue photo — with logo overlay */}
                {accentPhoto && (
                    <div
                        ref={imgRef}
                        className="clip-round"
                        onMouseEnter={() => setCrystalHovered(true)}
                        onMouseLeave={() => setCrystalHovered(false)}
                        style={{ margin: "clamp(60px, 8vw, 100px) auto", height: "clamp(350px, 50vw, 600px)", maxWidth: 1200, position: "relative", background: "#FAF9F7", overflow: "hidden", cursor: "default" }}
                    >
                        <motion.div
                            animate={{ scale: crystalHovered ? 1.05 : 1 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            style={{ position: "absolute", inset: "-8%", scale, transformOrigin: "center center" }}
                        >
                            <img src={accentPhoto} alt="ELEVN crystal" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
                        </motion.div>
                        <motion.div
                            animate={{ opacity: crystalHovered ? 0 : 1 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.15)", zIndex: 1 }}
                        />
                        <motion.div
                            animate={{ opacity: crystalHovered ? 0 : 1 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}
                        >
                            <motion.img
                                src="/images/logo-symbol.svg"
                                alt="ELEVN"
                                initial={{ opacity: 0, scale: 0.88 }}
                                animate={crystalInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.88 }}
                                transition={{ duration: 1.2, ease: EASE }}
                                style={{ height: "clamp(48px, 8vw, 90px)", width: "auto", filter: "brightness(0)" }}
                            />
                            <motion.p
                                initial={{ opacity: 0, y: 6 }}
                                animate={crystalInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
                                style={{ fontFamily: MONO, fontSize: "clamp(9px, 0.85vw, 12px)", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(30,28,24,0.45)", margin: 0 }}
                            >
                                THE ESSENCE OF CLARITY
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 6 }}
                                animate={crystalInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
                                style={{ fontFamily: FONT, fontSize: "clamp(18px, 2vw, 28px)", fontWeight: 300, color: "rgba(30,28,24,0.6)", margin: 0 }}
                            >
                                Transparency in everything we do.
                            </motion.p>
                        </motion.div>
                    </div>
                )}

                {/* Last two chapters */}
                <div style={{ display: "flex", flexDirection: "column", gap: "clamp(60px, 8vw, 100px)" }}>
                    {secondHalf.map((ch, i) => (
                        <ChapterBlock key={i + 2} chapter={ch} index={i + 2} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function LabeledParallaxInline({ url, alt, height, label, caption }: { url: string; alt: string; height: string; label?: string; caption?: string }) {
    const ref = useRef(null)
    const [hovered, setHovered] = useState(false)
    const inView = useInView(ref, { once: true, margin: "-15%" })
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
    const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.04])

    return (
        <div
            ref={ref}
            className="clip-round"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ maxWidth: 1200, margin: "0 auto", height, position: "relative", background: "#FAF9F7", overflow: "hidden", cursor: "default" }}
        >
            <motion.div
                animate={{ scale: hovered ? 1.05 : 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: "absolute", inset: "-8%", scale: imgScale, transformOrigin: "center center" }}
            >
                <img src={url} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
            </motion.div>
            <motion.div
                animate={{ opacity: hovered ? 0 : 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(255,255,255,0.65) 100%)", zIndex: 1 }}
            />
            <div style={{ position: "absolute", bottom: "clamp(24px, 3vw, 44px)", left: "clamp(24px, 3vw, 44px)", zIndex: 2, display: "flex", flexDirection: "column", gap: 8 }}>
                {label && (
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.3 }} style={{ fontFamily: MONO, fontSize: "clamp(8px, 0.7vw, 10px)", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(30,28,24,0.5)", margin: 0 }}>{label}</motion.p>
                )}
                {caption && (
                    <motion.p initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.4 }} style={{ fontFamily: FONT, fontSize: "clamp(14px, 1.4vw, 20px)", fontWeight: 400, letterSpacing: "0.01em", color: "rgba(30,28,24,0.75)", margin: 0 }}>{caption}</motion.p>
                )}
            </div>
        </div>
    )
}

function ChapterBlock({ chapter, index }: { chapter: typeof CHAPTERS[0]; index: number }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-12%" })
    const isEven = index % 2 === 0

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE, delay: 0.05 }}
            style={{
                display: "grid",
                gridTemplateColumns: isEven ? "1fr 1.4fr" : "1.4fr 1fr",
                gap: "clamp(32px, 5vw, 80px)",
                alignItems: "start",
            }}
        >
            <div style={{ order: isEven ? 0 : 1, paddingTop: 4 }}>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
                    style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.2em", color: "rgba(30,28,24,0.18)", display: "block", marginBottom: 20 }}
                >
                    {String(index + 1).padStart(2, "0")}
                </motion.span>
                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
                    style={{ fontFamily: MONO, fontSize: "clamp(8px, 0.7vw, 10px)", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(30,28,24,0.35)", margin: "0 0 24px" }}
                >
                    {chapter.label}
                </motion.p>
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
                    style={{ height: 1, background: "rgba(30,28,24,0.08)", transformOrigin: "left", maxWidth: 120 }}
                />
            </div>

            <div style={{ order: isEven ? 1 : 0 }}>
                <motion.h3
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
                    style={{ fontFamily: FONT, fontSize: "clamp(22px, 2.8vw, 38px)", fontWeight: 500, letterSpacing: "0.02em", color: "#1E1C18", margin: "0 0 20px", lineHeight: 1.2 }}
                >
                    {chapter.heading}
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
                    style={{ fontFamily: FONT, fontSize: "clamp(14px, 1.2vw, 17px)", fontWeight: 300, lineHeight: 1.8, color: "rgba(30,28,24,0.55)", margin: 0, maxWidth: 540 }}
                >
                    {chapter.body}
                </motion.p>
            </div>
        </motion.div>
    )
}
