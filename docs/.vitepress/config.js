export default {
    title: "frii.site docs",
    description: "Documentation for frii.site",
    themeConfig: {
        search: {
            provider: 'local'
        },
        logo: "https://www.frii.site/favicon.svg",
        siteTitle: "frii.site docs",
        nav: [
            { text: "Home", link: "/" },
            { text: "Guides", link: "/guides" },
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
                    { text: "I forgot my username", link: "/faq/forgot-username"}
                ],
            },
            {
                text: "Domain modification",
                collapsible: true,
                items: [
                    { text: "Registering", link: "/guides/registering" },
                    { text: "Modifying", link: "/guides/modify" },
                    { text: "Verifying Vercel", link: "/guides/vercel"}
                ],
            }
        ],
    },

};