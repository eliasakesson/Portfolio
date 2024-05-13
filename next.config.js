/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"raw.githubusercontent.com",
			"upload.wikimedia.org",
			"cdn.worldvectorlogo.com",
			"www.trasmakuf.se",
			"via.placeholder.com",
		],
	},
};

module.exports = nextConfig;
