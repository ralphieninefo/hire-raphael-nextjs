import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function WhyLeavingDO() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Why leave DO?</title>
      </Head>
      <main className={styles.main}>
        <h1>Why leave DO?</h1>
        <p>If I’m given the opportunity to work at Vercel, leaving DO would be a difficult decision.</p>
        <p>I really like my customers.</p>
        <p>I’ve learned a lot about back-end cloud (coming from FinTech had to learn).</p>
        <p>DO and Vercel are also similar in many ways…</p>
        <p>They have a Developer Ethos</p>
        <p>Open Source Community</p>
        <p>Simplifying or “Democratizing” access to Dev Tools</p>
      </main>
    </div>
  );
}
