import React from 'react';
import { PostContent } from '../lib/posts';
import { TagContent } from '../lib/tags';
import PostItem from './PostItem';
import Pagination from './Pagination';
import Link from 'next/link';

type Props = {
  posts: PostContent[];
  tag: TagContent;
  pagination: {
    current: number;
    pages: number;
  };
};
export default function TagPostList({ posts, tag, pagination }: Props) {
  return (
    <div className={'container'}>
      <h1>
        <Link href="/posts">All posts</Link> / <span>{tag.name}</span>
      </h1>
      <ul>
        {posts.map((it, i) => (
          <li key={i}>
            <PostItem post={it} />
          </li>
        ))}
      </ul>
      <Pagination
        current={pagination.current}
        pages={pagination.pages}
        link={{
          href: () => '/posts/tags/[[...slug]]',
          as: (page) =>
            page === 1
              ? '/posts/tags/' + tag.slug
              : `/posts/tags/${tag.slug}/${page}`,
        }}
      />
    </div>
  );
}
