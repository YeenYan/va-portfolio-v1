<template>
	<MainLoader v-if="loading" />
	<main class="app_container" v-else>
		<header class="header_container">
			<Navigation />
			<HeaderContent />
		</header>

		<section>
			<IntroductionContent v-if="!mobile_screen" />
			<IntroductionAbout />
			<WhyMeContent />
			<div ref="serviceContainer">
				<ServicesContent />
			</div>
			<div class="sample">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo suscipit
				provident ullam cupiditate dolore asperiores ipsam blanditiis id odit natus.
			</div>
		</section>
	</main>
</template>

<script setup>
	import Navigation from "@/views/Navigation.vue";
	import HeaderContent from "@/views/HeaderContent.vue";
	import IntroductionContent from "@/views/IntroductionContent.vue";
	import IntroductionAbout from "@/views/IntroductionAbout.vue";
	import WhyMeContent from "@/views/WhyMeContent.vue";
	import ServicesContent from "@/views/ServicesContent.vue";
	import MainLoader from "@/components/Main_Loader.vue";
	import { useImageLoader } from "@/composables/useImageLoader";
	import { ref, computed, onMounted, onUnmounted } from "vue";
	import { useStore } from "vuex";

	// Use the image loader composable
	const { loading, loadAllImages } = useImageLoader();
	const store = useStore();

	// Computed property to access the screen width from the store
	const mobile_screen = computed(() => store.state.mobile_screen);

	// Ref for the target element
	const serviceContainer = ref(null);

	// Function to check if the element is at the top of the viewport
	const checkIfAtTop = () => {
		if (serviceContainer.value) {
			const rect = serviceContainer.value.getBoundingClientRect();
			// Check if the top of the element is at or above the top of the viewport
			if (rect.top <= 0 && rect.bottom >= 700) {
				store.commit("changeNavBackground", true);
			} else {
				store.commit("changeNavBackground", false);
			}
		}
	};

	// Handle scroll events
	onMounted(() => {
		window.addEventListener("scroll", checkIfAtTop);
		window.addEventListener("resize", updateScreenWidth);
		updateScreenWidth(); // Set the initial screen width
		loadAllImages();
	});

	// Cleanup on unmount
	onUnmounted(() => {
		window.removeEventListener("scroll", checkIfAtTop);
		window.removeEventListener("resize", updateScreenWidth);
	});

	// Handle screen resizing
	const updateScreenWidth = () => {
		store.commit("checkScreen");
	};
</script>

<style>
	/* Your styles here */
</style>

<style lang="postcss">
	/* * {
		@apply outline-1 outline-red-500 outline;
	} */

	.sample {
		@apply h-[200vh];
	}

	html {
		scroll-behavior: smooth;
	}

	.placeholder {
		@apply h-screen;
	}

	/* Scrollbar Styles */
	/* html {
		scrollbar-width: thin;
		scrollbar-color: #fbaf3f;
	}
	::-webkit-scrollbar {
		width: 10px;
	}
	::-webkit-scrollbar-track {
		background: transparent;
	}
	::-webkit-scrollbar-thumb {
		background-color: #fbaf3f;
		border: #fbaf3f;
		border-radius: 10px;
	} */

	/*****************************************
 ************** BUTTON STYLES *************
 ****************************************/
	.btn {
		@apply py-[.6rem] text-sm font-medium px-[1.5rem] rounded-full;
		transition: all 0.5s ease-in-out;
	}

	.btn_outline {
		@apply border-[.3px] border-primary-600 text-primary-600;
	}

	.btn_outline:hover {
		@apply bg-primary-100;
	}

	/*****************************************
 *********** HEADER_CONTAINER *************
 ****************************************/
	.header_container {
		@apply w-full;
	}

	/*****************************************
 ********** MAX_WIDTH_CONTAINER ***********
 ****************************************/
	.max_width_container {
		@apply w-[90%] mx-auto;
	}

	/*****************************************
 ************ SECTION_HEADERS *************
 ****************************************/
	.section_title_wrapper {
		@apply text-center w-full max-w-[38rem] mx-auto;
	}

	.section_title_wrapper > .title_heading {
		@apply text-neutral-800 font-bold;
		font-size: clamp(2.1rem, 2vw, 3rem);
	}

	.section_title_wrapper > .title_subheading {
		@apply text-neutral-600 font-semibold;
		font-size: clamp(1rem, 2vw, 1.5rem);
	}

	.section_title_wrapper > .title_details {
		@apply w-[90%] mx-auto pt-[1rem];
		font-size: clamp(0.875rem, 1vw, 1rem);
	}

	@media (min-width: 900px) {
		/*****************************************
 	********** MAX_WIDTH_CONTAINER ***********
 	****************************************/
		.max_width_container {
			@apply w-[94%] max-w-[71rem];
		}
	}
</style>
