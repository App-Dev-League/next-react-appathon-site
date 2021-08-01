import styles from '../styles/Welcome.module.css'
import Container from './container'
import CTAButton from './ctaButton'

export default function Welcome(props) {
  return (
    <section className={styles.welcome}>
      <Container>
        <div className={styles.welcome_header}>
          <h1>About The Event</h1>
            <p>
              <strong>Where?</strong> Online Zoom Webinar
              <br/><strong>When?</strong> August 6-8
              <br/><br/>
              The Appathon works to educate the next generation of technologists, innovators, and leaders. From researchers to entrepreneurship trailblazers, this conference is a unique opportunity to interact with the leaders in the fields of AI and application development through workshops and panels. As part of this event, students will also have the chance to compete in a competition (ideathon), where they can submit business pitches and/or prototypes for an app that can have a real-world impact.
            </p>
            <p></p>
            <p></p>
          <h1>Submission Guidelines</h1>
        </div>
        <div className={styles.welcome_buttons}>
          <CTAButton href="/rubric.pdf" openInNewTab smallFont outlined blackFont>See full submission guidelines</CTAButton>
        </div>
        <div className={styles.welcome_cards}>
          <div className={styles.welcome_cards_card}>
            <h2>Business Pitch</h2>
            <p>
              This idea should be recorded in the form of a 2-5 minute video, where you introduce an app that can have a real-world impact.
              <ol>
                <li>Video Length: 2-5 minutes</li>
                <li>Product name and it’s problem statement (what it attempts to solve)</li>
                <li>Market size for the product (how many people will it reach)</li>
                <li>Specifics about the product (how it works & how an app is incorporated in it)</li>
                <li>Competitive analysis (how is the product different than other products)</li>
              </ol>
            </p>
          </div>
          <div className={styles.welcome_cards_card}>
            <h2>Writeup</h2>
            <p>
              This idea should be written in the form of a 500-1000 word writeup, where you introduce an app that can have a real-world impact.
              <ol>
                <li>Writeup Length: 500-1000 words</li>
                <li>Product name and it’s problem statement (what it attempts to solve)</li>
                <li>Market size for the product (how many people will it reach)</li>
                <li>Specifics about the product (how it works & how an app is incorporated in it)</li>
                <li>Competitive analysis (how is the product different than other products)</li>
              </ol>
            </p>
          </div>
          <div className={styles.welcome_cards_card}>
            <h2>Prototype</h2>
            <p>
              This idea should be written in the form of a prototype demonstrated in a 2-5 minute video, where you introduce an app that can have a real-world impact.
              <ol>
                <li>Video Length: 2-5 minutes</li>
                <li>Product name and it’s problem statement (what it attempts to solve)</li>
                <li>Demo of the app and features</li>
                <li>How the app works, what technologies you used to build the prototype, etc.</li>
                <li>Future plans with this prototype (what else can you add to make it even better?)</li>
              </ol>
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
