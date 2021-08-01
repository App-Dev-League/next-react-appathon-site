import styles from '../styles/ScheduleEvent.module.css'
import Image from 'next/image'

export default function ScheduleEvent(props) {
  let data = {}
  if (!props.isTba) data = props.eventData
  else {
    data = {
      dateTimeUtc: "TBA",
      title: "Schedule coming soon!",
      description: "<p>Stay tuned for updates</p>"
    }
  }
  return (
    <div className={styles.schedule_event}>
      <div className={styles.desktop}>
        <div className={styles.schedule_event_time}>
          <p>{data.time}</p>
          <div className={`${styles.schedule_event_time_dot_wrapper} ${props.last && styles.schedule_event_time_dot_wrapper_last}`}>
            <div className={`${styles.schedule_event_time_dot} ${data.type==="keynotes" ? styles.schedule_event_time_dot_keynotes : ''} ${data.type==="workshops" ? styles.schedule_event_time_dot_workshops : ''} ${data.type==="speakers" ? styles.schedule_event_time_dot_speakers : ''}`}/>
          </div>
        </div>
        <div className={styles.schedule_event_info}>
          <h4>{data.title}</h4>
          <div>
            {data.speakerSeriesItem && (
              <div className={styles.schedule_event_info_speaker}>
                <Image src={data.speakerSeriesItem.photo.url} alt={`Image of ${data.speakerSeriesItem.title}`} width="80" height="80"/>
                <div>
                  <h5>{data.speakerSeriesItem.title}</h5>
                  <div dangerouslySetInnerHTML={{__html:data.speakerSeriesItem.role}} />
                </div>
              </div>
            )}
          </div>
          <div dangerouslySetInnerHTML={{__html:data.description}}/>
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={`${styles.schedule_event_time_dot_wrapper} ${props.last ? styles.schedule_event_time_dot_wrapper_last : ''}`}>
          <div className={`${styles.schedule_event_time_dot} ${data.type==="keynotes" ? styles.schedule_event_time_dot_keynotes : ''} ${data.type==="workshops" ? styles.schedule_event_time_dot_workshops : ''} ${data.type==="speakers" ? styles.schedule_event_time_dot_speakers : ''}`}/>
        </div>
        <div className={styles.schedule_event_mobile_description}>
          <div className={styles.schedule_event_time}>
            <p>{data.time}</p>
          </div>
          <div className={styles.schedule_event_info}>
            <h4>{data.title}</h4>
            <div>
              {data.speakerSeriesItem && (
                <div className={styles.schedule_event_info_speaker}>
                  <Image src={data.speakerSeriesItem.photo.url} alt={`Image of ${data.speakerSeriesItem.title}`} width="80" height="80"/>
                  <div>
                    <h5>{data.speakerSeriesItem.title}</h5>
                    <div dangerouslySetInnerHTML={{__html:data.speakerSeriesItem.role}} />
                  </div>
                </div>
              )}
            </div>
            <div>
              {data.image && <div className={styles.schedule_event_image}><Image src={data.image.url} alt={`Image of ${data.title}`} width="359" height="190" layout="responsive"/></div>}
            </div>
            <div dangerouslySetInnerHTML={{__html:data.description}}/>
          </div>
        </div>
      </div>
    </div>
  )
}
