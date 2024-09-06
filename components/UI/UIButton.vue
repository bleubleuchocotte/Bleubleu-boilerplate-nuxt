<script setup lang="ts">
type ButtonHTMLAttributes = {
	autofocus?: boolean
	disabled?: boolean
	form?: string
	formaction?: string
	formenctype?: string
	formmethod?: string
	formnovalidate?: boolean
	formtarget?: string
	name?: string
	type?: "submit" | "reset" | "button"
	value?: string | ReadonlyArray<string> | number
};

const props = withDefaults(defineProps<ButtonHTMLAttributes>(), {
	type: "button",
	disabled: false,
});
</script>

<template>
	<button class="button" v-bind="props">
		<slot />
	</button>
</template>

<style scoped lang="scss">
.button {
	background-color: var(--text);
	color: var(--background);

	border: 1px solid;

	@include prop("padding-block", 2);
	@include prop("padding-inline", 4);

	&:not([disabled]) {
		cursor: pointer;

		&:hover {
			background-color: var(--primary);
		}

		// focus-visible let the UA determines when it need to apply focus style
		&:focus,
		&:focus-within,
		&:focus-visible {
			outline: 1px solid var(--text);
		}
	}
}
</style>
