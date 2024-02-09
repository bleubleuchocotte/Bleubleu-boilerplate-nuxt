<script setup lang="ts">
type ComponentProps = {
	url: string
};
defineProps<ComponentProps>();

useSeoMeta({
	title: "404 Erreur",
});

const safeRoute = "/";

const onClick: () => void = async () => {
	await clearError({
		redirect: safeRoute,
	});
};
</script>

<template>
	<div>
		<h1>Il semblerait que la page recherchée n'existe pas</h1>
		<p>
			URL : {{ url }}
		</p>

		<UIButton @click="onClick">
			Revenir à la page d'accueil
		</UIButton>
	</div>
</template>
