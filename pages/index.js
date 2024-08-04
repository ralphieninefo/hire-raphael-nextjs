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

        <p className={styles.greeting}>
          Hi Guillermo! Thanks for taking the time to meet me :)
        </p>

        <p className={styles.intro}>
          Below are the tech certs I've obtained. You'll notice some recent backend cloud certs that I've done to upskill myself while at DO. Currently, I'm working on my Oracle OSI Generative AI Professional. I also wanted to demonstrate that I have a handle on GitHub and Vercel, so I made this website. I tried to match the Vercel ethos with a black background and white text, unlike my first iteration (just trying to ITG here). I'm also working on the "Learn Next.js series" by going through the 16 chapters listed there.
        </p>

        <div className={styles.certifications}>
          <h2>My Tech Certifications</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <h3>Associate Cloud Engineer Certification</h3>
              <p><strong>Google</strong></p>
              <p><strong>Issued:</strong> June 2024</p>
              <p><strong>Expires:</strong> June 2027</p>
              <p><strong>Credential ID:</strong> 3d5eb3805b05413d92adecf844f644a2</p>
              <p><strong>Skills:</strong> Google Kubernetes Engine (GKE)</p>
            </div>

            <div className={styles.timelineItem}>
              <h3>Cloud Digital Leader</h3>
              <p><strong>Google</strong></p>
              <p><strong>Issued:</strong> June 2023</p>
              <p><strong>Expires:</strong> June 2026</p>
              <p><strong>Credential ID:</strong> 42297</p>
              <p><strong>Skills:</strong> Google Cloud Platform (GCP)</p>
            </div>

            <div className={styles.timelineItem}>
              <h3>AWS Certified Cloud Practitioner</h3>
              <p><strong>Amazon Web Services (AWS)</strong></p>
              <p><strong>Issued:</strong> January 2023</p>
              <p><strong>Credential ID:</strong> AWS03221448</p>
              <p><strong>Skills:</strong> Cloud Computing · Amazon Web Services (AWS)</p>
            </div>

            <div className={styles.timelineItem}>
              <h3>Intermediate SQL for Data Scientists</h3>
              <p><strong>LinkedIn</strong></p>
              <p><strong>Issued:</strong> February 2022</p>
            </div>

            <div className={styles.timelineItem}>
              <h3>Google Data Analytics</h3>
              <p><strong>Google</strong></p>
              <p><strong>Issued:</strong> July 2021</p>
              <p><strong>Credential ID:</strong> 8MKRH4B3VCZP</p>
            </div>

            <div className={styles.timelineItem}>
              <h3>Microsoft Excel 2016 Introductory</h3>
              <p><strong>Microsoft</strong></p>
              <p><strong>Issued:</strong> December 2020</p>
            </div>

            <div className={styles.timelineItem}>
              <h3>Microsoft Office Specialist: Excel 2016</h3>
              <p><strong>Microsoft</strong></p>
              <p><strong>Issued:</strong> December 2020</p>
            </div>
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
