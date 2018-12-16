const SETTINGS = {
    API_BASE: '/api/',
    AUTH_TOKEN_NAME: 'hooks_demo_token',
    AUTH_REFRESH_TOKEN_NAME: 'hooks_demo_refresh_token',
    LANGUAGE_COOKIE_NAME: 'hooks_demo_language',
    CSRF_COOKIE_NAME: 'csrftoken',
    DEFAULT_LANGUAGE: 'et',
    LANGUAGE_ORDER: [
        'en',
        'et',
    ],
    LANGUAGES: {
        en: 'English',
        et: 'Eesti keel',
    },
    DJANGO_URL_PREFIX: '/d/',
    DJANGO_MEDIA_URL: '/media/',
    DJANGO_STATIC_URL: '/assets/',
    DJANGO_ADMIN_PANEL: '/tagauks/',

    SITE_URL: process.env.RAZZLE_SITE_URL,
    DJANGO_SITE_URL: process.env.RAZZLE_DJANGO_SITE_URL,
    RAVEN_PUBLIC_DSN: process.env.RAZZLE_RAVEN_PUBLIC_DSN,

    APP_PROXY: {},
    MAX_WORKERS: process.env.RAZZLE_MAX_WORKERS || 0,
    DEBUG: process.env.NODE_ENV !== 'production' ? true : process.env.VERBOSE,
};

if (process.env.BUILD_TARGET === 'server') {
    SETTINGS.CLUSTERED = false;
    SETTINGS.FILE_LOGGING = process.env.RAZZLE_FILE_LOGGING === 'true';
    SETTINGS.LOGGING_DIR = process.env.RAZZLE_LOGGING_DIR || '/var/log/hooks_demo/';
    SETTINGS.LOGGING_FILE_PREFIX = process.env.RAZZLE_LOGGING_FILE_PREFIX || 'node';

    const docker = require('is-docker');
    // If in development and inside docker, change django url to http://django
    if (process.env.NODE_ENV !== 'production' && docker()) {
        SETTINGS.DJANGO_SITE_URL = 'http://django';
    }

    if (process.env.NODE_ENV !== 'production') {
        SETTINGS.APP_PROXY = {
            [SETTINGS.API_BASE]: SETTINGS.DJANGO_SITE_URL,
            [SETTINGS.DJANGO_URL_PREFIX]: SETTINGS.DJANGO_SITE_URL,
            [SETTINGS.DJANGO_MEDIA_URL]: SETTINGS.DJANGO_SITE_URL,
            [SETTINGS.DJANGO_STATIC_URL]: SETTINGS.DJANGO_SITE_URL,
            [SETTINGS.DJANGO_ADMIN_PANEL]: SETTINGS.DJANGO_SITE_URL,
        };
    } else {
        const cluster = require('cluster');
        if (cluster.isWorker) {
            SETTINGS.CLUSTERED = true;

            SETTINGS.WORKER_ID = cluster.worker.id;
        }
    }
}

export default Object.freeze(SETTINGS);
