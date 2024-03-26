<script setup lang="ts">
import type { NuxtLinkProps } from "#app/components/nuxt-link";

const props = withDefaults(defineProps<NuxtLinkProps>(), {
	noPrefetch: undefined,
	prefetch: true,
});
</script>

<template>
	<NuxtLink v-bind="props" class="link">
		<slot />
	</NuxtLink>
</template>

<style scoped lang="scss">
.link {
	&:visited,
	&:link {
		color: unset;
	}
	// // focus-visible let the UA determines when it need to apply focus style
	&:focus,
	&:focus-within,
	&:focus-visible {
		outline: 1px solid currentColor;
	}

	// &:any-link {
	// 	text-decoration: unset;
	// }
}
</style>
