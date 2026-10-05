import React, { type FC } from "react";

import { Link } from "gatsby";

import { type Edge } from "@/types/edge";

import * as styles from "./feed.module.scss";

type FeedProps = {
  edges: Array<Edge>;
};

const Feed: FC<FeedProps> = ({ edges }) => (
  <div className={styles.feed}>
    {edges.map((edge) => {
      const { frontmatter, fields } = edge.node;
      const to = frontmatter?.slug || fields.slug;

      return (
        <article className={styles.item} key={fields.slug}>
          <div className={styles.meta}>
            <Link to={fields.categorySlug} className={styles.category}>
              {frontmatter.category}
            </Link>
            <time
              className={styles.time}
              dateTime={new Date(frontmatter.date).toISOString()}
            >
              {new Date(frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
              })}
            </time>
          </div>
          <h3 className={styles.title}>
            <Link className={styles.link} to={to}>
              {frontmatter.title}
            </Link>
          </h3>
          <p className={styles.description}>
            {frontmatter.summary || frontmatter.description}
          </p>
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <ul className={styles.tools}>
              {frontmatter.tags.map((tool) => (
                <li className={styles.tool} key={tool}>
                  {tool}
                </li>
              ))}
            </ul>
          )}
          <span className={styles.more} aria-hidden="true">
            {frontmatter.buttonLabel || "Read"} <span className={styles.arrow}>→</span>
          </span>
        </article>
      );
    })}
  </div>
);

export { Feed };
