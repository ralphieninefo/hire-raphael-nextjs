import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function WhyJoinVercel() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Why join Vercel?</title>
      </Head>
      <main className={styles.main}>
        <h1>Why join Vercel?</h1>
        <p>If I’m given the opportunity to work at Vercel, leaving DO would be a difficult decision.</p>
        <p>I really like my customers.</p>
        <p>I’ve learned a lot about back-end cloud (coming from FinTech had to learn).</p>
        <p>DO and Vercel are also similar in many ways...</p>
        <ul>
          <li>They have a Developer Ethos</li>
          <li>Open Source Community</li>
          <li>Simplifying or “Democratizing” access to Dev Tools</li>
        </ul>
        <p>Moreover, Vercel and DO share similar customers, primarily developers, tech startups, and enterprise customers who seek efficient, scalable, and user-friendly cloud solutions.</p>
        <p>Both companies emphasize a strong commitment to developer experience and community engagement, making them ideal environments for fostering innovation and growth.</p>
      </main>
    </div>
  );
}
