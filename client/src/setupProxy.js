const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // Specify the API route you want to proxy
    createProxyMiddleware({
      target: "http://localhost:8080", // Specify the target server where API requests should be forwarded
      changeOrigin: true, // Change the origin of the request to match the target server's origin
    })
  );
};
