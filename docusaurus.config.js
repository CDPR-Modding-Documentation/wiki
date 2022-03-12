module.exports = {
  title: "My Site",
  url: "http://wolvenkit.github.org",
  baseUrl: "/wiki/",
  deploymentBranch: 'gh-pages',
  projectName: 'wiki',
  organizationName: 'WolvenKit',
  githubHost: 'github.com',
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          id: "WolvenKit",
          path: "wkit",
          routeBasePath: "wolvenkit",
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: true,
          
        },
        blog: false,
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "CyberEngineTweaks",
        path: "cet",
        routeBasePath: "cet",
        sidebarPath: require.resolve("./sidebars.js"),
        sidebarCollapsible: true,
        
      },
    ],
  ],
  themeConfig: {
    autoCollapseSidebarCategories: false,
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "RED Modding Wiki",
      logo: {
        alt: 'Red Sammy',
        src: 'img/wkit_sammy_128px.png',
        width: 32,
        height: 32,
      },
      items: [
        {
          to: "wolvenkit/",
          label: "WolvenKit Docs",
        },
        {
          to: "cet/",
          label: "CyberEngineTweaks Docs",
        },
        {
          to: "https://daringfireball.net/projects/markdown/syntax",
          label: "Markdown Syntax",
        },
        {
          to: "https://docusaurus.io/docs/markdown-features",
          label: "Markdown Syntax 02",
        },
      ],
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
};
