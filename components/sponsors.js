import styles from '../styles/Sponsors.module.css'
import Container from './container'
import CTAButton from './ctaButton'
import SponsorList from './sponsorList'

export default function Sponsors(props) {
  return (
    <section className={styles.sponsors} id="sponsors">
      <Container>
        <h1 className={styles.sponsors_header}>Sponsors</h1>
        <SponsorList sponsors={props.sponsors} />
        <div className={styles.sponsors_buttons}>
          <CTAButton href="/rubric.pdf" openInNewTab smallFont outlined blackFont>See our sponsorship package</CTAButton>
        </div>
      </Container>
    </section>
  )
}
