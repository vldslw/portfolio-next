import Image from "next/image";
import styles from "./Stack.module.css";

export const Stack = ({ data }) => {
  return (
    <section id="stack" className={styles.container}>
      {data.stack.map((item) => (
        <Image
          width="48"
          height="48"
          key={item.name}
          src={`/${item.icon}`}
          className={styles.icon}
          alt={item.name}
        />
      ))}
    </section>
  );
};
