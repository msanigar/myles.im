import Layout from '../components/Layout';
import BasicMeta from '../components/meta/BasicMeta';
import OpenGraphMeta from '../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../components/meta/TwitterCardMeta';
import { SocialList } from '../components/SocialList';
import config from '../lib/config';

export default function Index() {
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
              <h3 className="subtitle">
                <span className="has-text-danger">Tech Lead</span> &{' '}
                <span className="has-text-danger">Web Developer</span>
              </h3>
              <p>
                I'm a York based <b>Tech Lead</b> at asos.com and{' '}
                <b>freelance</b> web developer. I'm currently{' '}
                <span className="has-text-success">
                  <b>open</b>
                </span>{' '}
                for work, so feel free get in touch!
              </p>
              <SocialList style={'dark'} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
