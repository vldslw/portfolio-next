import styles from "./Projects.module.css";
import Image from "next/image";
import { ProjectsCard } from "../ProjectsCard/ProjectsCard";
import gitHubLogo from "@/public/github.svg";

export const Projects = ({ data }) => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Some of my projects</h2>
      <div className={styles.cards}>
        {data.map((card) => (
          <ProjectsCard
            key={card._id}
            title={card.title}
            text={card.desc}
            imgUrl={card.img}
            projectLink={card.link}
            gitHubLink={card.repo}
          />
        ))}
        <article className={styles.portfolio}>
          <a
            href="https://github.com/vldslw/portfolio-next"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className={styles.image}
              src={gitHubLogo}
              alt="GitHub logo"
            />
            <p className={styles.text}>
              Link to this portfolio website repository →
            </p>
          </a>
        </article>
      </div>
    </section>
  );
};
