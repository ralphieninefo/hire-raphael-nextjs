import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hi, I'm Raphaël</title>
        <meta name="description" content="Hire Raphaël Sirvent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I'm <a href="https://www.linkedin.com/in/raphael-sirvent/" target="_blank" rel="noopener noreferrer">Raphaël</a>
        </h1>

        <p className={styles.description}>
          Please hire me because:
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Same Team</h3>
            <p>I excel in cross-functional collaboration, driving key projects to successful outcomes.</p>
          </div>

          <div className={styles.card}>
            <h3>Dig Deep</h3>
            <p>I thoroughly investigate and solve critical issues, ensuring long-term solutions and customer satisfaction.</p>
          </div>

          <div className={styles.card}>
            <h3>KYC</h3>
            <p>I prioritize understanding and addressing customer needs, ensuring they achieve their goals with our solutions.</p>
          </div>

          <div className={styles.card}>
            <h3>Iterate To Greatness</h3>
            <p>I continually improve solutions through rapid iteration and collaboration, delivering outstanding results.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/raphael-sirvent/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with me on LinkedIn
        </a>
      </footer>
    </div>
  );
}
