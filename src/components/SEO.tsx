import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  publishedAt?: string;
  author?: string;
  image?: string;
  imageAlt?: string;
};

const SITE_URL = "https://www.ozotech.io";

const SEO = ({ title, description, canonical, type = "website", publishedAt, author, image, imageAlt }: SEOProps) => {
  const url = canonical ? (canonical.startsWith("http") ? canonical : `${SITE_URL}${canonical}`) : SITE_URL;

  const imageUrl = image ? (image.startsWith("http") ? image : `${SITE_URL}${image}`) : undefined;
  const articleLd =
    type === "article"
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          ...(imageUrl ? { image: [imageUrl] } : {}),
          ...(publishedAt ? { datePublished: publishedAt, dateModified: publishedAt } : {}),
          author: { "@type": "Organization", name: "OZO.TECH", url: SITE_URL },
          publisher: { "@type": "Organization", name: "OZO.TECH", url: SITE_URL },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
        }
      : null;

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
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      {articleLd && <script type="application/ld+json">{JSON.stringify(articleLd)}</script>}

      {type === "article" && publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {type === "article" && author && <meta property="article:author" content={author} />}
    </Helmet>
  );
};

export default SEO;
