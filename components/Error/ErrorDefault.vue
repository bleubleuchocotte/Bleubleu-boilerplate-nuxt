<script setup lang="ts">
const error = useError();

const isDevEnvironment = import.meta.dev;
</script>

<template>
	<div>
		<h1>Une erreur inconnue est survenu: {{ error?.statusCode ?? -1 }}</h1>

		<div v-if="isDevEnvironment">
			<p v-if="error?.cause">
				Cause: {{ error.cause }}
			</p>
			<p v-if="error?.message">
				Message: {{ error.message }}
			</p>
			<p v-if="error?.stack">
				Stack: {{ error.stack }}
			</p>
		</div>
	</div>
</template>
