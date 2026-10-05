import React, { type FC } from "react";

import { Link } from "gatsby";

import type { Node } from "@/types/node";
import { Button } from "@/components/button";
import { PostAuthor } from "@/components/post-author";
import { PostContent } from "@/components/post-content";
import { ThemeSwitcher } from "@/components/theme-switcher";

import * as styles from "./post.module.scss";

interface PostProps {
  post: Node;
}

const Post: FC<PostProps> = ({ post }) => {
  const { html } = post;
  const { categorySlug } = post.fields;
  const { tags, title, date, category, description } = post.frontmatter;

  return (
    <div className={styles.post}>
      <div className={styles.buttons}>
        <Button className={styles.buttonArticles} title="← All projects" to="/" />
        <ThemeSwitcher />
      </div>
      <header className={styles.header}>
        <div className={styles.meta}>
          {category && categorySlug ? (
            <Link className={styles.category} to={categorySlug}>
              {category}
            </Link>
          ) : null}
          <time className={styles.time} dateTime={date}>
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </time>
        </div>
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.lede}>{description}</p>}
        {tags && tags.length > 0 && (
          <ul className="chips">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </header>
      <div className={styles.content}>
        <PostContent body={html} />
      </div>
      <div className={styles.footer}>
        <PostAuthor />
      </div>
    </div>
  );
};

export { Post };
