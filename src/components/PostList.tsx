import React from 'react';
import { PostContent } from '../lib/posts';
import PostItem from './PostItem';
import Pagination from './Pagination';

type Props = {
  posts: PostContent[];
  home?: boolean;
  pagination: {
    current: number;
    pages: number;
  };
};
export default function PostList({ posts, pagination, home }: Props) {
  return (
    <>
      <div className="container">
        <section className="section">
          <h2 className="subtitle">
            {home ? (
              <b className="under-sub">Latest Posts</b>
            ) : (
              <b className="under-sub">All Posts</b>
            )}
          </h2>
          <div>
            {home
              ? posts.slice(0, 3).map((it, i) => <PostItem key={i} post={it} />)
              : posts.map((it, i) => <PostItem key={i} post={it} />)}
          </div>
          {!home && pagination.pages > 1 && (
            <div className="block has-text-centered">
              <Pagination
                current={pagination?.current}
                pages={pagination?.pages}
                link={{
                  href: (page) =>
                    page === 1 ? '/posts' : '/posts/page/[page]',
                  as: (page) => (page === 1 ? null : '/posts/page/' + page),
                }}
              />
            </div>
          )}
        </section>
      </div>
    </>
  );
}
