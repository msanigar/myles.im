import Layout from '../../components/Layout';
import BasicMeta from '../../components/meta/BasicMeta';
import OpenGraphMeta from '../../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../../components/meta/TwitterCardMeta';
import Form from '../../components/Form';
import Link from 'next/link';

type Props = {};
export default function Index({}: Props) {
  const url = '/contact';
  const title = 'Get in touch!';
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <section className="section">
              <h1 className="title">Contact</h1>
              <h2 className="subtitle">
                <strong>Hey!</strong> Feel free to get in touch...
              </h2>
            </section>
            <Form />
            <Link className="has-text-danger" href="/freelance">
              Want to hire me? let's chat!
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
