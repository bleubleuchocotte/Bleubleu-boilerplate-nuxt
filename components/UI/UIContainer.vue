<script setup lang="ts">
type ComponentProps = {
	wrapper?: keyof HTMLElementTagNameMap
};

withDefaults(defineProps<ComponentProps>(), {
	wrapper: "div",
});
</script>

<template>
	<component :is="wrapper" class="container">
		<slot />
	</component>
</template>

<style scoped lang="scss">
.container {
	@include wrapper();
}
</style>
