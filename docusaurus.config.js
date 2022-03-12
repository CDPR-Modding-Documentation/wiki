module.exports = {
  title: "My Site",
  url: "/",
  baseUrl: "/",
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
      ],
    },
    
  },
};
