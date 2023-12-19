import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar/navBar';
import Footer from '../components/Footer/footer';
import BigPara from '../components/Text/bigPara';
import Gallery from '../components/Gallery/gallery';
import HeaderWork from '../components/Text/headerWork';
import HeaderArtist from '../components/Text/headerArtist';
import HeaderLearner from '../components/Text/headerLearner';
import HeaderAbout from '../components/Text/headerAbout';
import Paragraph from '../components/Text/para';
import Cursor from '../components/Cursor/cursor';
import IconBar from '../components/IconBar/iconBar';
import ContactList from '../components/emailPhone/contactList';



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

      <main className={styles.main}>


        <div className={styles.introWork}>
          <div><HeaderWork></HeaderWork></div>
          <div><HeaderArtist></HeaderArtist></div>
          <div><HeaderLearner></HeaderLearner></div>
        </div>

        <Gallery></Gallery>




      </main>
      <Footer></Footer>
    </>
  )
}
