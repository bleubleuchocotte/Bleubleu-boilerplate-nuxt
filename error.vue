<script setup lang="ts">
import type { NuxtError } from "#app";

type ComponentProps = {
	error: NuxtError
};

const props = defineProps<ComponentProps>();

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
	colorScheme: "light dark",

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

useSeoMeta({
	title: `${props.error.statusCode} Error`,
});

const onClick: () => void = async () => {
	await clearError({
		redirect: "/",
	});
};
</script>

<template>
	<div>
		<NuxtLayout name="error">
			<ErrorCode404 v-if="error?.statusCode === 404" />
			<ErrorDefault v-else />

			<UIButton @click="onClick">
				Revenir à la page d'accueil
			</UIButton>
		</NuxtLayout>
	</div>
</template>
