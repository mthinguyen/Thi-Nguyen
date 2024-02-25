import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/Gallery.module.css';
import projects from '../../data/projects.json';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Gallery() {
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
            {/* <img
                className={styles.eyeBall}
                src="../../graphics/sunflower.gif" width="160" height="160"
            /> */}
            <div className={styles.wrapper}>
                {projects.map((project, index) => (
                    <div key={project.id} className={styles.galleryCont}>

                        
                        <Link href={`/projects/${project.id}`}></Link>


                        <img
                            src={project.imageUrl}
                            className={index === hoveredIndex ? `${styles.item} ${styles.itemHovered}` : styles.item}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            onClick={handleClick}
                        />
                        {hoveredIndex === index && (
                            <div className={styles.projectTitle}>
                                <p>{project.title}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
