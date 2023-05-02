import { GetStaticProps } from 'next';

import Layout from '../components/Layout';
import BasicMeta from '../components/meta/BasicMeta';
import OpenGraphMeta from '../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../components/meta/TwitterCardMeta';
import { SocialList } from '../components/SocialList';
import config from '../lib/config';

import { listTags, TagContent } from '../lib/tags';
import { countPosts, listPostContent, PostContent } from '../lib/posts';
import PostList from '../components/PostList';

import ReactSvg from '../assets/react.svg';
import TypescriptSvg from '../assets/typescript.svg';
import NetlifySvg from '../assets/netlify.svg';
import BulmaSvg from '../assets/bulma.svg';

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

export default function Index({ posts, tags, pagination }: Props) {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      <TwitterCardMeta url={'/'} />
      <section className="hero">
        <div className="hero-body intro">
          <div className="avatar">
            <div className="image is-user-avatar">
              <img
                style={{
                  height: `256px`,
                  width: `256px`,
                  borderRadius: `128px`,
                }}
                src={config?.header}
              />
            </div>
          </div>
          <div className="content">
            <div>
              <h1 className="title">
                Hey, I'm <b>Myles</b>
              </h1>
              <p>
                I'm a <b>York</b> based{' '}
                <b className="has-text-danger">Engineering Manager</b> currently
                working for{' '}
                <a
                  href="https://doxy.me/"
                  target="_blank"
                  className="has-text-info dotted-underline"
                >
                  Doxy.me
                </a>
                . Here you'll find my CV, some project work and a very poorly
                maintained blog. Occasionally I pick up{' '}
                <b className="has-text-success">freelance</b> work, so feel free
                get in touch! ✌️
              </p>
              <SocialList style={'dark'} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <PostList posts={posts} pagination={pagination} home={true} />
      </section>
      <section className="pb-6 pt-6">
        <h2 className="subtitle has-text-centered">
          This website was built using the following{' '}
          <strong>
            <a
              className="has-text-danger dotted-underline"
              href="https://www.netlify.com/jamstack"
              target="_blank"
            >
              Jamstack
            </a>
          </strong>{' '}
          technologies.
        </h2>
        <nav className="level pt-3">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">React.js</p>
              <a
                title="React.js"
                href={`https://reactjs.org/`}
                target="_blank"
                rel="noopener"
              >
                <ReactSvg width={128} height={128} />
              </a>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Netlify</p>
              <a
                title="Netlify"
                href={`https://www.netlify.com/`}
                target="_blank"
                rel="noopener"
              >
                <NetlifySvg width={128} height={128} />
              </a>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">TypeScript</p>
              <a
                title="TypeScript"
                href={`https://www.typescriptlang.org/`}
                target="_blank"
                rel="noopener"
              >
                <TypescriptSvg width={128} height={128} />
              </a>
            </div>
          </div>

          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Bulma CSS</p>
              <a
                title="Bulma CSS"
                href={`https://bulma.io/`}
                target="_blank"
                rel="noopener"
              >
                <BulmaSvg width={128} height={128} />
              </a>
            </div>
          </div>
        </nav>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};
