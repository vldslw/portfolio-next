"use client";

import styles from "./ProjectsCard.module.css";
import Image from "next/image";
import gitHubIcon from "@/public/github.svg";

export const ProjectsCard = ({
  title,
  text,
  imgUrl,
  projectLink,
  gitHubLink,
}) => {
  return (
    <article className={styles.container}>
      <a
        href={projectLink}
        className={styles.link}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className={styles.image}
          src={`/${imgUrl}`}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </a>
      <div className={styles.desc}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.desclower}>
          <p className={styles.text}>{text}</p>
          <a
            href={gitHubLink}
            className={styles.giturl}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className={styles.giticon}
              src={gitHubIcon}
              alt="GitHub link"
            />
          </a>
        </div>
      </div>
    </article>
  );
};
