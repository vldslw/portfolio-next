import styles from "./Cover.module.css";
import Image from "next/image";
import profilePic from "@/public/profilePic.png";

const Cover = ({ data }) => {
  return (
    <section className={styles.container}>
      <div className={styles.descblock}>
        <h2 className={styles.subhead}>{data.subheading}</h2>
        <h1 className={styles.head}>{data.heading}</h1>
        <p className={styles.text}>{data.desc}</p>
        <a href={data.gitlink} className={styles.button} target="_blank">
          My GitHub
        </a>
      </div>
      <div className={styles.picblock}>
        <Image src={profilePic} className={styles.pic} alt="Vladislav Pavlov" />
        <div className={`${styles.rec} ${styles.rec_top}`}></div>
        <div className={`${styles.rec} ${styles.rec_bottom}`}></div>
        <div className={styles.rotator}></div>
      </div>
    </section>
  );
};

export { Cover };
