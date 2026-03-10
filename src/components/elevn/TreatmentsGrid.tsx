import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const MONO = '"Roboto Mono", "Courier New", monospace'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const CATEGORIES = [
    {
        label: "SKIN",
        number: "01",
        title: "Advanced Skin Health",
        description: "From precision facials and LED phototherapy to microneedling and PRP — our skin protocols are designed to restore radiance, stimulate collagen, and reverse visible signs of aging at a cellular level.",
        treatments: ["Hydrafacial MD", "LED Phototherapy", "Microneedling + PRP", "Chemical Peels", "Laser Resurfacing", "Mesotherapy"],
    },
    {
        label: "HAIR",
        number: "02",
        title: "Hair Regeneration",
        description: "Using growth factors, PRP therapy, and advanced scalp diagnostics, we address hair thinning and loss at the root — literally. Treatments that activate dormant follicles and restore density over time.",
        treatments: ["PRP Hair Therapy", "Scalp Mesotherapy", "Growth Factor Infusion", "Laser Hair Stimulation", "Nutrient Infusion"],
    },
    {
        label: "BODY",
        number: "03",
        title: "Body Optimization",
        description: "From body contouring and IV drip therapy to cryotherapy and lymphatic drainage — treatments designed to sculpt, detoxify, and enhance your body's natural vitality from the inside out.",
        treatments: ["IV Drip Therapy", "Cryotherapy", "Body Contouring", "Lymphatic Drainage", "Infrared Sauna", "Hormone Optimization"],
    },
]

interface TreatmentsGridProps {
    video3Url: string
    video4Url: string
}

export default function TreatmentsGrid({ video3Url, video4Url }: TreatmentsGridProps) {
    return (
        <div style={{ background: "#0A0A0A" }}>
            {CATEGORIES.map((cat, i) => (
                <TreatmentCategory key={cat.label} category={cat} index={i} />
            ))}
            {/* Video + "Restore What Time Takes" below Body */}
            <HalfMediaSection videoUrl={video3Url} />
            {/* Shop CTA */}
            <ShopCTA />
            {/* Full-width black & white video */}
            <FullMediaSection videoUrl={video4Url} />
        </div>
    )
}

