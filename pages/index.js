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

export function Home(props) {
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
