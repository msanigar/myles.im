import Layout from '../components/Layout';
import BasicMeta from '../components/meta/BasicMeta';
import OpenGraphMeta from '../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../components/meta/TwitterCardMeta';
import config from '../lib/config';
import Carousel from '../components/carousel/Carousel';

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
      <div>
        {config.header && <img src={config.header} />}
        {config.feature_images?.length > 0 && (
          <Carousel slides={config.feature_images} />
        )}
      </div>
      <div className="container">
        <div className="elfsight-app-c1fa2086-e756-42db-a712-53f91b5195db"></div>
        <div className="elfsight-app-7d1ce7c1-caf3-42e7-ad0e-ee3d7807f02e"></div>
        <div className="elfsight-app-59bdb7b0-0f06-4f81-b9f5-24d3ef875a73"></div>
      </div>
    </Layout>
  );
}