function TreatmentCategory({ category, index }: { category: typeof CATEGORIES[0]; index: number }) {
    const textRef = useRef(null)
    const textInView = useInView(textRef, { once: true, margin: "-10%" })
    const [btnHover, setBtnHover] = useState(false)
    const [shopHover, setShopHover] = useState(false)
    const isEven = index % 2 === 0

    return (
        <div style={{ padding: "0 clamp(16px, 3vw, 48px)" }}>
            <section ref={textRef} style={{ padding: "clamp(64px, 8vw, 110px) clamp(8px, 3vw, 60px)", maxWidth: 1200, margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 5vw, 80px)", alignItems: "start" }}>
                    <div style={{ order: isEven ? 0 : 1 }}>
                        <motion.p initial={{ opacity: 0, y: 8 }} animate={textInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: EASE }} style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", margin: "0 0 14px" }}>{category.number}</motion.p>
                        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={textInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: EASE, delay: 0.08 }} style={{ fontFamily: FONT, fontSize: "clamp(42px, 6vw, 76px)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.05)", margin: "0 0 8px", lineHeight: 1 }}>{category.label}</motion.h2>
                        <motion.h3 initial={{ opacity: 0, y: 14 }} animate={textInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: EASE, delay: 0.15 }} style={{ fontFamily: FONT, fontSize: "clamp(26px, 3.2vw, 40px)", fontWeight: 500, letterSpacing: "0.03em", color: "#FFFFFF", margin: "0 0 22px", lineHeight: 1.15 }}>{category.title}</motion.h3>
                        <motion.p initial={{ opacity: 0, y: 10 }} animate={textInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.22 }} style={{ fontFamily: FONT, fontSize: "clamp(14px, 1.2vw, 16px)", fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.5)", margin: "0 0 34px", maxWidth: 460 }}>{category.description}</motion.p>
                        <motion.div initial={{ opacity: 0, y: 8 }} animate={textInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: EASE, delay: 0.3 }} style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                            <Link to="/bookings" onMouseEnter={() => setBtnHover(true)} onMouseLeave={() => setBtnHover(false)} style={{ display: "inline-block", fontFamily: FONT, fontSize: 11, fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase", color: btnHover ? "#0A0A0A" : "#FFFFFF", backgroundColor: btnHover ? "#FFFFFF" : "transparent", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 28, padding: "13px 30px", textDecoration: "none", transition: "all 0.35s ease", cursor: "pointer" }}>Book {category.label} Treatment</Link>
                        </motion.div>
                    </div>
                    <div style={{ order: isEven ? 1 : 0 }}>
                        <motion.p initial={{ opacity: 0, y: 8 }} animate={textInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: EASE, delay: 0.1 }} style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", margin: "0 0 24px" }}>TREATMENTS</motion.p>
                        {category.treatments.map((t, ti) => (
                            <motion.div key={t} initial={{ opacity: 0, x: 10 }} animate={textInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, ease: EASE, delay: 0.15 + ti * 0.06 }} style={{ padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <span style={{ fontFamily: FONT, fontSize: "clamp(15px, 1.3vw, 18px)", fontWeight: 300, letterSpacing: "0.02em", color: "rgba(255,255,255,0.6)" }}>{t}</span>
                                <span style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.15em", color: "rgba(255,255,255,0.18)" }}>{category.number}.{String(ti + 1).padStart(2, "0")}</span>
                            </motion.div>
                        ))}
                        <motion.div initial={{ opacity: 0 }} animate={textInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, ease: EASE, delay: 0.5 }} style={{ paddingTop: 20 }}>
                            <Link to="/shop" onMouseEnter={() => setShopHover(true)} onMouseLeave={() => setShopHover(false)} style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: shopHover ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)", textDecoration: "none", transition: "color 0.3s ease", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 4 }}>Shop {category.label} Products →</Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

