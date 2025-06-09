import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* About You */}
        <section className={styles.section} id="about">
          <h1 className={styles.title}>Hi, I&apos;m Jason Phung</h1>
          <p className={styles.subtitle}>
            I&apos;m a Computer Science student at the University of Ottawa with a growing passion for UI/UX design and front-end development.
          </p>
          <p>
            Currently, I&apos;m working at the Public Service Commission as a Data Analyst, analyzing data to improve hiring processes and ensure fair recruitment practices.
          </p>
        </section>

        {/* How You Work */}
        <section className={styles.section} id="how-i-work">
          <h2>How I Work</h2>
          <p>
            I&apos;m currently learning UI/UX design in a university course focused on design principles, user-centered design, and heuristic evaluation. I&apos;m exploring design best practices through sources like NN/g and the Interaction Design Foundation.
          </p>
          <p>
            As I learn, I am building out a design process that includes research, sketching, wireframing, prototyping, and user feedback.
          </p>
        </section>

        {/* Case Studies */}
        <section className={styles.section} id="case-studies">
          <h2>Case Studies</h2>
          <div className={styles.grid}>
            <Link href="https://seg3125-assignment-2.vercel.app/" className={styles.cardLink}>
              <div className={styles.card}>
                <Image src="/service.png" alt="Service Site" width={300} height={200} className={styles.caseImage} />
                <h3>Service Website</h3>
                <p>Featuring Rapid AutoCare, an automotive repair business</p>
              </div>
            </Link>
            <Link href="/case-studies/game" className={styles.cardLink}>
              <div className={styles.card}>
                <Image src="/game.png" alt="Game Design" width={300} height={200} className={styles.caseImage} />
                <h3>Game Website</h3>
                <p>Coming Soon</p>
              </div>
            </Link>
            <Link href="/case-studies/ecommerce" className={styles.cardLink}>
              <div className={styles.card}>
                <Image src="/ecommerce.png" alt="E-commerce" width={300} height={200} className={styles.caseImage} />
                <h3>E-Commerce Website</h3>
                <p>Coming Soon</p>
              </div>
            </Link>
            <Link href="/case-studies/analytics" className={styles.cardLink}>
              <div className={styles.card}>
                <Image src="/analytics.png" alt="Analytics Dashboard" width={300} height={200} className={styles.caseImage} />
                <h3>Analytics Website</h3>
                <p>Coming Soon</p>
              </div>
            </Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Jason Phung. All rights reserved.</p>
      </footer>
    </div>
  );
}