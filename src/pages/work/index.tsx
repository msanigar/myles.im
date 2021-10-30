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
        <div className="content p-4">
          <div className="block has-text-centered">
            <h1 className="title">Portfolio & Work</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            orci odio, auctor in commodo et, posuere sit amet neque. Donec nec
            auctor ante. Mauris interdum neque ac rutrum consequat. Nunc urna
            lorem, vehicula in molestie id, imperdiet sed nibh. Nunc blandit
            iaculis urna ut fermentum. Vivamus quis purus imperdiet, tincidunt
            mi id, dictum urna. Praesent quis ex vel lectus dapibus accumsan.
            Donec nec ipsum eu elit gravida efficitur gravida sed neque. Sed
            sagittis purus non tincidunt lobortis. Donec consequat luctus diam.
            Duis ut arcu odio. Vivamus gravida sit amet nunc at vulputate.
            Aliquam porttitor tristique mauris, ut convallis sem scelerisque in.
            Mauris sem odio, porttitor eget nunc et, tincidunt porta odio.
            Quisque auctor nunc neque, at cursus libero fringilla nec.
            Pellentesque a tellus faucibus, bibendum sapien eget, congue nunc.
          </p>
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
      </div>
    </Layout>
  );
}
