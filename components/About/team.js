import styles from '../../styles/About/Team.module.css'
import Container from '../container'
import TeamMember from './teamMember'

export default function Team(props) {
  const leadership = props.teamMembers.filter(member => member.teamCategory === "leadership")
  const officers = props.teamMembers.filter(member => member.teamCategory === "officer")
  return (
    <section className={styles.team} id="team">
      <Container>
        <h1 className={styles.team_header}>Team</h1>
        <h2>Leadership Team</h2>
        <div className={styles.team_cards}>
          {leadership.map((member, index) => {
            return <TeamMember member={member} key={index} />
          })}
        </div>
        <h2>Officer Team</h2>
        <div className={styles.team_cards}>
          {officers.map((member, index) => {
            return <TeamMember member={member} key={index} />
          })}
        </div>
      </Container>
    </section>
  )
}
