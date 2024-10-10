<template>
	<div class="introduction_container" ref="mainContainer">
		<div class="test_wrapper max_width_container">
			<DesktopLike />
		</div>
	</div>
</template>

<script setup>
	import DesktopLike from "@/components/LikeDesktop.vue";

	import { onUnmounted, ref, watch } from "vue";
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	gsap.registerPlugin(ScrollTrigger);

	// Import custom composable for managing transition state
	import { useTransitionComposable } from "../composables/transition-composable";

	// Destructure transition state from the composable
	const { transitionState } = useTransitionComposable();

	// Create a reference to the main container
	const mainContainer = ref();

	// Declare a variable to hold the GSAP context
	let ctx;

	// Watch for changes in transition state and the main reference
	watch(
		[() => transitionState.transitionComplete, mainContainer],
		(newValue) => {
			// Check if transition is complete and main is defined
			if (newValue && mainContainer.value) {
				// Create a GSAP context to scope the animations
				ctx = gsap.context((self) => {
					const container = self.selector(".test_wrapper");
					const group = self.selector(".figma_container");

					let tl = gsap.timeline({
						// x: -100,
						// Set up the scroll trigger for this animation
						scrollTrigger: {
							trigger: container,
							start: "top top",
							end: "bottom 20%",
							scrub: true, // Smoothly animate the box as the user scrolls
							pin: true, // Pin the element
							markers: {
								startColor: "blue",
								endColor: "red",
								fontSize: "18px",
								fontWeight: "bold",
								indent: 60,
							},
							// toggleClass: "animate_box",
						},
					});

					// add animations and labels to the timeline
					tl
						.from(group, {
							scale: 0.7,
							duration: 10,
						})
						.to(group, {
							scale: 2.5,
							y: 150,
							duration: 100,
						});
				}, mainContainer.value); // Pass the main element as the scope for the GSAP context);
			}
		},
		{
			immediate: true, // Run the watcher immediately on setup
		}
	);

	// Cleanup function to revert GSAP animations when the component is unmounted
	onUnmounted(() => {
		// Revert all animations and clean up
		ctx.revert();
	});
</script>

<style lang="postcss" scoped>
	.introduction_container {
		@apply w-full h-[150vh] mx-auto overflow-hidden mt-[10rem];
	}

	.introduction_wrapper {
		@apply absolute top-0 flex justify-center w-full h-full;
	}

	.image_large {
		@apply w-full absolute;
		object-fit: contain;
	}

	.test_wrapper {
		@apply h-full;
	}

	.group {
		@apply bg-green-100 w-full;
	}
</style>
