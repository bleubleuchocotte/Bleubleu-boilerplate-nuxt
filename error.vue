<script setup lang="ts">
import type { NuxtError } from "#app";

type ComponentProps = {
	error: NuxtError
};

defineProps<ComponentProps>();
</script>

<template>
	<div>
		<NuxtLayout name="404">
			<main>
				<ErrorCode404 v-if="error?.statusCode === 404" :url="$route.path" />
				<ErrorDefault v-else :code="error.statusCode ?? -1" />
			</main>
		</NuxtLayout>
	</div>
</template>
