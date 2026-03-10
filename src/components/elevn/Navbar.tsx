import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useIsMobile } from "@/hooks/use-mobile"

const FONT = '"n27", "Helvetica Neue", Arial, sans-serif'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const linkStyle: React.CSSProperties = {
    fontFamily: FONT,
    fontSize: 11,
    fontWeight: 400,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#FFFFFF",
    textDecoration: "none",
    opacity: 0.75,
    transition: "opacity 0.2s ease",
    cursor: "pointer",
}

export default function Navbar({ logoUrl, forceOpaque }: { logoUrl?: string; forceOpaque?: boolean }) {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [bookHover, setBookHover] = useState(false)
    const isMobile = useIsMobile()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => { document.body.style.overflow = "" }
    }, [menuOpen])

    const navBg = forceOpaque ? "rgba(10,10,10,1)" : scrolled ? "rgba(10,10,10,0.95)" : "rgba(10,10,10,0.5)"

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 900,
                    height: 72,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    backgroundColor: navBg,
                    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
                    transition: "background-color 0.5s ease, border-color 0.5s ease",
                    padding: "0 clamp(20px, 4vw, 48px)",
                    boxSizing: "border-box",
                }}
            >
                {/* LEFT: Home, Clinic, Treatments — hidden on mobile */}
                {!isMobile && (
                    <div style={{
                        position: "absolute",
                        left: "clamp(20px, 4vw, 48px)",
                        display: "flex",
                        gap: "clamp(16px, 2vw, 32px)",
                        alignItems: "center",
                    }}>
                        <NavLink label="HOME" href="/" />
                        <NavLink label="CLINIC" href="/clinic" />
                        <NavLink label="TREATMENTS" href="/treatments" />
                    </div>
                )}

                {/* CENTER: Logo */}
                <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", zIndex: 901 }}>
                    {logoUrl ? (
                        <img src={logoUrl} alt="ELEVN" style={{ height: 30, width: "auto", filter: "brightness(0) invert(1)" }} />
                    ) : (
                        <span style={{ fontFamily: FONT, fontSize: 20, color: "#fff", letterSpacing: "0.08em" }}>1∧∧</span>
                    )}
                </Link>

                {/* RIGHT: Shop, Book — hidden on mobile */}
                {!isMobile && (
                    <div style={{
                        position: "absolute",
                        right: "clamp(20px, 4vw, 48px)",
                        display: "flex",
                        gap: "clamp(16px, 2vw, 28px)",
                        alignItems: "center",
                    }}>
                        <NavLink label="SHOP" href="/shop" />
                        <Link
                            to="/bookings"
                            onMouseEnter={() => setBookHover(true)}
                            onMouseLeave={() => setBookHover(false)}
                            style={{
                                fontFamily: FONT,
                                fontSize: 11,
                                fontWeight: 400,
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                color: bookHover ? "#0A0A0A" : "#FFFFFF",
                                backgroundColor: bookHover ? "#FFFFFF" : "transparent",
                                border: "1px solid rgba(255,255,255,0.6)",
                                padding: "9px 18px",
                                textDecoration: "none",
                                transition: "background 0.3s ease, color 0.3s ease",
                                cursor: "pointer",
                            }}
                        >
                            BOOK
                        </Link>
                    </div>
                )}

                {/* Mobile hamburger / close button */}
                {isMobile && (
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        style={{
                            position: "absolute",
                            right: 20,
                            background: "none",
                            border: "none",
                            color: "#fff",
                            fontSize: 22,
                            cursor: "pointer",
                            zIndex: 901,
                            fontFamily: FONT,
                            letterSpacing: "0.05em",
                            padding: "8px",
                        }}
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>
                )}
            </motion.nav>

            {/* Mobile menu overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 899,
                            background: "#0A0A0A",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 36,
                        }}
                    >
                        {[
                            { label: "HOME", to: "/" },
                            { label: "CLINIC", to: "/clinic" },
                            { label: "TREATMENTS", to: "/treatments" },
                            { label: "SHOP", to: "/shop" },
                            { label: "BOOK", to: "/bookings" },
                        ].map((item, i) => (
                            <motion.div key={item.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07, duration: 0.5, ease: EASE }}>
                                <Link
                                    to={item.to}
                                    style={{
                                        fontFamily: FONT,
                                        fontSize: 28,
                                        fontWeight: 300,
                                        letterSpacing: "0.12em",
                                        color: "#fff",
                                        textDecoration: "none",
                                        textTransform: "uppercase",
                                    }}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

function NavLink({ label, href }: { label: string; href: string }) {
    const [hovered, setHovered] = useState(false)
    return (
        <Link
            to={href}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ ...linkStyle, opacity: hovered ? 1 : 0.65 }}
        >
            {label}
        </Link>
    )
}
