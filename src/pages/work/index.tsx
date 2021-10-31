import Link from 'next/link';
import Layout from '../../components/Layout';
import BasicMeta from '../../components/meta/BasicMeta';
import OpenGraphMeta from '../../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../../components/meta/TwitterCardMeta';

type Props = {};
export default function Index({}: Props) {
  const url = '/work';
  const title = 'Portfolio & Work';
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <div className="container work">
        <section className="pb-6">
          <div className="content p-4">
            <div className="block has-text-centered">
              <h1 className="title">Portfolio & Work</h1>
            </div>
            <h2 className="subtitle">This website</h2>
            <p>
              This website has been migrated over to the{' '}
              <strong>
                <a
                  className="has-text-danger dotted-underline"
                  href="https://www.netlify.com/jamstack"
                  target="_blank"
                >
                  Jamstack
                </a>
              </strong>
              , away from more traditional VPS/LAMP based hosting and older
              client-side technologies. At the root of it all is Netlify, a
              cloud-based hosting and CI/CD SaaS platform. Netlify CMS is
              powering the blog posts and some of the re-usable config such as
              meta-data.
            </p>
            <p>
              NextJS is powering the NodeJS static-generation and client-side,
              utilising React and TypeScript for the functionality and Bulma CSS
              & hand-rolled Sass for the styling. Cloudinary CDN has been used
              to deliver images from the edge; lazy-loaded, optimized and
              cached.
            </p>
            <p>
              Google fonts, FontAwesome, unDraw illustrations, Unsplash images
              and Plausible analytics are the cherry on top.
            </p>
          </div>
        </section>
        <section className="pb-6">
          <div className="content p-4">
            <h2 className="subtitle">Projects & Freelance</h2>
            <p>Lorem</p>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child notification is-primary">
                    <p className="title">Vertical...</p>
                    <p className="subtitle">Top tile</p>
                  </article>
                  <article className="tile is-child notification is-warning">
                    <p className="title">...tiles</p>
                    <p className="subtitle">Bottom tile</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-info">
                    <a
                      target="_blank"
                      href="https://eloquent-brattain-42e403.netlify.app/"
                    >
                      <p className="title">Surgo.gg</p>
                      <p className="subtitle">Check it out!</p>
                      <figure className="image is-4by3">
                        <img src="https://myles.im/images/kalen-emsley-photo-1464822759023-fed622ff2c3b.jpg" />
                      </figure>
                    </a>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-danger">
                  <p className="title">Wide tile</p>
                  <p className="subtitle">Aligned with the right tile</p>
                  <div className="content"></div>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-success">
                <div className="content">
                  <p className="title">Tall tile</p>
                  <p className="subtitle">With even more content</p>
                  <div className="content"></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="pb-6">
          <div className="content p-4">
            <h2 className="subtitle">Career</h2>
            <p>Lorem</p>
          </div>
          <div className="timeline is-centered">
            <header className="timeline-header">
              <span className="tag is-medium is-info">2013</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker is-primary"></div>
              <div className="timeline-content">
                <p className="heading">
                  <b>boohoo.com</b>
                </p>
                <p>Frontend Developer</p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-info">2016</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker is-primary"></div>
              <div className="timeline-content">
                <p className="heading">
                  <b>ao.com</b>
                </p>
                <p>Frontend Developer</p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-info">2017</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker is-primary is-icon">
                <i className="fa fa-flag"></i>
              </div>
              <div className="timeline-content">
                <p className="heading">
                  <b>missguided.com</b>
                </p>
                <p>Senior Software Engineer</p>
                <p>Software Engineer</p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-info">2019</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker is-primary is-icon">
                <i className="fa fa-flag"></i>
              </div>
              <div className="timeline-content">
                <p className="heading">
                  <b>ivendi ltd.</b>
                </p>
                <p>Principal Engineer</p>
                <p>Tech Lead</p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-info">2020</span>
            </header>
            <div className="timeline-item is-danger">
              <div className="timeline-marker is-danger"></div>
              <div className="timeline-content">
                <p className="heading">
                  <b>asos.com</b>
                </p>
                <p>Tech Lead</p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-medium is-danger">today</span>
            </header>
          </div>
        </section>
      </div>
    </Layout>
  );
}
7;
