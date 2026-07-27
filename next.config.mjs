/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a static site (a plain `out/` folder of HTML/CSS/JS) that can be
  // uploaded to GoDaddy shared hosting exactly like the old single HTML file.
  output: "export",

  // GoDaddy serves static files, so Next.js image optimization (which needs a
  // running server) must be turned off.
  images: { unoptimized: true },

  // Emit /team/index.html instead of /team.html so clean URLs work on Apache.
  trailingSlash: true,

  // If you ever deploy into a SUBFOLDER on GoDaddy (e.g. yoursite.com/new),
  // uncomment and set these to that folder name:
  // basePath: "/new",
  // assetPrefix: "/new/",
};

export default nextConfig;
