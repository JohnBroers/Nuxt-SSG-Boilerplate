const pkg = require('./package');

export default {
	target: 'static',
	components: true,
	head: {
		titleTemplate: `${pkg.name} - %s`,
		htmlAttrs: {
			lang: 'nl',
		},
		meta: [
			{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: pkg.description
			},
			{
				hid: 'theme-color',
				name: 'theme-color',
				content: '#000000'
			}
		],
		link: [
			{ rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
			{ rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
			{ rel: 'apple-touch-icon', href: '/favicon-120x120.png' },
			{ rel: 'apple-touch-icon', href: '/favicon-180x180.png', sizes: '180x180' },
		]
	},
	loading: {
		color: '#000000',
	},
	modules: [
		'nuxt-webfontloader',
	],
	buildModules: [
        '@nuxtjs/tailwindcss',
		'@nuxtjs/fontawesome',
		'@nuxtjs/pwa'
    ],
	css: [
		'~/assets/sass/style.scss'
	],
	build: {
        extractCSS: true,
        loaders: {
            limit: 0
        }
    },
	webfontloader: {
		google: {
			families: ['Roboto:300,400,700']
		}
	},
	fontawesome: {
		component: 'fa',
		icons: {
			solid: ['faCode'],
		}
	},
	pwa: {
		icon: {
			fileName: 'favicon-512x512.png'
		},
		manifest: {
			theme_color: '#000000'
		}
	}
}
