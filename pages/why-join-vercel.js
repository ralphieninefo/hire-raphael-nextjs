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
        <p>They have a developer ethos, open source community, and focus on simplifying or "democratizing" access to dev tools.</p>
        <p>Moreover, Vercel and DO share similar customers, primarily developers, tech startups, and enterprise customers who seek efficient, scalable, and user-friendly cloud solutions.</p>
        <p>Both companies emphasize a strong commitment to developer experience and community engagement, making them ideal environments for fostering innovation and growth.</p>

        <h2>Shared vision and values</h2>
        <p>My vision aligns with Vercel's mission to provide the best developer experience:</p>
        <p>Passionate about open source and contributing to the developer community.</p>
        <p>Committed to simplifying access to powerful development tools and empowering developers to build amazing applications.</p>

        <p>Joining Vercel represents an opportunity to leverage my skills and experience in a new environment, where I can continue to drive innovation and growth, helping Vercel achieve its mission of enabling developers to build and deploy high-performance websites and applications seamlessly.</p>
      </main>
    </div>
  );
}
