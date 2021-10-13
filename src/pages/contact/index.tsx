import Layout from '../../components/Layout';
import BasicMeta from '../../components/meta/BasicMeta';
import OpenGraphMeta from '../../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../../components/meta/TwitterCardMeta';
import Form from '../../components/Form';

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
            <Form />
          </div>
        </div>
      </div>
    </Layout>
  );
}
