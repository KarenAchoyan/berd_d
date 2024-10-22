import React from 'react';
import styles from "../../../styles/banner.module.css";
import Image from "next/image";

const Item = ({item}) => {
    return (
        <div className={styles.main}>
            <div className={styles.media}>
                <video
                    width="800"
                    height="500"
                    src="https://berd.dahk.am/uploads/Untitled2.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{width: "100%", height: "auto"}} // Ensure video is responsive
                />
            </div>
        </div>

    );
};

export default Item;