// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },

	modules: ["@vueuse/nuxt", "@nuxtjs/sitemap", "@nuxtjs/robots"],

	css: ["@/assets/styles/reset.css", "@/assets/styles/1-base/_base-default.scss"],

	app: {
		head: {
			title: "Le titre du site",
			htmlAttrs: {
				lang: "fr",
			},
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

	site: {
		url: "[SITE URL]",
		name: "[SITE NAME]",
		description: "[SITE DESCRIPTION]",
	},

	typescript: {
		tsConfig: {
			compilerOptions: {
				module: "es2022",
			},
		},
	},

	compatibilityDate: "2024-08-29",
});
