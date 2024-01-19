<template>
	<NuxtLoadingIndicator :throttle="0" />
	<div>
		<TheHeader />
		<slot />
		<TheFooter />
	</div>
</template>
