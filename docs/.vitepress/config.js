export default {
    base: "/",
    title: "frii.site docs",
    description: "Documentation for frii.site",
    sitemap: {
        hostname: "https://guides.frii.site",
        lastmodDateOnly: false
    },
    themeConfig: {
        search: {
            provider: 'local'
        },
        logo: "https://www.frii.site/favicon.svg",
        siteTitle: "frii.site docs",
        nav: [
            { text: "Home", link: "/" },
            { text: "Contact", link: "/contact" },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/ctih1/frii.site-guides" },
            { icon: "discord", link: "https://discord.gg/ANeVwQ5yWq" },
        ],

        sidebar: [
            {
                text: "Frequently asked questions",
                collapsible: true,
                items: [
                    { text: "Specifying ports", link: "/faq/ports" },
                    { text: "Increasing domain limit", link: "/faq/domain-limit" },
                    { text: "I forgot my username", link: "/faq/forgot-username"},
                    { text: "How to support us", link: "/faq/supporting"},
                    { text: "Changing password", link: "/faq/changing-password"}
                ],
            },
            {
                text: "Guides",
                collapsible: true,
                items: [
                    { text: "Registering domains", link: "/guides/registering" },
                    { text: "Verifying Vercel", link: "/guides/vercel"},
                    { text: "Verifying discord connection", link: "/guides/discord-verification"},
                    { text: "Managing a record with your own DNS server", link: "/guides/custom-dns"},
                    { text: "Self hosting the backend", link: "/guides/self-host"},
                    { text: "The frii.site API", link: "/guides/api"}
                ],
            },
            {
                text: "Translation",
                collapsible: true,
                items: [
                    { text: "Getting started", link: "/translation/getting_started" },
                    { text: "Questions", link: "/translation/questions" },
                    { text: "Crediting yourself", link: "/translation/crediting"}
                ],
            }
        ],
    },

};