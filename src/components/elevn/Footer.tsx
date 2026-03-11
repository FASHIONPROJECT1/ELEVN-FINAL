import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Link } from "react-router-dom"
import { useIsMobile } from "@/hooks/use-mobile"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const MONO = '"Roboto Mono", "Courier New", monospace'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Footer() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-60px" })
    const isMobile = useIsMobile()

    return (
        <footer ref={ref} style={{ background: "#E8E4DE", padding: "clamp(64px, 8vw, 100px) clamp(24px, 5vw, 80px) 48px", boxSizing: "border-box", width: "100%" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE }} style={{ maxWidth: 1440, margin: "0 auto" }}>
                <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: isMobile ? 40 : 48, marginBottom: 64 }}>
                    <div>
                        <img src="/images/logo-symbol.svg" alt="ELEVN" style={{ height: 32, width: "auto", opacity: 0.7, marginBottom: 12 }} />
                        <span style={{ fontFamily: FONT, fontSize: 24, fontWeight: 700, letterSpacing: "0.08em", color: "#1E1C18", display: "block", marginBottom: 10 }}>ELEVN</span>
                        <p style={{ fontFamily: MONO, fontSize: 9, fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(30,28,24,0.35)", lineHeight: 1.8, margin: "0 0 24px" }}>
                            Intelligent Beauty<br />Rooted in Science · Guided by Care
                        </p>
                        <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                            <a href="https://www.instagram.com/elevn11.clinic/" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(30,28,24,0.45)", fontSize: 13, textDecoration: "none", fontFamily: MONO, letterSpacing: "0.1em" }}>INSTAGRAM</a>
                        </div>
                        <Link to="/bookings" style={{ display: "inline-block", fontFamily: FONT, fontSize: 10, fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1E1C18", border: "1px solid rgba(30,28,24,0.2)", borderRadius: 24, padding: "11px 24px", textDecoration: "none" }}>
                            Book a Consultation
                        </Link>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 32 : "clamp(32px, 5vw, 80px)" }}>
                        <div>
                            <FooterHeading>PAGES</FooterHeading>
                            <FooterLink label="Home" href="/" />
                            <FooterLink label="About Us" href="/clinic" />
                            <FooterLink label="Treatments" href="/treatments" />
                            <FooterLink label="Shop" href="/shop" />
                        </div>
                        <div>
                            <FooterHeading>CONTACT</FooterHeading>
                            <FooterLink label="hello@elevn.ch" href="mailto:hello@elevn.ch" />
                            <FooterLink label="078 615 0852" href="tel:+41786150852" />
                            <FooterLink label="Book" href="/bookings" />
                        </div>
                        <div>
                            <FooterHeading>LOCATION</FooterHeading>
                            <p style={{ fontFamily: FONT, fontSize: 13, fontWeight: 300, letterSpacing: "0.03em", color: "rgba(30,28,24,0.5)", margin: "0 0 8px", lineHeight: 1.6 }}>
                                Fraumünsterstrasse 11<br />8001 Zürich<br />Switzerland
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{ borderTop: "1px solid rgba(30,28,24,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                    <span style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.1em", color: "rgba(30,28,24,0.25)" }}>© 2026 ELEVN · ALL RIGHTS RESERVED</span>
                    <span style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.1em", color: "rgba(30,28,24,0.18)" }}>INTELLIGENT BEAUTY</span>
                </div>
            </motion.div>
        </footer>
    )
}

function FooterHeading({ children }: { children: React.ReactNode }) {
    return <p style={{ fontFamily: '"Roboto Mono", "Courier New", monospace', fontSize: 9, fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(30,28,24,0.28)", margin: "0 0 18px" }}>{children}</p>
}

function FooterLink({ label, href }: { label: string; href: string }) {
    const isExternal = href.startsWith("mailto:") || href.startsWith("tel:")
    const style: React.CSSProperties = { display: "block", fontFamily: '"n27", "Helvetica Neue", Arial, sans-serif', fontSize: 13, fontWeight: 300, letterSpacing: "0.03em", color: "rgba(30,28,24,0.5)", textDecoration: "none", marginBottom: 12, transition: "color 0.2s ease" }
    if (isExternal) return <a href={href} style={style}>{label}</a>
    return <Link to={href} style={style}>{label}</Link>
}
