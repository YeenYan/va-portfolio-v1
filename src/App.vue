<template>
	<MainLoader v-if="loading" />
	<main class="app_container" v-else>
		<header class="header_container">
			<Navigation />
			<HeaderContent />
		</header>

		<section>
			<IntroductionContent />
			<IntroductionAbout />
		</section>
	</main>
</template>

<script setup>
	import Navigation from "@/views/Navigation.vue";
	import HeaderContent from "@/views/HeaderContent.vue";
	import IntroductionContent from "@/views/IntroductionContent.vue";
	import IntroductionAbout from "@/views/IntroductionAbout.vue";

	import MainLoader from "@/components/Main_Loader.vue";

	import { onMounted } from "vue";
	import { useImageLoader } from "@/composables/useImageLoader";

	// Use the image loader composable
	const { loading, loadError, loadAllImages } = useImageLoader();

	// Load all images on component mount
	onMounted(() => {
		loadAllImages();
	});
</script>

<style lang="postcss">
	/* * {
		@apply outline-1 outline-red-500 outline;
	} */

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
		@apply text-center w-full max-w-[38rem];
	}

	.section_title_wrapper > .title_heading {
		@apply text-neutral-800 font-semibold;
		font-size: clamp(2.25rem, 4vw, 3rem);
	}

	.section_title_wrapper > .title_subheading {
		@apply text-neutral-600 font-semibold;
		font-size: clamp(1rem, 2vw, 1.5rem);
	}

	.section_title_wrapper > .title_details {
		@apply w-[90%] mx-auto pt-[1rem];
		font-size: clamp(0.875rem, 2vw, 1rem);
	}

	@media (min-width: 900px) {
		/* .app_container {
			@apply flex h-screen overflow-y-hidden;
		} */

		/*****************************************
 	********** MAX_WIDTH_CONTAINER ***********
 	****************************************/
		.max_width_container {
			@apply w-[94%] max-w-[71rem];
		}
	}
</style>
