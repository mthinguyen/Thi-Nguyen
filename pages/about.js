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


export default function About() {
    return (
        <>

            <NavBar></NavBar>

            <main className={styles.main}>

                <div className={styles.introTextAndCamera} id="homeSection">
                    <div className={styles.introText}>
                        <Image alt="pink flower with 5 pedals" src="/graphics/pinkFlower.gif" width="100" height="100" className={styles.littleFlower}></Image>
                        <h1 className={styles.typingText}>Hi, I'm Thi &#127861;</h1>
                        <Image alt="blue flower with 5 pedals" src="/graphics/blueFlower.gif" width="100" height="100" className={styles.littleFlower2}></Image>
                        <BigPara></BigPara>
                    </div>

                    <div className={styles.introCam}>
                        <ClickableImage></ClickableImage>
                    </div>
                </div>

                <div className={styles.introAbout} id="aboutSection">
                    <div className={styles.introAboutText}>
                        <HeaderAbout></HeaderAbout>
                        <div className={styles.inlineDiv}>


                        </div>
                        <ContactList></ContactList>
                        <IconBar></IconBar>
                    </div>

                    <div className={styles.introAboutPhoto}>
                        <Image src="/graphics/sunflower.gif" width="300" height="300"></Image>
                    </div>

                </div>

            </main>

            <Footer></Footer>

        </>

    )
}
