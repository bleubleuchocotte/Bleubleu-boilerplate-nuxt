<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

type NuxtLinkProps = {
	to?: RouteLocationRaw
	href?: RouteLocationRaw
	external?: boolean
	replace?: boolean
	custom?: boolean
	target?: "_blank" | "_parent" | "_self" | "_top"
	rel?: string | null
	noRel?: boolean
	prefetch?: boolean
	noPrefetch?: boolean
	activeClass?: string
	exactActiveClass?: string
	ariaCurrentValue?: string
};

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
