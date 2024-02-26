import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import NavBar from '../../components/NavBar/navBar';
import Footer from '../../components/Footer/footer';
import BigPara from '../../components/Text/bigPara';
import HeaderWork from '../../components/Text/headerWork';
import HeaderAbout from '../../components/Text/headerAbout';
import Paragraph from '../../components/Text/para';

const TinyPaws = () => {
  
    return (
      <div>
        <h1>Hi</h1>
        {/* Render project details */}
        {/* Other project-specific content */}
      </div>
    );
  };
  
  export default TinyPaws;