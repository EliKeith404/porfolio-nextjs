/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['images.ctfassets.net', 'raw.githubusercontent.com'],
	},
};

module.exports = nextConfig;
