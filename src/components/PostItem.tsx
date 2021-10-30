import { PostContent } from '../lib/posts';
import Date from './Date';
import Link from 'next/link';
import { parseISO } from 'date-fns';
import TagLink from './TagLink';
import { getTag } from '../lib/tags';

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  const truncateString = (string = '', maxLength = 328) =>
    string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;
  return (
    <article className="media home-post">
      <figure className="media-left">
        <p className="image">
          <img
            className="shine"
            style={{ objectFit: `cover` }}
            src={post.thumbnail}
            alt="Placeholder image"
          />{' '}
        </p>
      </figure>
      <div className="media-content">
        <ul className={'tag-list'}>
          {post.tags.map((it, i) => (
            <li key={i}>
              <TagLink tag={getTag(it)} />
            </li>
          ))}
        </ul>
        <div className="content">
          <p>
            <span className="mb-0 pb-2">
              <strong>{post.title}</strong>
              {' - '}
              <small>
                <Date date={parseISO(post.date)} />
              </small>
            </span>
            {truncateString(post.shortText)}
            <span className="pt-2">
              <Link href={'/posts/' + post.slug}>
                <a className="has-text-danger">
                  <b>Read more...</b>
                </a>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </article>
  );
}
