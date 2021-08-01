import styles from '../styles/Schedule.module.css'
import styles2 from '../styles/ScheduleEvent.module.css'
import Container from './container'
import ScheduleEvent from './scheduleEvent'
import { useState } from 'react'

export default function Schedule(props) {
  const [activeTab, setActiveTab] = useState(1)
  const {scheduleDays} = props
  return (
    <section className={styles.schedule} id="schedule">
      <Container>
        <div className={styles.schedule_header}>
          <h1>Schedule</h1>
          <p>
            All times are in&nbsp;
            <a
              href="https://www.timeanddate.com/time/zones/pdt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pacific Time
            </a>
          </p>
        </div>
        <div className={styles.schedule_wrapper}>
          <div className={styles.schedule_navbar}>
            <button
              className={`${styles.schedule_navbar_button} ${activeTab === 1 ? styles.active : ''}`}
              onClick={() => setActiveTab(1)}
            >
              Day 1
            </button>
            <button
              className={`${styles.schedule_navbar_button} ${activeTab === 2 ? styles.active : ''}`}
              onClick={() => setActiveTab(2)}
            >
              Day 2
            </button>
            <button
              className={`${styles.schedule_navbar_button} ${activeTab === 3 ? styles.active : ''}`}
              onClick={() => setActiveTab(3)}
            >
              Day 3
            </button>
          </div>
          {
            scheduleDays[activeTab - 1] && scheduleDays[activeTab - 1].scheduleEvents.length > 0 ? (
              <div className={styles.schedule_content}>
                <div className={styles.schedule_content_header}>
                  <h3>{scheduleDays[activeTab - 1].date}</h3>
                  <div>
                    <div className={`${styles2.schedule_event_time_dot} ${styles2.schedule_event_time_dot_keynotes}`}/>Keynotes
                    <div className={`${styles2.schedule_event_time_dot} ${styles2.schedule_event_time_dot_speakers}`}/>Speakers
                    <div className={`${styles2.schedule_event_time_dot} ${styles2.schedule_event_time_dot_workshops}`}/>Workshops
                  </div>
                </div>
                {scheduleDays[activeTab - 1].scheduleEvents.map((scheduleEvent, index) => {
                  return <ScheduleEvent eventData={scheduleEvent} key={index} last={scheduleDays[activeTab - 1].scheduleEvents.length - 1 === index}/>
                })}
              </div>
            ) : (
              <div className={styles.schedule_content}>
                {scheduleDays[activeTab - 1] && scheduleDays[activeTab - 1].date && <h3>{scheduleDays[activeTab - 1].date}</h3>}
                <ScheduleEvent isTba/>
              </div>
            )
          }
        </div>
      </Container>
    </section>
  )
}
