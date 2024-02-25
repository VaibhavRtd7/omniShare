const { createProxyMiddleware } = require("http-proxy-middleware");
const url = import.meta.env.VITE_API;

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  );
};
