import { PostContent } from '../lib/posts';
import Date from './Date';
import Link from 'next/link';
import { parseISO } from 'date-fns';

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <Link href={'/posts/' + post.slug}>
      <div className="column is-one-third tile is-parent">
        <article className="tile is-child notification is-info">
          <p className="title">{post.title}</p>
          <p className="subtitle">
            <Date date={parseISO(post.date)} />
          </p>
          {post.thumbnail && (
            <figure className="image is-4by3">
              <img src={post.thumbnail} />
            </figure>
          )}
        </article>
      </div>
    </Link>
  );
}
