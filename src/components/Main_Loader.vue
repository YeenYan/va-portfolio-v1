<template>
	<div class="main_loader_wrapper">
		<figure class="loader">
			<div class="dot white"></div>
			<div class="dot"></div>
			<div class="dot"></div>
			<div class="dot"></div>
			<div class="dot"></div>
		</figure>
		<p>Loading...</p>
	</div>
</template>

<style lang="postcss" scoped>
	/* From Uiverse.io by Nawsome */
	.main_loader_wrapper {
		@apply flex items-center justify-center h-screen relative;
	}

	.loader {
		position: absolute;
		margin: auto;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 6.25em;
		height: 6.25em;
		animation: rotate5123 2.4s linear infinite;
	}

	.white {
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: white;
		animation: flash 2.4s linear infinite;
		opacity: 0;
	}

	.dot {
		position: absolute;
		margin: auto;
		width: 2.4em;
		height: 2.4em;
		border-radius: 100%;
		transition: all 1s ease;
	}

	.dot:nth-child(2) {
		@apply bg-primary-500;
		top: 0;
		bottom: 0;
		left: 0;
		animation: dotsY 2.4s linear infinite;
	}

	.dot:nth-child(3) {
		@apply bg-red-500;
		left: 0;
		right: 0;
		top: 0;
		animation: dotsX 2.4s linear infinite;
	}

	.dot:nth-child(4) {
		@apply bg-purple-500;
		top: 0;
		bottom: 0;
		right: 0;
		animation: dotsY 2.4s linear infinite;
	}

	.dot:nth-child(5) {
		@apply bg-blue-500;
		left: 0;
		right: 0;
		bottom: 0;
		animation: dotsX 2.4s linear infinite;
	}

	@keyframes rotate5123 {
		0% {
			transform: rotate(0);
		}

		10% {
			width: 6.25em;
			height: 6.25em;
		}

		66% {
			width: 2.4em;
			height: 2.4em;
		}

		100% {
			transform: rotate(360deg);
			width: 6.25em;
			height: 6.25em;
		}
	}

	p {
		@apply text-sm text-neutral-600 pt-[8rem];
		animation: dotsX 2.4s linear infinite;
	}

	@keyframes dotsY {
		66% {
			opacity: 0.1;
			width: 2.4em;
		}

		77% {
			opacity: 1;
			width: 0;
		}
	}

	@keyframes dotsX {
		66% {
			opacity: 0.1;
			height: 2.4em;
		}

		77% {
			opacity: 1;
			height: 0;
		}
	}

	@keyframes flash {
		33% {
			opacity: 0;
			border-radius: 0%;
		}

		55% {
			opacity: 0.6;
			border-radius: 100%;
		}

		66% {
			opacity: 0;
		}
	}
</style>
