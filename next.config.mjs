/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https' ,
                // hostname: 'books.google.com',
                hostname: "**",
            },
            {
                protocol: 'http',
                hostname: "**",
            }
        ]
    }
};

export default nextConfig;
