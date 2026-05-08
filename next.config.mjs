/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "rimg.bookwalker.jp",
				pathname: "/**"
			},
			{
				protocol: "https",
				hostname: "mangadex.org",
				pathname: "/**"
			},
			{
				protocol: "https",
				hostname: "i.pximg.net",
				pathname: "/**"
			}
		]
	}
};

export default nextConfig;
