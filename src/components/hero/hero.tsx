import React, { type FC } from "react";

import { Link } from "gatsby";

import { useSiteMetadata } from "@/hooks/use-site-metadata";

import * as styles from "./hero.module.scss";

const facts = [
  { label: "Background", value: "Biomedical Engineering · IST" },
  { label: "Studying", value: "Postgrad in AI & ML · IADE" },
  { label: "Toolkit", value: "Python · SQL · Tableau" },
];

const Hero: FC = () => {
  const { author } = useSiteMetadata();
  const firstName = author.title.split(" ")[0];

  return (
    <section className={styles.hero}>
      {author.company && (
        <p className={styles.status}>
          <span className={styles.dot} aria-hidden="true" />
          Now at {author.company}
        </p>
      )}
      <h1 className={styles.title}>
        Hi, I'm {firstName}.{" "}
        <span className={styles.highlight}>
          {author.role}
          {author.company && ` at ${author.company}`}.
        </span>
      </h1>
      <p className={styles.lede}>
        Biomedical engineer turned data scientist. I clean, test and visualise
        data to turn it into clear decisions — in healthcare and in business.
      </p>
      <div className={styles.actions}>
        <a className={styles.primary} href="#projects">
          See my projects
        </a>
        <Link className={styles.secondary} to="/pages/about">
          About me
        </Link>
        <a
          className={styles.secondary}
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
      <dl className={styles.facts}>
        {facts.map(({ label, value }) => (
          <div className={styles.fact} key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export { Hero };
