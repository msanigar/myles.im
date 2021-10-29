import Layout from '../../components/Layout';
import BasicMeta from '../../components/meta/BasicMeta';
import OpenGraphMeta from '../../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../../components/meta/TwitterCardMeta';

type Props = {};
export default function Index({}: Props) {
  const url = '/about';
  const title = 'About this site';
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <div className="content p-4">
        <div className="block has-text-centered">
          <h1 className="title">Who are we?</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus orci
          odio, auctor in commodo et, posuere sit amet neque. Donec nec auctor
          ante. Mauris interdum neque ac rutrum consequat. Nunc urna lorem,
          vehicula in molestie id, imperdiet sed nibh. Nunc blandit iaculis urna
          ut fermentum. Vivamus quis purus imperdiet, tincidunt mi id, dictum
          urna. Praesent quis ex vel lectus dapibus accumsan. Donec nec ipsum eu
          elit gravida efficitur gravida sed neque. Sed sagittis purus non
          tincidunt lobortis. Donec consequat luctus diam. Duis ut arcu odio.
          Vivamus gravida sit amet nunc at vulputate. Aliquam porttitor
          tristique mauris, ut convallis sem scelerisque in. Mauris sem odio,
          porttitor eget nunc et, tincidunt porta odio. Quisque auctor nunc
          neque, at cursus libero fringilla nec. Pellentesque a tellus faucibus,
          bibendum sapien eget, congue nunc.
        </p>
      </div>
    </Layout>
  );
}
