<script setup lang="ts">
import type { NuxtError } from "#app";

type ComponentProps = {
	error: NuxtError
};

const props = defineProps<ComponentProps>();

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
