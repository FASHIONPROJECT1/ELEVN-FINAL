import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const MONO = '"Roboto Mono", "Courier New", monospace'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const CARDS = [
    { label: "About Us", href: "/clinic", image: "/images/nav-aboutus.jpg", desc: "Our story & team" },
    { label: "Treatments", href: "/treatments", image: "/images/nav-treatments.png", desc: "What we offer" },
    { label: "Bookings", href: "/bookings", image: "/images/nav-bookings.jpg", desc: "Start your journey" },
]

export default function HomeNavCards() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-8%" })

    return (
        <section style={{ background: "#FAF9F7", width: "100%", padding: "clamp(16px, 2vw, 32px) clamp(16px, 2vw, 24px) clamp(48px, 6vw, 72px)", boxSizing: "border-box" }}>
            <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: EASE }}
                    style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(30,28,24,0.35)", margin: "0 0 clamp(20px, 2.5vw, 32px)", textAlign: "center" }}
                >
                    EXPLORE
                </motion.p>
                <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(10px, 1.2vw, 20px)" }}>
                    {CARDS.map((card, i) => (
                        <NavCard key={card.label} card={card} index={i} inView={inView} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function NavCard({ card, index, inView }: { card: typeof CARDS[0]; index: number; inView: boolean }) {
    const [hovered, setHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: index * 0.12 }}
        >
            <Link
                to={card.href}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{ display: "block", position: "relative", overflow: "hidden", borderRadius: 16, aspectRatio: "16/9", textDecoration: "none" }}
            >
                <img
                    src={card.image}
                    alt={card.label}
                    style={{
                        width: "100%", height: "100%", objectFit: "cover",
                        transform: hovered ? "scale(1.05)" : "scale(1)",
                        transition: "transform 0.8s ease",
                    }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.05) 55%)" }} />
                <div style={{ position: "absolute", bottom: "clamp(14px, 2vw, 24px)", left: "clamp(14px, 2vw, 24px)" }}>
                    <span style={{
                        fontFamily: FONT, fontSize: "clamp(14px, 1.5vw, 20px)", fontWeight: 400,
                        letterSpacing: "0.03em", color: "#FFFFFF", display: "block", marginBottom: 4,
                    }}>
                        {card.label}
                    </span>
                    <span style={{
                        fontFamily: MONO, fontSize: "clamp(7px, 0.6vw, 9px)",
                        letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)",
                    }}>
                        {card.desc}
                    </span>
                </div>
            </Link>
        </motion.div>
    )
}
