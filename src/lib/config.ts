import config from '../../config.json';

type Config = {
  readonly base_url: string;
  readonly site_title: string;
  readonly site_description: string;
  readonly site_keywords: { keyword: string }[];
  readonly posts_per_page: number;
  readonly twitter_account: string;
  readonly facebook_account: string;
  readonly instagram_account: string;
  readonly github_account: string;
  readonly linkedin_account: string;
  readonly header: string;
  readonly feature_images: string[] | string;
};

export default config as Config;
