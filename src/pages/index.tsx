import Layout from '../components/Layout';
import BasicMeta from '../components/meta/BasicMeta';
import OpenGraphMeta from '../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../components/meta/TwitterCardMeta';
import config from '../lib/config';

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      <TwitterCardMeta url={'/'} />
      <section className="hero">
        <div className="hero-body">
          <div className="level-item">
            <div className="level-item is-hero-avatar-item p-6">
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
            <div className="level-item is-hero-content-item">
              <div>
                <h1 className="title is-spaced">
                  Hey, I'm <b>Myles</b>
                </h1>
                <h3 className="subtitle">
                  Welcome to my{' '}
                  <span className="has-text-danger">portfolio</span> &{' '}
                  <span className="has-text-danger">blog</span>
                </h3>
                <p>
                  I'm a York based <b>Tech Lead</b> and <b>freelance</b> web
                  designer/developer. <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
