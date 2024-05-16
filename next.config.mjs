/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack5: true,
    images: {
        domains: ['upload.wikimedia.org'],
    },
};

export default nextConfig;
