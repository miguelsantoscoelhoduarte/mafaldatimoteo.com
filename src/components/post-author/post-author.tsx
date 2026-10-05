import React from "react";

import { Link } from "gatsby";

import { Image } from "@/components/image";
import { useSiteMetadata } from "@/hooks/use-site-metadata";

import * as styles from "./post-author.module.scss";

const PostAuthor = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles.postAuthor}>
      <Image alt={author.title} path={author.photo} className={styles.photo} />
      <div>
        <p className={styles.name}>{author.title}</p>
        {author.role && (
          <p className={styles.role}>
            {author.role}
            {author.company && ` @ ${author.company}`}
          </p>
        )}
        <p className={styles.description}>{author.description}</p>
        <p className={styles.links}>
          <Link to="/pages/about">More about me</Link>
          <Link to="/pages/contacts">Get in touch</Link>
        </p>
      </div>
    </div>
  );
};

export { PostAuthor };
