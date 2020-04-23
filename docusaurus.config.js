module.exports = {
  title: 'Check Yo Self Docs',
  tagline: 'An app to check the grammar and spelling of your markdown blog posts.',
  url: 'https://checkyoself-docs.tiffstuff.dev',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'twhite96', // Usually your GitHub org/user name.
  projectName: 'checkyoself', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/shadesOfPurple'),
    },
    navbar: {
      title: 'Check Yo Self',
      logo: {
        alt: 'Check Yo Self Docs Logo',
        src: 'img/logo.png',
      },
      themes: ['@docusaurus/theme-live-codeblock'],
      links: [
        {
          to: 'docs/intro',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/twhite96/checkyoself-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/intro',
            },
            {
              label: 'Usage',
              to: 'docs/usage',
            },
            {
              label: 'API',
              to: 'docs/api',
            },
          ],
        },
        {
          title: 'Elsewhere',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/tiffanyrwhite',
            },
            {
              label: 'Resume',
              href: 'https://resume.tiffanyrwhite.com',
            },
            {
              label: 'Portfolio',
              href: 'https://www.tiffanyrwhite.com',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/twhite96/checkyoself-docs',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/tiffanywhitedev',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Check Yo Self Docs, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/twhite96/checkyoself-docs/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
