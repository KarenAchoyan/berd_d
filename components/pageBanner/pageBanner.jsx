import React from 'react';
import styles from "../../styles/pageBanner.module.css"
import Image from "next/image";
const PageBanner = ({title}) => {
    return (
        <div className={styles.banner}>
            <Image width={1000} height={600} src="/performance1.png" alt={"Banner"}/>
            <div className={styles.overlay}>
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default PageBanner;