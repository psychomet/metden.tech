module.exports = {
    script: 'serve',
    env: {
        PM2_SERVE_PATH: 'dist/metden.tech',
        PM2_SERVE_PORT: 3399,
        PM2_SERVE_SPA: 'true',
        PM2_SERVE_HOMEPAGE: '/index.html',
    },
};
