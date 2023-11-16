import styles from "./Skills.module.css";
import { SkillsCard } from "../SkillsCard/SkillsCard";

export const Skills = ({ data }) => {
  const cards = data.skills;
  return (
    <section className={styles.container}>
      {cards.map((card) => (
        <SkillsCard key={card.title} title={card.title} text={card.text} />
      ))}
    </section>
  );
};
