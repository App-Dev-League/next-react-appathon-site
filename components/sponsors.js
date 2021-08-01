import styles from '../styles/Sponsors.module.css'
import Container from './container'
import CTAButton from './ctaButton'
import SponsorList from './sponsorList'

export default function Sponsors(props) {
  return (
    <section className={styles.sponsors} id="sponsors">
      <Container>
        <h1 className={styles.sponsors_header}>Sponsors</h1>
        <div className={styles.sponsors_buttons}>
          <CTAButton href="/ADL-Sponsor-Package.pdf" openInNewTab smallFont outlined blackFont>See our sponsorship package</CTAButton>
        </div>
        <SponsorList sponsors={props.sponsors} />
      </Container>
    </section>
  )
}
