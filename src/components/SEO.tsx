import { siteMetaData } from "@/meta/siteMetaData";

/**
 * @CommonSEO adalah SEO yang umum untuk di gunakan, tujuannya agar mudah untuk di index dan crawl oleh mesin pencari
 * Ganti informasi - informasi website pada src/meta/siteMetaData
 */

type commonSEO = {
  title: string; // Judul Halaman
  description: string; // Deskripsi konten dari sebuah halaman
};

export const CommonSEO = ({ title, description }: commonSEO) => {
  const siteTitle = `${title}`;
  return (
    <>
      <title>{siteTitle}</title>
      <meta name="robots" content="follow, index" />
      <meta httpEquiv="X-UA-Compatible" content="IE=7" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content="Enter Your Keyword" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        href="/static/favicons/favicon.ico"
        type="image/x-icon"
      />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:description" content={description} />
    </>
  );
};

export const PageSEO = () => {
  return <div>Enter</div>;
};

export const PostSEO = () => {
  return;
};
