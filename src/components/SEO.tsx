import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  publishedAt?: string;
  author?: string;
};

const SITE_URL = "https://www.ozotech.io";

const SEO = ({ title, description, canonical, type = "website", publishedAt, author }: SEOProps) => {
  const url = canonical ? (canonical.startsWith("http") ? canonical : `${SITE_URL}${canonical}`) : SITE_URL;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {type === "article" && publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {type === "article" && author && <meta property="article:author" content={author} />}
    </Helmet>
  );
};

export default SEO;
