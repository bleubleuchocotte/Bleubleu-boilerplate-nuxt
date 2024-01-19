<script setup lang="ts">
type ComponentProps = {
	id: {
		header: string
		content: string
	}
};

defineProps<ComponentProps>();

const isOpen = ref(false);
defineExpose({ isOpen, updateHeight });

const toggleAccordion = useThrottleFn(() => {
	isOpen.value = !isOpen.value;
}, 100);

const isButtonFocused = ref(false);
const target = ref<HTMLDivElement | null>(null);
const height = ref(0);

onMounted(() => {
	updateHeight();
});

function updateHeight() {
	if (target.value) {
		height.value = target.value.scrollHeight;
	}
}
</script>

<template>
	<div class="accordion" :style="`--accordion-height: ${height}px`">
		<button
			:id="id.header"
			type="button"
			:aria-expanded="isOpen ? 'true' : 'false'"
			:aria-controls="id.content"
			class="accordion__button"
			@click="toggleAccordion"
			@focus="isButtonFocused = true"
			@blur="isButtonFocused = false"
		>
			<slot name="title" :focus="isButtonFocused || isOpen" />
		</button>
		<div
			:id="id.content"
			ref="target"
			role="region"
			:aria-labelledby="id.header"
			:aria-hidden="isOpen ? 'false' : 'true'"
			class="accordion__content"
		>
			<slot name="content" />
		</div>
	</div>
</template>

<style scoped lang="scss">
.accordion {
	&__button {
		appearance: none;
		background-color: transparent;
		border: unset;
		padding: 0;

		cursor: pointer;

		width: 100%;
	}

	&__content {
		max-height: 0;
		overflow: hidden;

		@include transition();

		&[aria-hidden="false"] {
			max-height: var(--accordion-height);
		}
	}
}
</style>
