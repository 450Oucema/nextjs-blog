import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Alert from '../components/alert'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Salut, je suis développeur fullstack JS / PHP</p>
        <Alert type="error">Ca c'est bon!</Alert>
        <p>
          C'est un site d'entraînement, pour Next.JS
          <a href="http://oucemajlaiel.fr">Mon site personnel</a>.)
        </p>
      </section>
    </Layout>
  )
}