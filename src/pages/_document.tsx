import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
          <link rel="shortcut icon" href="/static/favicons/favicon.ico" type="image/x-icon" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
          {/* <link rel="alternate" type="application/rss+xml" href="/feed.xml" /> */}
        </Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
