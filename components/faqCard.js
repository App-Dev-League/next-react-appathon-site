import styles from '../styles/Faq.module.css'
import Icon from '@hackclub/icons'
import { useState } from 'react'

export default function FaqCard(props) {
  const {header, content} = props
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.faq_cards_card}>
      <div>
        <h2>{header}</h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          {!isOpen && <Icon glyph="down-caret" size={36} alt="Expand"/>}
          {isOpen && <Icon glyph="up-caret" size={36} alt="Collapse"/>}
        </button>
      </div>
      {isOpen && <p dangerouslySetInnerHTML={{__html: content}}/>}
    </div>
  )
}
