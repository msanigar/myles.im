import React from 'react';
import styles from '../../public/styles/content.module.css';
import Author from './Author';
import Date from './Date';
import Layout from './Layout';
import BasicMeta from './meta/BasicMeta';
import JsonLdMeta from './meta/JsonLdMeta';
import OpenGraphMeta from './meta/OpenGraphMeta';
import TwitterCardMeta from './meta/TwitterCardMeta';
import TagButton from './TagButton';
import { getAuthor } from '../lib/authors';
import { getTag } from '../lib/tags';
import { useRouter } from 'next/router';

type Props = {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  author: string;
  thumbnail?: string;
  description?: string;
  children: React.ReactNode;
};
export default function PostLayout({
  title,
  date,
  slug,
  author,
  tags,
  thumbnail,
  description = '',
  children,
}: Props) {
  const keywords = tags.map((it) => getTag(it).name);
  const authorName = getAuthor(author).name;
  const router = useRouter();

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
      <div className={'container blog-post'}>
        <article className="block">
          <header className="postlist-heads">
            <h1>{title}</h1>
            <div className={'metadata'}>
              <div>
                <Date date={date} />
              </div>
              <div>
                <Author author={getAuthor(author)} />
              </div>
            </div>
            <ul className={'tag-list'}>
              {tags.map((it, i) => (
                <li key={i}>
                  <TagButton tag={getTag(it)} />
                </li>
              ))}
            </ul>
          </header>
          <div className={styles.content}>{children}</div>
        </article>
        <button
          onClick={() => router.back()}
          className="button is-info is-outlined"
        >
          <span className="icon is-small">
            <i className="fas fa-long-arrow-alt-left"></i>
          </span>
          <span>Go Back</span>
        </button>
      </div>
    </Layout>
  );
}
