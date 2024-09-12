<script setup lang="ts">
const { origin } = useRequestURL();

useHead({
	link: [{
		rel: "icon",
		type: "image/png",
		href: `${origin}/favicon-32x32.ico`,
	}],
});

useServerSeoMeta({
	ogImage: `${origin}/images/og-image.png`,
});
</script>

<template>
	<NuxtLoadingIndicator :throttle="0" />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
