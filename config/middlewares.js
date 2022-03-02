module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::cors",
    config: {
      origin: [
        "https://mjtbkh.github.io",
        "https://mjtbkh-strapi-app.onrender.com",
        "http://localhost:3000",
        "http://localhost:1337",
      ],
      headers: ["*"],
      credentials: true,
    },
  },
];
