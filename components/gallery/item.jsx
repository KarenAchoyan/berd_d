import React, { useState } from 'react';
import styles from '@/styles/gallery.module.css';
import Image from "next/image";
import { Skeleton } from 'antd';

const Item = ({ image }) => {
    const [isLoading, setIsLoader] = useState(true)

    return (
        <div className={styles.image}>
            {isLoading && (
                <Skeleton.Image active style={{ width: 350, height: 400 }} /> // Ant Design Skeleton
            )}
            <Image
                width={500}
                height={500}
                src={image}
                alt=""
                onLoad={() => setIsLoader(false)}
                style={{opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s'}}

            />
        </div>
    );
};

export default Item;
