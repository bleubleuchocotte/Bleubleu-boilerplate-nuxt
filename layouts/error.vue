<template>
	<UIContainer wrapper="main" class="layout-error">
		<slot />
	</UIContainer>
</template>

<style scoped lang="scss">
.layout-error {
	min-height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@include gap(8);
}
</style>
