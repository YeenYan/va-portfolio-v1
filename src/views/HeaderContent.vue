<template>
	<section class="hero_container max_width_container">
		<h1 class="hero_tagline">Your Go-To Support for Modern Business Needs</h1>
		<p class="hero_text">
			As your virtual assistant, I provide tailored solutions to keep your business
			running smoothly in today’s fast-paced world.
		</p>
		<button
			class="btn btn_outline hero_cta"
			v-if="mobile_screen"
			@click.prevent="openGmail"
		>
			Say Hello
		</button>
		<div class="header_image_wrapper">
			<img
				:srcset="HeaderImageLarge"
				alt=""
				class="header_image"
				v-if="!mobile_screen"
			/>
			<img
				:srcset="HeaderImageMobile"
				alt=""
				class="header_image"
				v-if="mobile_screen"
			/>
		</div>
	</section>
</template>

<script setup>
	import HeaderImageLarge from "@/assets/images/Header_v2.webp";
	import HeaderImageMobile from "@/assets/images/Header_mobile_v2.webp";

	import { computed, onMounted, onBeforeUnmount } from "vue";
	import { useStore } from "vuex";

	const store = useStore();

	/*****************************************
	 ******** WATCH REAL-TIME SCREEN SIZE
	 ****************************************/
	// Computed property to access the screen width from the store
	const mobile_screen = computed(() => store.state.mobile_screen);

	// Function to update screen width and log it
	const updateScreenWidth = () => {
		store.commit("checkScreen");
	};

	/*****************************************
	 ******** ON MOUNTED
	 ****************************************/
	onMounted(() => {
		window.addEventListener("resize", updateScreenWidth);
		// Initial call to set the width on mount
		updateScreenWidth();
	});

	/*****************************************
	 ******** BEFORE UNMOUNTED
	 ****************************************/
	onBeforeUnmount(() => {
		window.removeEventListener("resize", updateScreenWidth);
	});

	/*****************************************
	 ******** EMAIL
	 ****************************************/
	const openGmail = () => {
		store.commit("openGmail");
	};
</script>

<style lang="postcss" scoped>
	.hero_container {
		@apply flex flex-col items-center h-[120vh] py-[9rem] mx-auto;
	}

	.hero_tagline {
		@apply text-neutral-800 font-extrabold text-center w-full max-w-[26rem] mx-auto;
		font-size: clamp(2rem, 4vw, 3.2rem);
		line-height: 1.2 !important;
	}

	.hero_text {
		@apply text-center w-full max-w-[29rem] mx-auto py-[1.6rem];
		font-size: clamp(0.75rem, 2.5vw, 1rem);
	}

	.hero_cta {
		@apply my-[1.5rem];
	}

	.header_image_wrapper {
		@apply py-[1rem];
	}

	.header_image {
		@apply w-full max-w-[38rem] mx-auto;
	}

	@media (min-width: 900px) {
		.hero_tagline {
			@apply w-[70%] max-w-[39rem];
		}
	}
</style>
