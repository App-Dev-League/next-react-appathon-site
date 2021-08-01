import styles from '../styles/SpeakersAndJudges.module.css'
import styles2 from '../styles/SpeakerCard.module.css'
import Container from './container'
import SpeakerCard from './speakerCard'

export default function SpeakersAndJudges(props) {
  const { people } = props
  const priorityPeople = people.filter((person) => person.priorityOrderId).sort((a, b) => (a.priorityOrderId > b.priorityOrderId) ? 1 : -1)
  const regularPeople = people.filter((person) => !person.priorityOrderId)

  return (
    <section className={styles.speakers_judges}>
      <Container>
        <h1 className={styles.speakers_judges_header}>Speakers</h1>
        <div className={styles.speakers_judges_cards}>
          {priorityPeople.map((speaker, index) => {
            return <SpeakerCard speakerData={speaker} key={index}/>
          })}
          {regularPeople.map((speaker, index) => {
            return <SpeakerCard speakerData={speaker} key={index}/>
          })}
          <div className={styles2.speaker_card}>
            <div className={styles2.speaker_card_description}>
              <h2>Workshops</h2>
              <p>
                Akshat Prakash <br/>
                Jared Lera <br/>
                Sarthak Dayal <br/>
                Shafin Haque <br/>
                Kunal Jain <br/>
              </p>
              <h2 style={{marginTop: "2.25rem"}}>Mentors</h2>
              <p>
                Sergei Golitsyn <br/>
                Vadim Atamanenko <br/>
                Sarthak Dayal <br/>
                Pratyush Raj <br/>
                Smaranjit Ghose <br/>
                Anush Bhatia <br/>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
