// Create the file pages/why-leaving-do.js with the following content
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function WhyLeavingDO() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Why would I consider leaving DO?</title>
      </Head>
      <main className={styles.main}>
        <h1>Why would I consider leaving DO?</h1>
        <p>Content about why Raph might consider leaving DO...</p>
      </main>
    </div>
  );
}
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

