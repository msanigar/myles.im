import React from 'react';
import styles from '../../public/styles/content.module.css';
import Author from './Author';
import Copyright from './Copyright';
import Date from './Date';
import Layout from './Layout';
import BasicMeta from './meta/BasicMeta';
import JsonLdMeta from './meta/JsonLdMeta';
import OpenGraphMeta from './meta/OpenGraphMeta';
import TwitterCardMeta from './meta/TwitterCardMeta';
import { SocialList } from './SocialList';
import TagButton from './TagButton';
import { getAuthor } from '../lib/authors';
import { getTag } from '../lib/tags';

type Props = {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  children: React.ReactNode;
};
export default function PostLayout({
  title,
  date,
  slug,
  author,
  tags,
  description = '',
  children,
}: Props) {
  const keywords = tags.map((it) => getTag(it).name);
  const authorName = getAuthor(author).name;
  return (
    <Layout>
      <BasicMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={keywords}
        description={description}
      />
      <TwitterCardMeta
        url={`/posts/${slug}`}
        title={title}
        description={description}
      />
      <OpenGraphMeta
        url={`/posts/${slug}`}
        title={title}
        description={description}
      />
      <JsonLdMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={keywords}
        date={date}
        author={authorName}
        description={description}
      />
      <div className={'container'}>
        <article>
          <header>
            <h1>{title}</h1>
            <div className={'metadata'}>
              <div>
                <Date date={date} />
              </div>
              <div>
                <Author author={getAuthor(author)} />
              </div>
            </div>
          </header>
          <div className={styles.content}>{children}</div>
          <ul className={'tag-list'}>
            {tags.map((it, i) => (
              <li key={i}>
                <TagButton tag={getTag(it)} />
              </li>
            ))}
          </ul>
        </article>
        <footer>
          <div className={'social-list'}>
            <SocialList />
          </div>
          <Copyright />
        </footer>
      </div>
    </Layout>
  );
}
