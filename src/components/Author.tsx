import { AuthorContent } from '../lib/authors';

type Props = {
  author: AuthorContent;
};
export default function Author({ author }: Props) {
  return (
    <>
      <span>{author.name}</span>
    </>
  );
}
