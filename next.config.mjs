/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{protocol: "https", hostname: "dragonball-api.com"}, {protocol: "https", hostname: "web.dragonball-api.com"},
            {protocol: "https", hostname: "static.wikia.nocookie.net"}
        ]
    },
};

rewrites: () => {
    return [
            {
            source:"/",
            destination:"/app",
            },
            {
                source:"/fetch",
                destination:"/fetch",
                },
            {
                source:"/axios",
                destination: "/axios"
                },
            {
                source:"/server",
                destination: "/server"
            },
        ]
    }


export default nextConfig;
