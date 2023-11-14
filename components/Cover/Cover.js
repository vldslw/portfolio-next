import styles from "./Cover.module.css";
import Image from "next/image";
import profilePic from "../../public/profilePic.png";

const Cover = () => {
  return (
    <section className={styles.container}>
      <div className={styles.descblock}>
        <h2 className={styles.subhead}>Web Development</h2>
        <h1 className={styles.head}>Vladislav Pavlov</h1>
        <p className={styles.text}>
          Frontend Developer with experience in the media JavaScript | React |
          Vue.js
        </p>
        <a
          href="https://github.com/vldslw"
          className={styles.button}
          target="_blank"
        >
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
