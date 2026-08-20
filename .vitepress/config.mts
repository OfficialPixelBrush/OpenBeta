import { defineConfig } from "vitepress";

export default defineConfig(
  {
    base: "/OpenBeta",
    title: "OpenBeta",
    description:
      "OpenBeta Project Website",

    /* TODO
    head: [
      ["link", { rel: "icon", href: "/beta-wiki/favicon.ico" }],
      ["meta", { property: "og:type", content: "website" }],
      ["meta", { property: "og:image", content: "/beta-wiki/banner.webp" }],
      ["meta", { name: "twitter:card", content: "summary_large_image" }],
      ["meta", { name: "twitter:image", content: "/beta-wiki/banner.webp" }],
    ],
    */

    // MPA builds without javascript, but has to do full-page reload when you navigate between pages
    mpa: false,
    cleanUrls: true,

    themeConfig: {
      outline: false,
      //logo: "/favicon.ico",
      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/OfficialPixelBrush/OpenBeta",
        },
        {
          icon: "discord",
          link: "https://discord.gg/JHTz2HSKrf",
        }
      ],
      editLink: {
        pattern:
          "https://github.com/OfficialPixelBrush/OpenBeta/edit/main/:path",
      },
    },
    markdown: {
      math: false,
      image: {
        lazyLoading: true,
      },
    },
  },
);
