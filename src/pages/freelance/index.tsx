import Layout from '../../components/Layout';
import BasicMeta from '../../components/meta/BasicMeta';
import OpenGraphMeta from '../../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../../components/meta/TwitterCardMeta';
import IntakeForm from '../../components/IntakeForm';

type Props = {};
export default function Index({}: Props) {
  const url = '/freelance';
  const title = 'Work with me';
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <section className="section">
              <h1 className="title">Work with me</h1>
              <h2 className="subtitle">
                <strong>Hey!</strong> If you're here, I've asked you to fill out
                this form so that we might work together. Or, you've stumbled
                across it in the hopes of hiring a freelance developer.
              </h2>
            </section>
            <IntakeForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}