function HalfMediaSection({ videoUrl }: { videoUrl: string }) {
    const [mediaHover, setMediaHover] = useState(false)
    const logoRef = useRef(null)
    const logoInView = useInView(logoRef, { once: false, margin: "-15%" })

    return (
        <div style={{ padding: "0 clamp(16px, 3vw, 48px)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "clamp(28px, 4vw, 56px)", alignItems: "center", padding: "0 0 clamp(20px, 3vw, 40px)" }}>
                <div
                    className="clip-round"
                    onMouseEnter={() => setMediaHover(true)}
                    onMouseLeave={() => setMediaHover(false)}
                    style={{ aspectRatio: "2 / 1", position: "relative", background: "#0A0A0A" }}
                >
                    <motion.div
                        animate={{ scale: mediaHover ? 1.05 : 1 }}
                        transition={{ duration: 0.8, ease: EASE }}
                        style={{ position: "absolute", inset: 0 }}
                    >
                        {videoUrl && (
                            <video autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
                                <source src={videoUrl} type="video/mp4" />
                            </video>
                        )}
                    </motion.div>
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 50%, rgba(10,10,10,0.2) 100%)", zIndex: 1, pointerEvents: "none" }} />
                    {/* Logo - lower middle, bigger */}
                    <div ref={logoRef} style={{ position: "absolute", inset: 0, zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", paddingBottom: "clamp(24px, 4vw, 48px)", gap: 10, pointerEvents: "none" }}>
                        <motion.img
                            src="/images/logo-symbol.svg"
                            alt="ELEVN symbol"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={logoInView ? { opacity: 0.85, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 1.2, ease: EASE }}
                            style={{ height: "clamp(50px, 9vw, 90px)", width: "auto", filter: "brightness(0) invert(1)" }}
                        />
                        <motion.img
                            src="/images/logo-wordmark.svg"
                            alt="ELEVN"
                            initial={{ opacity: 0, y: 6 }}
                            animate={logoInView ? { opacity: 0.55, y: 0 } : { opacity: 0, y: 6 }}
                            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
                            style={{ height: "clamp(12px, 2vw, 18px)", width: "auto", filter: "brightness(0) invert(1)" }}
                        />
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(20px, 2vw, 36px) 0" }}>
                    <p style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", margin: "0 0 20px" }}>THE PROCESS</p>
                    <h3 style={{ fontFamily: FONT, fontSize: "clamp(22px, 2.8vw, 34px)", fontWeight: 500, letterSpacing: "0.03em", color: "#FFFFFF", margin: "0 0 16px", lineHeight: 1.2 }}>Restore What Time Takes.</h3>
                    <p style={{ fontFamily: FONT, fontSize: "clamp(14px, 1.2vw, 16px)", fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.45)", margin: 0, maxWidth: 420 }}>
                        Each protocol is tailored to your unique health profile — combining advanced technologies with precision delivery systems that target regeneration at the cellular level.
                    </p>
                </div>
            </div>
        </div>
    )
}

function FullMediaSection({ videoUrl }: { videoUrl: string }) {
    const [mediaHover, setMediaHover] = useState(false)
    const logoRef = useRef(null)
    const logoInView = useInView(logoRef, { once: false, margin: "-15%" })

    return (
        <div style={{ padding: "clamp(20px, 3vw, 40px) clamp(16px, 3vw, 48px)" }}>
            <div style={{ padding: "0 clamp(0px, 0.5vw, 4px)" }}>
                <div
                    className="clip-round"
                    onMouseEnter={() => setMediaHover(true)}
                    onMouseLeave={() => setMediaHover(false)}
                    style={{ aspectRatio: "2 / 1", position: "relative", maxWidth: 1440, margin: "0 auto", background: "#0A0A0A" }}
                >
                    <motion.div
                        animate={{ scale: mediaHover ? 1.04 : 1 }}
                        transition={{ duration: 0.8, ease: EASE }}
                        style={{ position: "absolute", inset: 0 }}
                    >
                        {videoUrl && (
                            <video autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
                                <source src={videoUrl} type="video/mp4" />
                            </video>
                        )}
                    </motion.div>
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 50%, rgba(10,10,10,0.18) 100%)", zIndex: 1, pointerEvents: "none" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,10,0) 50%, rgba(10,10,10,0.3) 100%)", zIndex: 1, pointerEvents: "none" }} />
                    <div ref={logoRef} style={{ position: "absolute", inset: 0, zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                        <motion.img
                            src="/images/logo-symbol.svg"
                            alt="ELEVN symbol"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={logoInView ? { opacity: 0.8, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 1.2, ease: EASE }}
                            style={{ height: "clamp(50px, 10vw, 120px)", width: "auto", filter: "brightness(0) invert(1)" }}
                        />
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 4, padding: "clamp(20px, 3vw, 40px)" }}>
                        <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>03 · BODY</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ShopCTA() {
    return (
        <div style={{ padding: "0 clamp(16px, 3vw, 48px)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(48px, 6vw, 80px) clamp(8px, 3vw, 60px) 0", textAlign: "center" }}>
                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE }} style={{ width: 40, height: 1, background: "rgba(255,255,255,0.08)", margin: "0 auto 28px", transformOrigin: "center" }} />
                <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }} style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", margin: "0 0 16px" }}>ELEVN ESSENTIALS</motion.p>
                <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE, delay: 0.1 }} style={{ fontFamily: FONT, fontSize: "clamp(15px, 1.3vw, 17px)", fontWeight: 300, lineHeight: 1.75, color: "rgba(255,255,255,0.4)", margin: "0 auto 24px", maxWidth: 480 }}>
                    Extend your treatments at home with our curated line of medical-grade skincare, supplements, and recovery products.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}>
                    <Link to="/shop" style={{ fontFamily: FONT, fontSize: 11, fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: 4, transition: "color 0.3s ease" }}>Browse the Shop →</Link>
                </motion.div>
            </div>
        </div>
    )
}
