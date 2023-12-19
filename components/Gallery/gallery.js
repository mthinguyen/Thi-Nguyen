import React from 'react';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components'
import styles from '../../styles/Gallery.module.css'
import record from '../../data/projects.json'
import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';





export default function Gallery() {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };
    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    function handleClick() {
        router.push('/');
    };

    return (
        <div className={styles.bigWrapper}>
            <img
                className={styles.eyeBall}
                src="../../graphics/sunflower.gif" width="160" height="160"
            />
            <div className={styles.wrapper}>

                {
                    record.map((rec, index) => {
                        return (
                            <div key={rec.id} className={styles.galleryCont}>
                                <img
                                    src={rec.imageUrl}
                                    className={index === hoveredIndex ? "item item--hovered" : "item"}
                                    onMouseEnter={() => handleMouseEnter(index)} />

                                {/* <div className={styles.overlay}>
                            {hoveredIndex === index && (
                                <div className={styles.projectTitle}>
                                    <p>{rec.title}</p>
                                </div>
                            )}
                            </div> */}

                                {hoveredIndex === index && (
                                    <div className={styles.projectTitle}>
                                        <p>{rec.title}</p>
                                    </div>
                                )}

                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
}




// export default Gallery;