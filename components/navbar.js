import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Container from './container'
import Icon from '@hackclub/icons'

export default function Navbar(props) {
  const router = useRouter()
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileListOpen, setIsMobileListOpen] = useState(false)
  const handleScroll=() => {
    const offset=window.scrollY;
    if (offset > 16){
      setIsSticky(true);
    }
    else{
      setIsSticky(false);
    }
  }
  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll',handleScroll)
  })
  return (
    <div className={`${styles.nav_wrapper} ${isSticky ? styles.sticky : ''} ${isSticky || isMobileListOpen ? styles.hasBackground : ''}`}>
      <Container>
        <nav className={styles.nav}>
          <Link href="/">
            <a className={styles.logo_link}>
              <img src="/adl-logo.png" className={styles.logo} alt="EconHacks logo"></img>
              <span className={styles.logo_text}>ADL</span>
            </a>
          </Link>
          <div className={styles.nav_right}>
            <div className={styles.desktop_only}>
              <Link href="/#about">
                <a className={`${styles.nav_link}`}>About</a>
              </Link>
              <Link href="/#schedule">
                <a className={`${styles.nav_link}`}>Schedule</a>
              </Link>
              <Link href="/#speakers">
                <a className={`${styles.nav_link}`}>Speakers</a>
              </Link>
              <Link href="/#sponsors">
                <a className={`${styles.nav_link}`}>Sponsors</a>
              </Link>
              <Link href="/#team">
                <a className={`${styles.nav_link}`}>Team</a>
              </Link>
              <Link href="/#faq">
                <a className={`${styles.nav_link}`}>FAQ</a>
              </Link>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScwzPvNG_H585YF2Rqe1GrUeS7ZK5Nvp7br7pbrGq-vRgKdug/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.nav_link_cta}`}
            >
              Register
            </a>
            <button
              className={styles.nav_mobile_menu_button}
              onClick={() => setIsMobileListOpen(!isMobileListOpen)}
            >
              <Icon
                glyph="menu"
                size={64}
                fill="#fff"
                className={styles.nav_mobile_menu_button_icon}
              />
            </button>
          </div>
        </nav>
        <div className={`${styles.nav_mobile_links_wrapper} ${isMobileListOpen ? styles.open : ''}`}>
          <div className={`${styles.nav_mobile_links} ${isMobileListOpen ? styles.open : ''}`}>
            <Link href="/about">
              <a
                className={`${styles.nav_link} ${router.pathname === '/about' ? styles.active : ''}`}
                onClick={() => setIsMobileListOpen(!isMobileListOpen)}
              >
                About
              </a>
            </Link>
            <Link href="/#schedule">
              <a
                className={`${styles.nav_link} ${router.pathname === '/schedule' ? styles.active : ''}`}
                onClick={() => setIsMobileListOpen(!isMobileListOpen)}
              >
                Schedule
              </a>
            </Link>
            <a
              href="https://www.notion.so/EconHacks-Prizes-f938065ddba84b1b80ebbaccdb30045b"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.nav_link}
              onClick={() => setIsMobileListOpen(!isMobileListOpen)}
            >
              Prizes
            </a>
            <Link href="/#faq">
              <a
                className={`${styles.nav_link} ${router.pathname === '/#faq' ? styles.active : ''}`}
                onClick={() => setIsMobileListOpen(!isMobileListOpen)}
              >
                FAQ
              </a>
            </Link>
            <Link href="/#sponsors">
              <a
                className={`${styles.nav_link} ${router.pathname === '/#sponsors' ? styles.active : ''}`}
                onClick={() => setIsMobileListOpen(!isMobileListOpen)}
              >
                Sponsors
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
