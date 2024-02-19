<script setup lang="ts">
const error = useError();

const isDevEnvironment = import.meta.dev;
</script>

<template>
	<div>
		<h1>Une erreur inconnue est survenu: {{ error?.statusCode ?? -1 }}</h1>
		<p v-if="isDevEnvironment">
			{{ error?.message }}
		</p>
	</div>
</template>
