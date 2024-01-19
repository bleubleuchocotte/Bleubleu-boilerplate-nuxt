<script setup lang="ts">
useSeoMeta({
	title: "Accueil",
});
</script>

<template>
	<main class="starter">
		<h1>Heading 1</h1>
		<h2>Heading 2</h2>
		<h3>Heading 3</h3>
		<p>Un paragraphe: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid assumenda odio possimus praesentium tempora cumque quis aliquam obcaecati doloremque placeat, et aperiam autem impedit veritatis voluptatibus. Illum laborum nesciunt eaque.</p>
		<UIBaseLink href="/404">
			Vers la 404
		</UIBaseLink>
		<UIBaseLink href="/legal-notice">
			Vers les mentions légales
		</UIBaseLink>

		<UIBaseAccordion state-key="foo">
			<template #title>
				<h1>
					Le titre de mon bouton accordéon
				</h1>
			</template>
			<template #content>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam distinctio amet, labore adipisci asperiores nesciunt temporibus rem numquam commodi! Voluptates impedit nostrum minima et rerum deleniti rem exercitationem nisi dolorem!</p>
			</template>
		</UIBaseAccordion>
		<UIBaseAccordion state-key="fooa">
			<template #title>
				<h1>
					Le titre de mon bouton accordéon
				</h1>
			</template>
			<template #content>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam distinctio amet, labore adipisci asperiores nesciunt temporibus rem numquam commodi! Voluptates impedit nostrum minima et rerum deleniti rem exercitationem nisi dolorem!</p>
			</template>
		</UIBaseAccordion>
	</main>
</template>

<style scoped lang="scss">
.starter {
	height: 100vh;
	width: 100vw;

	color: #ffffff;
	background-color: #000000;
}
</style>
