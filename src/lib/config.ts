import config from '../../config.json';

type Config = {
  readonly base_url: string;
  readonly site_title: string;
  readonly site_description: string;
  readonly site_keywords: { keyword: string }[];
  readonly posts_per_page: number;
  readonly twitter_account: string;
  readonly github_account: string;
  readonly header: string;
  readonly featureone: string;
  readonly featuretwo: string;
  readonly featurethree: string;
};

export default config as Config;
