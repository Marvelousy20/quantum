import Head from 'next/head'
import About from '../components/About'
import Hero from '../components/Hero/hero'
import Mint from '../components/Mint'
import QuantumSoul from '../components/QuantumSouls'
import VideoGallery from '../components/VideoGalary'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quantum</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <QuantumSoul />
        <About />
        <VideoGallery />
        <Mint />
      </main>
    </div>
  )
}
