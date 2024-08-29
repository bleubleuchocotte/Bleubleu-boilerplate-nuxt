// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	modules: [
		"@vueuse/nuxt",
		"@nuxtjs/sitemap",
		"@nuxtjs/robots",
	],

	css: ["@/assets/styles/reset.css", "@/assets/styles/1-base/_base-default.scss"],

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
