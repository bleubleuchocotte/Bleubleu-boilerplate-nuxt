<script setup lang="ts">
type ComponentProps = {
	code: number
};

const props = defineProps<ComponentProps>();

useSeoMeta({
	title: `${props.code} Error`,
});

const error = useError();

const safeRoute = "/";

const onClick: () => void = async () => {
	await clearError({
		redirect: safeRoute,
	});
};
</script>

<template>
	<div>
		<div>Une erreur inconnue est survenu: {{ code }}</div>
		<div>{{ error?.message }}</div>
		<UIBaseButton :href="safeRoute" @click="onClick">
			Revenir à la page d'accueil
		</UIBaseButton>
	</div>
</template>
