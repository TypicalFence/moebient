import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getBackgroundService } from "../service";
import BackgroundImage from "../components/backgroundImage.js";
import DateTime from "../components/dateTime.js";

export default function Home({ image }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Moebient</title>
            </Head>

            <BackgroundImage initialImage={image.url} />
            <main className={styles.main}>
                <div className={`${styles["position-container"]} ${styles.left}`}>
                </div>
                <div className={`${styles["position-container"]} ${styles.right}`}>
                    <DateTime />
                </div>
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
    const bg = getBackgroundService();
    let image;

    try {
        image = await bg.getImage();
        // apparently nextjs is utter trash
        image = JSON.parse(JSON.stringify(image));
    } catch {
        image = { url: null };
    }

    return {
        props: { image }
    };
}
