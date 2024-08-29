// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	modules: [
		"@vueuse/nuxt",
		"@nuxtjs/sitemap",
		"@nuxtjs/robots",
	],

	css: ["@/assets/styles/reset.css", "@/assets/styles/1-base/_base-default.scss"],

	app: {
		head: {
			title: "Le titre du site",
			htmlAttrs: {
				lang: "fr",
			},
			link: [{
				rel: "icon",
				type: "image/png",
				href: `/favicon-32x32.ico`,
			}],
			meta: [
				{
					name: "description",
					content: "La description du site",
				},
				{
					name: "creator",
					content: "Bleubleu Chocotte",
				},
				{
					name: "twitter:card",
					content: "summary_large_image",
				},
				{
					property: "og:title",
					content: "Le titre du site",
				},
				{
					property: "og:description",
					content: "La description du site",
				},
				{
					property: "og:image",
					content: "/images/og-image.png",
				},
			],
		},
	},

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: "@import \"@/assets/styles/main.scss\";",
				},
			},
		},
	},

	robots: {
		disallow: ["/legal-notice"],
	},

	compatibilityDate: "2024-08-29",
});
