const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/images',
    createProxyMiddleware({
      target: 'https://cdn.papajohns.ru/',
      changeOrigin: true,
    })
  );
};
