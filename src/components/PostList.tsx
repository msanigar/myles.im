import React from 'react';
import { PostContent } from '../lib/posts';
import PostItem from './PostItem';
import Pagination from './Pagination';

type Props = {
  posts: PostContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function PostList({ posts, pagination }: Props) {
  return (
    <>
      <div className="container">
        <section className="section">
          <h2 className="subtitle">
            <b className="under-sub">Latest Posts</b>
          </h2>
          <div>
            {posts.slice(0, 3).map((it, i) => (
              <PostItem key={i} post={it} />
            ))}
          </div>
        </section>
      </div>
      <section className="section">
        {pagination.pages > 1 && (
          <Pagination
            current={pagination.current}
            pages={pagination.pages}
            link={{
              href: (page) => (page === 1 ? '/posts' : '/posts/page/[page]'),
              as: (page) => (page === 1 ? null : '/posts/page/' + page),
            }}
          />
        )}
      </section>
    </>
  );
}
