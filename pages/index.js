import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import NavBar from '../components/NavBar/navBar';
import Footer from '../components/Footer/footer';
import BigPara from '../components/Text/bigPara';
import Portfolio from '../components/Gallery/portfolio';
import HeaderWork from '../components/Text/headerWork';
import Paragraph from '../components/Text/para';
import VideoBackground from '../components/backgroundVideo/bgVideo';
import Cursor from '../components/Cursor/cursor';


export default function Home() {
  const [scaling, setscaling] = useState(false);
  return (

    <>
      <Head>
        <title>Thi Nguyen</title>
        <meta name="description" content="2023 Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.png" />
        <link rel="preload" href="styles.css" as="style"></link>
        <link rel="stylesheet" href="styles.css?v=1.0"></link>
      </Head>

      <NavBar></NavBar>

      <main className={styles.main}>
        <Cursor scaling={scaling}> </Cursor>
        <div className={styles.introWork}>
          <HeaderWork text1="Passionate" text2="Designer," color1="#363630" color2="#e77cae" />

          {/* reuse HeaderWork with different text content and colors */}
          <HeaderWork text1="Creative" text2="Artist," color1="#363630" color2="#FFCC32" />
          <HeaderWork text1="Continuos" text2="Learner" color1="#363630" color2="#86BA90" />

          <VideoBackground />

          <style jsx>{`
        .container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
        }
        .content-above-video {
          z-index: 1;
        }
        .content-below-video {
          z-index: 1;
        }
      `}</style>

        </div>

        {/* <Gallery></Gallery> */}
        <Portfolio></Portfolio>

      </main>

      <Footer></Footer>
    </>
  )
}
