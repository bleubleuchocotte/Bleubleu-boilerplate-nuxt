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
	&:not([disabled]) {
		cursor: pointer;

		&:hover {
			color: red;
		}

		&:active {
			color: green;
		}

		// focus-visible let the UA determines when it need to apply focus style
		&:focus,
		&:focus-within,
		&:focus-visible {
			outline: 1px solid currentColor;
		}
	}
}
</style>
