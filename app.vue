<script setup lang="ts">
const { origin } = useRequestURL();

updateSiteConfig({
	name: "",
	url: origin,
});

useHead({
	// Toutes les options seront incluses dans toutes les pages
	title: "",
	htmlAttrs: {
		lang: "",
	},
	link: [{
		rel: "icon",
		type: "image/png",
		href: `${origin}/favicon-32x32.ico`,
	}],

});

useSeoMeta({
	// Flat
	title: "",
	description: "",
	applicationName: "",
	themeColor: "",
	creator: "Bleubleu chocotte",
	charset: "utf-8",
	viewport: "width=device-width, initial-scale=1.0",

	// OG
	ogUrl: "",
	ogType: "website",
	ogLocale: "",
	ogTitle: "",
	ogDescription: "",
	ogImage: {
		url: `${origin}/images/og-image.png`, // Must be an absolute path,
		type: "image/png",
	},

	// Twitter
	twitterTitle: "",
	twitterDescription: "",
	twitterImage: {
		url: `${origin}/images/og-image.png`, // Must be an absolute path,
		type: "image/png",
	},
	twitterCard: "summary_large_image",

});
</script>

<template>
	<NuxtLoadingIndicator :throttle="0" />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
