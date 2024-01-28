const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const assetPrefix = "/docs-argocd-setup-at-eks";

const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  assetPrefix,
  basePath: "/docs-argocd-setup-at-eks",
  // distDir: 'dist',
}

module.exports = {
  ...withNextra(),
  ...nextConfig,
}