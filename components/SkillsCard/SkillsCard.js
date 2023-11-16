import styles from "./SkillsCard.module.css";

export const SkillsCard = ({ title, text }) => {
  return (
    <article className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.desc}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </article>
  );
};
