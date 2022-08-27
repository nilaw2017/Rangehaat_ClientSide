/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "res.cloudinary.com"],
  },
  env: {
    LOCALHOST_URL: "http://localhost:1337/",
    HEROKU_HOST_URL: "https://rangehaatserver.herokuapp.com/",
    HOST_URL: "https://www.rangehaat.com/",
    // CLOUDINARY_IMAGE: "res.cloudinary.com",
  },
};

module.exports = nextConfig;
