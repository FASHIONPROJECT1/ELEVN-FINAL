import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useIsMobile } from "@/hooks/use-mobile"

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

interface ClinicTeamProps {
    accentPhoto?: string
    vasePhoto?: string
    clinicPhoto1?: string
    clinicPhoto2?: string
    productsPhoto?: string
}

export default function ClinicTeam({ accentPhoto, vasePhoto, clinicPhoto1, clinicPhoto2, productsPhoto }: ClinicTeamProps) {
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
    const isMobile = useIsMobile()

    return (
        <section ref={ref} style={{ background: "#FAF9F7", width: "100%", padding: "clamp(80px, 10vw, 140px) clamp(16px, 2vw, 24px)", boxSizing: "border-box" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(8px, 2vw, 40px)" }}>
                {/* Section intro + vase photo side by side */}
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 0.7fr", gap: isMobile ? 32 : "clamp(32px, 5vw, 64px)", alignItems: "start", marginBottom: "clamp(64px, 8vw, 120px)" }}>
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

                {/* Chapter 1: Holistic Intelligence */}
                <div style={{ marginBottom: "clamp(60px, 8vw, 100px)" }}>
                    <ChapterBlock chapter={CHAPTERS[0]} index={0} />
                </div>

                {/* Clinic photo 1 — wide landscape with label */}
                {clinicPhoto1 && (
                    <div style={{ margin: "0 0 clamp(60px, 8vw, 100px)" }}>
                        <WideParallaxInline
                            url={clinicPhoto1}
                            alt="ELEVN clinic interior"
                            label="THE CLINIC"
                            caption="Where comfort meets clinical precision."
                        />
                    </div>
                )}

                {/* Chapter 2: Beyond the Surface */}
                <div style={{ marginBottom: "clamp(60px, 8vw, 100px)" }}>
                    <ChapterBlock chapter={CHAPTERS[1]} index={1} />
                </div>

                {/* Crystal / diamond photo — with logo overlay */}
                {accentPhoto && (
                    <div
                        ref={imgRef}
                        className="clip-round"
                        onMouseEnter={() => setCrystalHovered(true)}
                        onMouseLeave={() => setCrystalHovered(false)}
                        style={{ margin: "0 auto clamp(60px, 8vw, 100px)", aspectRatio: "16/9", maxWidth: 1200, position: "relative", background: "#FAF9F7", overflow: "hidden", cursor: "default" }}
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

                {/* Chapter 3: A New Standard */}
                <div style={{ marginBottom: "clamp(60px, 8vw, 100px)" }}>
                    <ChapterBlock chapter={CHAPTERS[2]} index={2} />
                </div>

                {/* Clinic photo 2 — wide landscape with label */}
                {clinicPhoto2 && (
                    <div style={{ margin: "0 0 clamp(60px, 8vw, 100px)" }}>
                        <WideParallaxInline
                            url={clinicPhoto2}
                            alt="ELEVN treatment room"
                            label="PERSONALIZED CARE"
                            caption="Every protocol begins with listening."
                        />
                    </div>
                )}

                {/* Chapter 4: Consciously Chosen */}
                <div style={{ marginBottom: "clamp(60px, 8vw, 100px)" }}>
                    <ChapterBlock chapter={CHAPTERS[3]} index={3} />
                </div>

                {/* Treatments & Products showcase at the end */}
                {productsPhoto && <ProductsShowcase url={productsPhoto} isMobile={isMobile} />}
            </div>
        </section>
    )
}

/* ── Wide landscape parallax photo (16:7 aspect) ── */
function WideParallaxInline({ url, alt, label, caption }: { url: string; alt: string; label?: string; caption?: string }) {
    const ref = useRef(null)
    const [hovered, setHovered] = useState(false)
    const inView = useInView(ref, { once: true, margin: "-15%" })
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
    const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.03])

    return (
        <div
            ref={ref}
            className="clip-round"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ maxWidth: 1200, margin: "0 auto", aspectRatio: "16/7", position: "relative", background: "#FAF9F7", overflow: "hidden", cursor: "default" }}
        >
            <motion.div
                animate={{ scale: hovered ? 1.04 : 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: "absolute", inset: "-6%", scale: imgScale, transformOrigin: "center center" }}
            >
                <img src={url} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", display: "block" }} />
            </motion.div>
            <motion.div
                animate={{ opacity: hovered ? 0 : 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(30,28,24,0.25) 100%)", zIndex: 1 }}
            />
            <div style={{ position: "absolute", bottom: "clamp(20px, 3vw, 40px)", left: "clamp(20px, 3vw, 40px)", zIndex: 2, display: "flex", flexDirection: "column", gap: 6 }}>
                {label && (
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.3 }} style={{ fontFamily: MONO, fontSize: "clamp(8px, 0.7vw, 10px)", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", margin: 0 }}>{label}</motion.p>
                )}
                {caption && (
                    <motion.p initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.4 }} style={{ fontFamily: FONT, fontSize: "clamp(14px, 1.4vw, 20px)", fontWeight: 400, letterSpacing: "0.01em", color: "rgba(255,255,255,0.9)", margin: 0 }}>{caption}</motion.p>
                )}
            </div>
        </div>
    )
}

