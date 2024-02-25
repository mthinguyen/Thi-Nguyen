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

const TinyPaws = () => {
    const project = projectsData.find((project) => project.id === 2); // Assuming ID 1 represents Project 2
  
    if (!project) {
      return <div>Project not found</div>;
    }
  
    return (
      <div>
        <h1>{project.title}</h1>
        {/* Render project details */}
        <img src={project.imageUrl} alt={project.alt} />
        {/* Other project-specific content */}
      </div>
    );
  };
  
  export default Project1;