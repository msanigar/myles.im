import React from 'react';
import { PostContent } from '../lib/posts';
import PostItem from './PostItem';
import Pagination from './Pagination';
import TagLink from './TagLink';
import { TagContent } from '../lib/tags';

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function PostList({ posts, tags, pagination }: Props) {
  return (
    <>
      <div className="container">
        <section className="section">
          <h1 className="title">Section</h1>
          <h2 className="subtitle">
            <strong>Netflify CMS</strong> blows my mind.
          </h2>
        </section>
        <div className="columns is-multiline is-mobile">
          {posts.map((it, i) => (
            <PostItem key={i} post={it} />
          ))}
        </div>
        <div className={'columns'}>
          <ul className={'categories'}>
            {tags.map((it, i) => (
              <li key={i}>
                <TagLink tag={it} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Pagination
        current={pagination.current}
        pages={pagination.pages}
        link={{
          href: (page) => (page === 1 ? '/posts' : '/posts/page/[page]'),
          as: (page) => (page === 1 ? null : '/posts/page/' + page),
        }}
      />
    </>
  );
}
