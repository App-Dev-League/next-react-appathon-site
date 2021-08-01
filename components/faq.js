import styles from '../styles/Faq.module.css'
import Container from './container'
import FaqCard from './faqCard'

export default function Faq(props) {
  const {cardData} = props
  return (
    <section className={styles.faq} id="faq">
      <Container>
        <h1 className={styles.faq_header}>FAQ</h1>
        {cardData && (
          <div className={styles.faq_cards}>
            {cardData.map((card, index) => {
              return <FaqCard header={card.header} content={card.content} />
            })}
          </div>
        )}
      </Container>
    </section>
  )
}
