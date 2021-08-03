import styles from '../styles/Header.module.css'
import Container from './container'
import { Parallax, Background } from 'react-parallax'
import Image from 'next/image'
import CTAButton from './ctaButton'

export default function Header(props) {
  const {title, description, date} = props
  return (
    <Parallax
      contentClassName={styles.header}
      strength={300}
      className={styles.header_parallax}
    >
      <Background>
        <Image src="/bkg.jpg" alt="" layout="fill" priority={true}/>
      </Background>
      <div className={styles.header_color_bg}>
        <Container>
          <div className={styles.navbar_filler}/>
          <div className={styles.header_content}>
            <div>
              <h1 className={styles.header_title}>{title}</h1>
              <p className={styles.header_description} dangerouslySetInnerHTML={{__html: description}}></p>
              <p className={styles.header_date}>{date}</p>
              <div className={styles.header_buttons}>
                <CTAButton href="https://docs.google.com/forms/d/e/1FAIpQLScwzPvNG_H585YF2Rqe1GrUeS7ZK5Nvp7br7pbrGq-vRgKdug/viewform" openInNewTab>Register</CTAButton>
                <CTAButton href="https://docs.google.com/forms/d/1CJasj6uRgELEeuwinHwsCeOM56MWUZtu-DHaIxwjFOk/edit" openInNewTab smallFont outlined>Submit a Project</CTAButton>
                <CTAButton href="https://discord.gg/NYTKTHFEQV" openInNewTab smallFont outlined>Join Our Discord</CTAButton>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Parallax>
  )
}
