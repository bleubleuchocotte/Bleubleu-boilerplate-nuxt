<script setup lang="ts">
useSeoMeta({
	title: "Accueil",
});

function error500() {
	throw createError({ statusCode: 500, fatal: true });
}
</script>

<template>
	<main class="page-home">
		<h1>Ceci est mon h1</h1>

		<UIButton>
			Ceci est le contenu de mon bouton
		</UIButton>

		<UIAccordion state-key="foo">
			<template #title>
				Le titre de mon accordéon
			</template>

			<template #content>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta libero temporibus exercitationem nemo nulla eveniet voluptatibus suscipit velit, molestias blanditiis, dignissimos totam veniam. Quo quia, nostrum eaque adipisci accusantium reiciendis?
			</template>
		</UIAccordion>

		<UILink to="/404">
			Ceci est un lien
		</UILink>
		<UIButton @click="error500">
			Error 500
		</UIButton>

		<input type="text">
		<textarea />
	</main>
</template>

<style scoped lang="scss">
.page-home {
	min-height: 100vh;
}
</style>
