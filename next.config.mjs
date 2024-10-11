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
                source:"/primeira-rota",
                destination:"/primeira-rota",
                },
            {
                source:"/segunda-rota",
                destination: "/segunda-rota"
                },
            {
                source:"/terceira-rota",
                destination: "/terceira-rota"
            },
        ]
    }


export default nextConfig;
