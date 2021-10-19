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
      <div className="column is-one-third" style={{ cursor: `pointer` }}>
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                style={{ objectFit: `cover` }}
                src={post.thumbnail}
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="card-content">
            <p className="has-text-weight-bold">{post.title}</p>
            <div className="content">
              {post.shortText}
              <br />
              <div className="has-text-right	">
                <Date date={parseISO(post.date)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
