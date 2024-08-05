import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function MyTechCerts() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Tech Certs</title>
      </Head>
      <main className={styles.main}>
        <h1>My Tech Certs</h1>
        <p>Below are the tech certs I've obtained:</p>
        <div className={styles.certifications}>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <h3>Currently working on OCI Generative AI Professional</h3>
              <p><strong>Oracle</strong></p>
              <p>Status: Pending</p>
              <p>Expanding skills in Generative AI with Oracle Cloud Infrastructure.</p>
            </div>
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
    </div>
  );
}
