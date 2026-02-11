// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import remarkMarkmap from 'remark-markmap'

import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
    site: 'https://markmapu.js.org',
    integrations: [
        starlight({
            title: 'Markmap Universe',
            defaultLocale: 'root',
            locales: {
                root: {
                    label: 'English',
                    lang: 'en',
                },
                'zh-cn': {
                    label: '简体中文',
                    lang: 'zh-CN',
                },
            },
            logo: {
                src: "~/assets/logo.png"
            },
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/markmap-universe' },
            ],
            sidebar: [
                { label: 'Overview', slug: 'overview' },
                {
                    label: 'Packages',
                    items: [
                        { label: 'hexo-markmap', slug: 'hexo-markmap' },
                        { label: 'remark-markmap', slug: 'remark-markmap' },
                    ],
                },
            ],
            favicon: '/favicon.png',
            editLink: {
                baseUrl: 'https://github.com/markmap-universe/homepage/tree/main/',
            },
            customCss: [
                './src/styles/custom.css',
                './src/assets/landing.css',
            ]
        }),
        vue()
    ],
    markdown: {
        remarkPlugins: [
            [remarkMarkmap, { darkThemeSelector: () => '[data-theme=dark]' }]
        ]
    }
})
