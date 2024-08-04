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

        <div className={styles.certifications}>
          <h2>My Tech Certifications</h2>
          <ul>
            <li>
              <strong>Associate Cloud Engineer Certification</strong><br />
              Google<br />
              Issued Jun 2024 · Expires Jun 2027<br />
              Credential ID 3d5eb3805b05413d92adecf844f644a2<br />
              Skills: Google Kubernetes Engine (GKE)
            </li>
            <li>
              <strong>Cloud Digital Leader</strong><br />
              Google<br />
              Issued Jun 2023 · Expires Jun 2026<br />
              Credential ID 42297<br />
              Skills: Google Cloud Platform (GCP)
            </li>
            <li>
              <strong>AWS Certified Cloud Practitioner</strong><br />
              Amazon Web Services (AWS)<br />
              Issued Jan 2023<br />
              Credential ID AWS03221448<br />
              Skills: Cloud Computing · Amazon Web Services (AWS)
            </li>
            <li>
              <strong>Intermediate SQL for Data Scientists</strong><br />
              LinkedIn<br />
              Issued Feb 2022
            </li>
            <li>
              <strong>Google Data Analytics</strong><br />
              Google<br />
              Issued Jul 2021<br />
              Credential ID 8MKRH4B3VCZP
            </li>
            <li>
              <strong>Microsoft Excel 2016 Introductory</strong><br />
              Microsoft<br />
              Issued Dec 2020
            </li>
            <li>
              <strong>Microsoft Office Specialist: Excel 2016</strong><br />
              Microsoft<br />
              Issued Dec 2020
            </li>
          </ul>
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
