import styles from "./Footer.module.css";
import Image from "next/image";
import { ContactForm } from "../ContactForm/ContactForm";
import gitHubIcon from "@/public/github.svg";
import linkedInIcon from "@/public/linkedin.svg";
import telegramIcon from "@/public/telegram.svg";
import instagramIcon from "@/public/instagram.svg";
// import curriculumPdf from '../../utils/data/resume.pdf';
// import curriculumRuPdf from '../../utils/data/resumeRU.pdf';

export const Footer = () => {
  // function downloadCurriculum(e) {
  // 	e.preventDefault();
  // 	window.open(curriculumPdf);
  // }

  // function downloadCurriculumRu(e) {
  // 	e.preventDefault();
  // 	window.open(curriculumRuPdf);
  // }

  return (
    <footer id="footer" className={styles.container}>
      <div className={styles.info}>
        <div className={styles.desc}>
          <h2 className={styles.header}>Let’s work together</h2>
          <p className={styles.text}>
            Now that you know about me, let me know if you are interested in
            working with me!
          </p>
          <ul className={styles.links}>
            <li className={styles.link}>
              <a
                href="https://github.com/vldslw"
                className={styles.url}
                target="_blank"
                rel="noreferrer"
              >
                <Image src={gitHubIcon} className={styles.img} alt="GitHub" />
              </a>
            </li>
            <li className="link">
              <a
                href="https://www.linkedin.com/in/vldslw/"
                className={styles.url}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={linkedInIcon}
                  className={styles.img}
                  alt="LinkedIn"
                />
              </a>
            </li>
            <li className="link">
              <a
                href="https://t.me/vldslw"
                className={styles.url}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={telegramIcon}
                  className={styles.img}
                  alt="Telegram"
                />
              </a>
            </li>
            <li className="link">
              <a
                href="https://www.instagram.com/vladislavpavlov.foto"
                className={styles.url}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={instagramIcon}
                  className={styles.img}
                  alt="Instagram"
                />
              </a>
            </li>
          </ul>
        </div>
        {/* <button className={styles.button} onClick={downloadCurriculum}>
					Download CV
				</button> */}
      </div>
      <ContactForm />
    </footer>
  );
};
