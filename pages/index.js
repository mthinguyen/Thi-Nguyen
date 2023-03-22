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
import HeaderAbout from '../components/Text/headerAbout';
import Paragraph from '../components/Text/para';
import Cursor from '../components/Cursor/cursor';
import IconBar from '../components/IconBar/iconBar';
import ContactList from '../components/emailPhone/contactList';

const ClickableImage = () => {
  const [showSecondImage, setShowSecondImage] = useState(false);
  const handleClick = () => {
    setShowSecondImage((prevValue) => !prevValue);
  };

  const [scaling, setscaling] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('/projects.json');
      const data = await res.json();
      setImages(data);
    };
    fetchImages();
  }, []);

  return (
    <>
      <Cursor scaling={scaling}> </Cursor>
      <div className={styles.camera}>
        <Image alt="polaroid camera and polaroid film, a portrait of myself in the film" className={styles.cameraPhoto} src={showSecondImage ? '/graphics/photo1.gif' : '/graphics/camera.png'} width="350" height="350" />
        <button
          onMouseEnter={() => setscaling(true)}
          onMouseLeave={() => setscaling(false)}
          onClick={handleClick} className={styles.cameraButton}> &#128247; &nbsp;Snap!</button>
      </div>
    </>
  )
};


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
        <div className={styles.introTextAndCamera} id="homeSection">
          <div className={styles.introText}>
            <Image alt="pink flower with 5 pedals" src="/graphics/pinkFlower.gif" width="100" height="100" className={styles.littleFlower}></Image>
            <h1 className={styles.typingText}>Hi, I&#39;m Thi &#127861; </h1>
            <Image alt="blue flower with 5 pedals" src="/graphics/blueFlower.gif" width="100" height="100" className={styles.littleFlower2}></Image>
            <BigPara></BigPara>
          </div>

          <div className={styles.introCam}>
            <ClickableImage></ClickableImage>
          </div>
        </div>

        <div className={styles.introWork} id="workSection">
          <div className={styles.workBlock}></div>
          <div><HeaderWork></HeaderWork></div>
          <Gallery></Gallery>
        </div>

        <div className={styles.introAbout} id="aboutSection">
          <div className={styles.introAboutText}>
            <HeaderAbout></HeaderAbout>
            <div className={styles.inlineDiv}>
              <Paragraph
                text="Hello again! I'm Thi, and my name is pronounced like Tea &#127861;.
              I recently graduated from the Digital Design and Development program at BCIT.
              As an UX/UI designer, I am passionate about creating intuitive and visually compelling digital 
              experiences that engage and delight users. I'm currently volunteering at Literacy Now Burnaby designing
              posters for the website and inforgraphics for Instagram. ">
              </Paragraph>
              <br />
              <br />


              <Paragraph
                text=" Throughout my studies, I honed my skills in user research, prototyping, 
              and visual design. I also had the opportunity to work on several real-world projects, including 
              mobile apps like TrackStacks and MindFull, websites like TinyPaws, and many other visual design projects. 
              These experiences have helped me develop a user-centered design process that prioritizes understanding 
              the needs and preferences of users and aligning those with the goals of the project.">
              </Paragraph>
              <br />
              <br />


              <Paragraph
                text="I am always looking for new opportunities to collaborate with teams and clients who share 
              my passion for creating exceptional digital experiences. If you are interested in learning more 
              about my work or would like to discuss a potential project, please don't hesitate to get in touch. 
              I look forward to hearing from you!">
              </Paragraph>
              <br />
              <br />


            </div>
            <ContactList></ContactList>
            <IconBar></IconBar>
          </div>

          <div className={styles.introAboutPhoto}>
            <Image src="/graphics/sunflower.gif" width="400" height="400"></Image>
          </div>


        </div>

        


      </main>
      <Footer></Footer>
    </>
  )
}
