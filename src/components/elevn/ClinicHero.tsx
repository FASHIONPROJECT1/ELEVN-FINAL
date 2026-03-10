import { motion } from "framer-motion"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const MONO = '"Roboto Mono", "Courier New", monospace'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function ClinicHero({ photoUrl }: { photoUrl: string }) {
    return (
        <section style={{ width: "100%", background: "#FAF9F7", padding: "0 clamp(16px, 2vw, 24px) clamp(4px, 0.5vw, 8px)" }}>
            <div className="clip-round" style={{ maxWidth: 1440, margin: "0 auto", height: "clamp(500px, 70vh, 800px)", position: "relative", background: "#FAF9F7" }}>
                {photoUrl && (
                    <img src={photoUrl} alt="ELEVN clinic" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
                )}
                <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,0.32)" }} />
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 30%, rgba(10,10,10,0.25) 100%)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,10,0.05) 0%, transparent 30%, transparent 60%, rgba(10,10,10,0.4) 100%)" }} />

                <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 clamp(24px, 6vw, 80px)" }}>
                    {/* Actual SVG logo instead of text */}
                    <motion.img
                        src="/images/logo-symbol.svg"
                        alt="ELEVN"
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 0.9, scale: 1 }}
                        transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
                        style={{ height: "clamp(60px, 12vw, 140px)", width: "auto", filter: "brightness(0) invert(1)", marginBottom: 28 }}
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 0.75, y: 0 }}
                        transition={{ duration: 1, ease: EASE, delay: 0.5 }}
                        style={{ fontFamily: FONT, fontSize: "clamp(14px, 2vw, 26px)", fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase", color: "#FFFFFF", margin: "0 0 8px" }}
                    >
                        INTELLIGENT BEAUTY
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 0.45, y: 0 }}
                        transition={{ duration: 1, ease: EASE, delay: 0.65 }}
                        style={{ fontFamily: MONO, fontSize: "clamp(8px, 0.75vw, 10px)", fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase", color: "#FFFFFF", margin: 0 }}
                    >
                        ROOTED IN SCIENCE · GUIDED BY CARE
                    </motion.p>
                </div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    <span style={{ fontFamily: MONO, fontSize: 8, letterSpacing: "0.2em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>SCROLL</span>
                    <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} style={{ width: 1, height: 22, background: "rgba(255,255,255,0.25)" }} />
                </motion.div>
            </div>
        </section>
    )
}
