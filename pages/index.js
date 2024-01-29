import Head from 'next/head'
import { Layout } from '../components/layout/Layout'
import { QuizList } from '../components/mainContent/QuizList'
import { WelcomeMessenge } from '../components/messenges/WelcomeMessenge'

export default function Home() {
  return (
    <>
      <Head>
        <title>KichwApp</title>
        <link rel="icon" href="/assets/img/favicon.ico" />
      </Head>
      <main>
        <Layout>  
          <QuizList/>
          <WelcomeMessenge />
        </Layout>
      </main>
    </>
  )    
}