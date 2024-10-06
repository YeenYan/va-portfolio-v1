<template>
	<div
		class="hover-button"
		@mousemove="handleMouseMove"
		@mouseleave="resetPosition"
	>
		<div class="bg-only" :style="{ transform: buttonTransform }"></div>
		<slot></slot>
	</div>
</template>

<script>
	import { computed } from "vue";
	import { useStore } from "vuex";

	export default {
		setup() {
			const store = useStore();

			const buttonTransform = computed(() => store.state.buttonTransform);

			const handleMouseMove = (event) => {
				const buttonRect = event.target.getBoundingClientRect();
				const offsetX = event.clientX - buttonRect.left;
				const offsetY = event.clientY - buttonRect.top;

				// Calculate movement
				// Adjust multiplier for movement
				const moveX = (offsetX / buttonRect.width - 0.5) * 10;
				const moveY = (offsetY / buttonRect.height - 0.5) * 10;

				store.commit("setButtonTransform", `translate(${moveX}px, ${moveY}px)`);
			};

			const resetPosition = () => {
				// Reset position
				store.commit("resetButtonTransform");
			};

			return {
				buttonTransform,
				handleMouseMove,
				resetPosition,
			};
		},
	};
</script>

<style lang="postcss" scoped>
	.hover-button {
		@apply cursor-pointer w-fit rounded;
		position: relative;
	}

	.hover-button:hover > .bg-only {
		@apply absolute w-full h-full bg-neutral-200 cursor-pointer rounded;
	}

	.hover-button:hover > :deep(li) {
		@apply text-neutral-700 font-medium;
		/* transform: scale(1.1); */
	}
</style>
