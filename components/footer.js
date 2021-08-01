import Container from './container'
import styles from '../styles/Footer.module.css'
import Icon from '@hackclub/icons'
import LinkedInIcon from '../public/icons/linkedin.svg'
import DiscordIcon from '../public/icons/Discord-Logo-White.svg'

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_content}>
          <div className={styles.footer_logo_wrapper}>
            <img src='/adl-logo.png' className={styles.footer_logo} alt="EconHacks logo"/>
            <span className={styles.footer_logo_text}>ADL</span>
          </div>
          <div>
            <p className={styles.footer_content_paragraph}>
              Copyright © 2019-21 by App Dev League, Inc.
            </p>
            <p className={styles.footer_content_paragraph}>
              Registered as a 501(c)(3) tax-deductible non profit organization (EIN: 85-3376559)
            </p>
            <p className={styles.footer_content_paragraph}>
              Email: <a
                href="mailto:contact@appdevleague.org"
                target="_blank"
                rel="noopener noreferrer"
              >
              contact@appdevleague.org
              </a>
            </p>
            <div className={styles.footer_content_links}>
              <a
                href="https://www.facebook.com/appdev.league"
                target="_blank"
                rel="noopener noreferrer"
                title="Our Facebook"
              >
                <Icon
                  glyph="facebook"
                  size={36}
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/appdevleague/"
                target="_blank"
                rel="noopener noreferrer"
                title="Our Instagram"
              >
                <Icon
                  glyph="instagram"
                  size={36}
                  alt="Instagram"
                />
              </a>
              <a
                href="https://discord.gg/FtegFYAuZ6"
                target="_blank"
                rel="noopener noreferrer"
                title="Our Discord"
              >
                <DiscordIcon
                  width={32}
                  height={32}
                  alt="Discord"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCxhMD8Fvm5LP6QzdrYnFixA"
                target="_blank"
                rel="noopener noreferrer"
                title="Our YouTube"
              >
                <Icon
                  glyph="youtube"
                  size={36}
                  alt="Email"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/appdevleague/"
                target="_blank"
                rel="noopener noreferrer"
                title="Our LinkedIn"
              >
                <LinkedInIcon
                  width={36}
                  height={36}
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
          <p className={styles.footer_content_paragraph}>
            Created and maintained by <a href="https://github.com/orgs/App-Dev-League" target="_blank" rel="noopener noreferrer">App Dev League's</a> Tech Team
          </p>
        </div>
      </Container>
    </footer>
  )
}
