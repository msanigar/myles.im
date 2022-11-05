import { GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';
import Layout from '../../components/Layout';
import BasicMeta from '../../components/meta/BasicMeta';
import OpenGraphMeta from '../../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../../components/meta/TwitterCardMeta';

import data from '../../../images.json';

type Props = {};
export default function Page({}: Props) {
  const url = `/archive`;
  const title = 'Archive';
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <div className="container is-fullhd">
        <div className="columns is-multiline">
          {data.map((img, k) => {
            const formattedSrc = img.replace(
              'https://res.cloudinary.com/dgsslqupd/image/upload/',
              ''
            );
            return (
              <div
                className="column m-1"
                key={k}
                style={{
                  position: `relative`,
                  minWidth: `420px`,
                  height: `420px`,
                }}
              >
                <Image src={formattedSrc} alt="foo" layout="fill" objectFit="cover" />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data,
    },
  };
};
