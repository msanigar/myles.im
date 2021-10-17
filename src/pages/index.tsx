import Layout from '../components/Layout';
import BasicMeta from '../components/meta/BasicMeta';
import OpenGraphMeta from '../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../components/meta/TwitterCardMeta';

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      <TwitterCardMeta url={'/'} />
      <section className="hero is-success is-large">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">myles.im ~ work in progress</p>
            <p className="subtitle">this is my JAMstack playground..</p>
          </div>
        </div>
      </section>
      <div className="elfsight-app-c1fa2086-e756-42db-a712-53f91b5195db"></div>
      <div className="elfsight-app-7d1ce7c1-caf3-42e7-ad0e-ee3d7807f02e"></div>
      <div className="elfsight-app-2c641548-7815-4bfc-a447-fcd202028787"></div>
    </Layout>
  );
}
