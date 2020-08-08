import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import DateTime from "../components/dateTime.js";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Moebient</title>
            </Head>

            <main className={styles.main}>
                <DateTime />
            </main>
        </div>
    );
}
