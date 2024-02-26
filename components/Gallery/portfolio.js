import React, { useState } from 'react';
import Image from 'next/image';
// import styles from '../../styles/Gallery.module.css';
import styles from '../../styles/Portfolio.module.css';
import styled from 'styled-components';
import projects from '../../data/projects.json';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ProjectCover = styled.img`
    width: 360px;
    height: 360px;
    border-radius: 22px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 5px 5px 15px #d0d0cc;
      }

`;

export default function Portfolio() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const router = useRouter();

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleClick = () => {
        router.push('/');
    };

    return (
        <div className={styles.bigWrapper}>
            <img
                className={styles.eyeBall}
                src="../../graphics/sunflower.gif" width="160" height="160"
            />
            <div className={styles.wrapper}>

                <div className={styles.galleryCont}>
                        <Link href="/projects/tinyPaw">
                            <ProjectCover className='projectCover' src="/covers/TrackStacks.jpg" />
                        </Link>
                    <div className={styles.projectTitle}>
                        <p></p>
                    </div>
                </div>

                <div className={styles.galleryCont}>
                        <Link href="/projects/tinyPaw">
                            <ProjectCover className='projectCover' src="/covers/moreIs.jpg" />
                        </Link>
                    <div className={styles.projectTitle}>
                        <p></p>
                    </div>
                </div>

                <div className={styles.galleryCont}>
                        <Link href="/projects/tinyPaw">
                            <ProjectCover className='projectCover' src="/covers/MindFull.jpg" />
                        </Link>
                    <div className={styles.projectTitle}>
                        <p></p>
                    </div>
                </div>

                <div className={styles.galleryCont}>
                        <Link href="/projects/tinyPaw">
                            <ProjectCover className='projectCover' src="/covers/TinyPaws.jpg" />
                        </Link>
                    <div className={styles.projectTitle}>
                        <p></p>
                    </div>
                </div>

                <div className={styles.galleryCont}>
                        <Link href="/projects/tinyPaw">
                            <ProjectCover className='projectCover' src="/covers/CaseClosed.jpg" />
                        </Link>
                    <div className={styles.projectTitle}>
                        <p></p>
                    </div>
                </div>


                {/* <div className={styles.galleryCont}>
                    <img src="/covers/moreIs.jpg" />
                    <div className={styles.projectTitle}>
                        <p></p>
                    </div>
                </div> */}



            </div>
        </div>
    );
}
