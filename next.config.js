module.exports = {
  pageExtensions: ['tsx'],
  output: 'export',
  images: {
    path: 'https://res.cloudinary.com/dgsslqupd/image/upload/',
    loader: 'cloudinary',
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: 'json',
          use: 'yaml-loader',
        },
        {
          test: /\.svg$/,
          use: '@svgr/webpack',
        },
      ]
    );
    return config;
  },
};
