<template>
	<MainLoader v-if="loading" />
	<main class="app_container" :class="{ about_active: has_about }" v-else>
		<header class="header_container" id="intro">
			<Navigation @scroll="scrollToElement" />
			<HeaderContent />
		</header>

		<section>
			<IntroductionContent v-if="!mobile_screen" />
			<IntroductionAbout />
			<WhyMeContent ref="whyMe" id="whyMe" />
			<div ref="serviceContainer" id="services">
				<ServicesContent />
			</div>
			<div class="sample" id="portfolio">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo suscipit
				provident ullam cupiditate dolore asperiores ipsam blanditiis id odit natus.
			</div>
			<ContactContent id="contact" />
		</section>

		<AboutContent v-if="has_about" />
	</main>
</template>

<script setup>
	import {
		ref,
		computed,
		onMounted,
		onBeforeUnmount,
		onUnmounted,
		watch,
	} from "vue";
	import { useStore } from "vuex";
	import Navigation from "@/views/Navigation.vue";
	import HeaderContent from "@/views/HeaderContent.vue";
	import IntroductionContent from "@/views/IntroductionContent.vue";
	import IntroductionAbout from "@/views/IntroductionAbout.vue";
	import WhyMeContent from "@/views/WhyMeContent.vue";
	import ServicesContent from "@/views/ServicesContent.vue";
	import ContactContent from "@/views/ContactContent.vue";
	import AboutContent from "@/views/AboutModal.vue";
	import MainLoader from "@/components/Main_Loader.vue";
	import { useImageLoader } from "@/composables/useImageLoader";

	// Use the image loader composable
	const { loading, loadAllImages } = useImageLoader();
	const store = useStore();

	// Computed property to access the screen width from the store
	const mobile_screen = computed(() => store.state.mobile_screen);

	// ABOUT CONTENT
	const has_about = computed(() => store.state.show_about);

	// Watch then hide the bpdy scroll when about modal is visible
	watch(
		() => has_about.value,
		(newVal) => {
			document.body.style.overflow = newVal ? "hidden" : "";
		}
	);

	// Handle screen resizing
	const updateScreenWidth = () => {
		store.commit("checkScreen");
	};

	/*****************************************
	 ******** CHANGE NAVIGATION BACKGROUND
	 ****************************************/
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

	/*****************************************
	 ******** SCROLL TRIGGER
	 ****************************************/
	// Function to scroll to the target element dynamically
	const scrollToElement = (sectionId) => {
		// Get the element by ID
		const element = document.getElementById(sectionId);
		if (element) {
			const rect = element.getBoundingClientRect();
			// Current scroll position
			const scrollY = window.scrollY || window.pageYOffset;
			// Target scroll position
			// Define the offset (e.g., 10rem = 100px)
			const offset = -40; // Adjust this value as needed

			// Calculate the target scroll position with the offset
			const targetY = scrollY + rect.top - offset;

			// Smooth scroll to the target position
			window.scrollTo({
				top: targetY,
				behavior: "smooth",
			});
		}
	};

	// Set up the scroll event listener
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

	// Clean up the event listeners on component unmount
	onBeforeUnmount(() => {
		// No scroll event listener needed anymore
	});
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

	/* .app_container.about_active {
		@apply h-screen overflow-hidden;
	} */

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

	/*****************************************
	********** LINKS
	****************************************/
	.links_container {
		@apply flex justify-center gap-2 mx-auto;
	}

	.link_wrapper > .link_icon {
		@apply flex items-center justify-center text-[.9rem] text-neutral-600 bg-neutral-200 w-[2.3rem] h-[2.3rem] rounded-full border-[.3px] border-neutral-300;
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