/* ── Products showcase section at the bottom ── */
function ProductsShowcase({ url, isMobile }: { url: string; isMobile: boolean }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-10%" })
    const [hovered, setHovered] = useState(false)
    const [btnHover, setBtnHover] = useState(false)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
    const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1, 1.02])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE }}
            style={{ marginTop: "clamp(20px, 3vw, 40px)" }}
        >
            {/* Divider line */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, ease: EASE }}
                style={{ height: 1, background: "rgba(30,28,24,0.08)", transformOrigin: "center", maxWidth: 200, margin: "0 auto clamp(40px, 5vw, 64px)" }}
            />

            {/* Label */}
            <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
                style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(30,28,24,0.35)", textAlign: "center", margin: "0 0 clamp(12px, 1.5vw, 20px)" }}
            >
                TREATMENTS & PRODUCTS
            </motion.p>

            <motion.h3
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
                style={{ fontFamily: FONT, fontSize: "clamp(22px, 2.8vw, 38px)", fontWeight: 500, letterSpacing: "0.02em", color: "#1E1C18", textAlign: "center", margin: "0 0 clamp(12px, 1.5vw, 20px)", lineHeight: 1.2 }}
            >
                Curated for Results
            </motion.h3>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
                style={{ fontFamily: FONT, fontSize: "clamp(14px, 1.2vw, 17px)", fontWeight: 300, lineHeight: 1.8, color: "rgba(30,28,24,0.55)", textAlign: "center", maxWidth: 600, margin: "0 auto clamp(32px, 4vw, 48px)" }}
            >
                Every product in our collection has been rigorously selected by our medical and skin experts — scientifically validated formulations that complement your in-clinic protocols.
            </motion.p>

            {/* Product image */}
            <div
                className="clip-round"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{ maxWidth: 1200, margin: "0 auto", aspectRatio: isMobile ? "16/9" : "21/9", position: "relative", background: "#F5F4F0", overflow: "hidden", cursor: "default" }}
            >
                <motion.div
                    animate={{ scale: hovered ? 1.03 : 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: "absolute", inset: "-4%", scale: imgScale, transformOrigin: "center center" }}
                >
                    <img src={url} alt="ELEVN treatments and products" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center bottom", display: "block" }} />
                </motion.div>
                <motion.div
                    animate={{ opacity: hovered ? 0 : 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(245,244,240,0.1) 0%, rgba(245,244,240,0.3) 100%)", zIndex: 1 }}
                />
            </div>

            {/* CTA buttons */}
            <div style={{ textAlign: "center", marginTop: "clamp(28px, 3.5vw, 44px)" }}>
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
                    }}
                >
                    View All Treatments
                </Link>
            </div>
        </motion.div>
    )
}

function ChapterBlock({ chapter, index }: { chapter: typeof CHAPTERS[0]; index: number }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-12%" })
    const isEven = index % 2 === 0
    const isMobile = useIsMobile()

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE, delay: 0.05 }}
            style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : (isEven ? "1fr 1.4fr" : "1.4fr 1fr"),
                gap: isMobile ? 24 : "clamp(32px, 5vw, 80px)",
                alignItems: "start",
            }}
        >
            <div style={{ order: isMobile ? 0 : (isEven ? 0 : 1), paddingTop: 4 }}>
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

            <div style={{ order: isMobile ? 1 : (isEven ? 1 : 0) }}>
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
