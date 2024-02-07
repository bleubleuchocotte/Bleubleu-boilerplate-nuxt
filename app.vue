<script setup lang="ts">
const request = useRequestURL();

// On place ici les propriétés non-réactives
useServerSeoMeta({
	ogImage: `${request.origin}/images/og-image.png`,
	ogUrl: request.origin + request.pathname,

	titleTemplate: "%s | Le titre du site",
	ogTitle: "%s | Le titre du site",

	description: "La description du site.",
	ogDescription: "La description du site.",

	twitterCard: "summary_large_image",

	themeColor: "#FFFFFF",
	creator: "BleuBleu Chocotte",
});

useHead({
	htmlAttrs: {
		lang: "en",
	},
	link: [
		{
			rel: "icon",
			type: "image/png",
			href: `${request.origin}/favicon-32x32.ico`,
		},
	],
});
</script>

<template>
	<NuxtLoadingIndicator :throttle="0" />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
