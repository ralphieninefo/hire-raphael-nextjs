import Head from 'next/head';
import styles from '../styles/Certs.module.css';

export default function MyTechCerts() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Tech Certs</title>
      </Head>
      <main className={styles.main}>
        <h1>My Tech Certs</h1>
        <p>Below are the tech certs I've obtained:</p>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>Currently working on OCI Generative AI Professional</h3>
              <p><strong>Oracle</strong></p>
              <p>Status: Pending</p>
              <p>Expanding skills in Generative AI with Oracle Cloud Infrastructure.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>Associate Cloud Engineer Certification</h3>
              <p><strong>Google</strong></p>
              <p><strong>Issued:</strong> June 2024</p>
              <p><strong>Skills:</strong> Google Kubernetes Engine (GKE)</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>Cloud Digital Leader</h3>
              <p><strong>Google</strong></p>
              <p><strong>Issued:</strong> June 2023</p>
              <p><strong>Skills:</strong> Google Cloud Platform (GCP)</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>AWS Certified Cloud Practitioner</h3>
              <p><strong>Amazon Web Services (AWS)</strong></p>
              <p><strong>Issued:</strong> January 2023</p>
              <p><strong>Skills:</strong> Cloud Computing · Amazon Web Services (AWS)</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>Intermediate SQL for Data Scientists</h3>
              <p><strong>LinkedIn</strong></p>
              <p><strong>Issued:</strong> February 2022</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>Google Data Analytics</h3>
              <p><strong>Google</strong></p>
              <p><strong>Issued:</strong> July 2021</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>Microsoft Excel 2016 Introductory</h3>
              <p><strong>Microsoft</strong></p>
              <p><strong>Issued:</strong> December 2020</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>Microsoft Office Specialist: Excel 2016</h3>
              <p><strong>Microsoft</strong></p>
              <p><strong>Issued:</strong> December 2020</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
