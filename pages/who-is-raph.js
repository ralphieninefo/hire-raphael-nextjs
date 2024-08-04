import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function WhoIsRaph() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Who is Raph?</title>
      </Head>
      <main className={styles.main}>
        <h1>Who is Raph?</h1>
        <p>Content about who Raph is...</p>
      </main>
    </div>
  );
}
