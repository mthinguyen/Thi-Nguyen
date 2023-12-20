import Head from 'next/head';
import Image from 'next/image';
import Cursor from '../components/Cursor/cursor';
import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar/navBar';
import Footer from '../components/Footer/footer';
import BigPara from '../components/Text/bigPara';
import Gallery from '../components/Gallery/gallery';
import HeaderWork from '../components/Text/headerWork';
import Paragraph from '../components/Text/para';
import VideoBackground from '../components/backgroundVideo/bgVideo';



export default function Home() {
  return (
    
    <>
      <Head>
        
        <title>Thi Nguyen</title>
        <meta name="description" content="2023 Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.png" />
      </Head>

      <NavBar></NavBar>
      <Cursor scaling={0.5}/>

      <main className={styles.main}>
        

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
          /* Style your content above the video */
          z-index: 1;
        }
        .content-below-video {
          /* Style your content below the video */
          z-index: 1;
        }
      `}</style>

        </div>

        <Gallery></Gallery>

      </main>

      <Footer></Footer>
    </>
  )
}
