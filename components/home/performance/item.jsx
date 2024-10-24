import React, {useState} from 'react';
import styles from '../../../styles/performance.module.css'
import {PlayCircleOutlined} from "@ant-design/icons";
import Modal from "./modal";
import {Skeleton} from "antd";
import Image from "next/image";

const ItemVideo = ({openModal, item, setVideo}) => {
    const [isLoading, setIsLoader] = useState(true)

    function op(){
        openModal();
        setVideo(item.video)
    }
    return (
        <>
            <div className={`${styles.secondImage}`}>
                {isLoading && (
                    <Skeleton.Image active style={{ width: 350, height: 400 }} /> // Ant Design Skeleton
                )}

                <Image
                    width={500}
                    height={500}
                    src={process.env.IMAGE_URL2+item?.image}
                    alt=""
                    onLoad={() => setIsLoader(false)}
                    style={{opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s'}}

                />

                <div className={styles.overline} onClick={op}>
                    <PlayCircleOutlined />
                </div>
            </div>
        </>

    );
};

export default ItemVideo;