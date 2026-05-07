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
			}
		]
	}
};

export default nextConfig;
