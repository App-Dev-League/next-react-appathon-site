import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Welcome from '../components/welcome'
import Faq from '../components/faq'
import Schedule from '../components/schedule'
import SpeakersAndJudges from '../components/speakersAndJudges'
import Sponsors from '../components/sponsors'
import Footer from '../components/footer'
import { initializeApollo } from '../lib/apolloClient'
import { gql } from '@apollo/client'
import Team from '../components/About/team'
import Popup from 'reactjs-popup';

export function Home(props) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(!sessionStorage.getItem("adl-recap-2021-popup-closed"))
  }, [])
  const closeModal = () => {
    setOpen(false)
    sessionStorage.setItem("adl-recap-2021-popup-closed", "true")
  };
  return (
    <div>
      <Head>
        <title>{props.misc.headTitle}</title>
        <meta name="description" content={props.misc.metaDescription}/>
        <meta name="og:description" content={props.misc.metaDescription}/>
      </Head>
      <Header
        title={props.misc.hackathonTitle}
        description={props.misc.headerDescription}
        date={props.misc.headerDate}
      />
      <Welcome />
      <Schedule scheduleDays={props.scheduleDays}/>
      <SpeakersAndJudges people={props.speakersAndJudgesItems} />
      <Sponsors sponsors={props.sponsors} />
      <Team teamMembers={props.teamMembers} />
      <Faq cardData={props.faqCards}/>
      <Footer />
      <div suppressHydrationWarning={true}>
        {process.browser && (
          <Popup open={open} closeOnDocumentClick onClose={closeModal}>
            <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
              <button onClick={closeModal} style={{minWidth: "0", height:"2rem", width: "2rem", display:"flex", justifyContent:"center", alignItems:"center", alignSelf:"end", padding:"0 .75rem", background:"none", border:"0", cursor:"pointer"}}>
                <i className="fa fa-times font-size-8" />
              </button>
              <p>Our appathon event held this past August 2021 was a great success with 300 participants, 50 submissions, 20 sponsors, and 10 speakers! 🥳 Check out our recap video!</p>
              <iframe width="480" height="270" src="https://www.youtube-nocookie.com/embed/yscfPiaSpmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </Popup>
        )}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: gql`
      {
        sponsors {
          name
          logo {
            url
          }
          logoSize
          website
        }
        speakerSeriesItems {
          title
          role
          description
          photo {
            url
          }
          priorityOrderId
        }
        scheduleDays {
          scheduleEvents {
            title
            description
            time
            type
            speakerSeriesItem {
              title
              description
              photo {
                url
              }
              priorityOrderId
              role
            }
          }
          date
          dayNumber
        }
        miscs {
          hackathonTitle
          headerDescription
          headerDate
          headTitle
          metaDescription
        }
        faqCards {
          header
          content
        }
        teamMembers {
          name
          photo {
            url
          }
          role
          teamCategory
        }
      }
    `,
  })

  return {
    props: {
      sponsors: apolloClient.cache.extract().ROOT_QUERY.sponsors,
      speakersAndJudgesItems: apolloClient.cache.extract().ROOT_QUERY.speakerSeriesItems,
      scheduleDays: apolloClient.cache.extract().ROOT_QUERY.scheduleDays,
      misc: apolloClient.cache.extract().ROOT_QUERY.miscs[0],
      faqCards: apolloClient.cache.extract().ROOT_QUERY.faqCards,
      teamMembers: apolloClient.cache.extract().ROOT_QUERY.teamMembers
    }
  }
}

export default Home
