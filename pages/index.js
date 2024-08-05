import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hi Guillermo! I'm Raphaël. Thanks for taking the time to meet me :)</title>
        <meta name="description" content="Hire Raphaël Sirvent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi Guillermo! I'm <a href="https://www.linkedin.com/in/raphael-sirvent/" target="_blank" rel="noopener noreferrer" className={styles.link}>Raphaël</a>. Thanks for taking the time to meet me :)
        </h1>

        <nav className={styles.nav}>
          <Link href="/about-me"><a className={styles.link}>About Me</a></Link>
          <Link href="/why-join-vercel"><a className={styles.link}>Why join Vercel?</a></Link>
          <Link href="/my-tech-certs"><a className={styles.link}>My Tech Certs</a></Link>
        </nav>
      </main>
    </div>
  );
}
