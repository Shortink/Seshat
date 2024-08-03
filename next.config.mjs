/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                protocol: 'https',
                hostname: 'books.google.com',
                hostname: "**",
            }
        ]
    }
};

export default nextConfig;
