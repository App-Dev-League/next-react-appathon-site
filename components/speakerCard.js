import styles from '../styles/SpeakerCard.module.css'
import Image from 'next/image'

export default function SpeakerCard(props) {
  const {title, photo, description, role} = props.speakerData
  return (
    <div className={styles.speaker_card_wrapper}>
      <div className={styles.speaker_card}>
        {photo && (
          <div className={styles.speaker_card_image}>
            <Image
              src={photo.url}
              alt={`Image of ${title}`}
              width={160}
              height={160}
            />
          </div>
        )}
        <div className={styles.speaker_card_description}>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{__html: role}} />
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}