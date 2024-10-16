<template>
	<aside class="portfolio_section_container">
		<div class="portfolio_section_wrapper max_width_container">
			<div class="section_title_wrapper">
				<p class="title_subheading">A Small Selection Of My Work</p>
				<p class="title_heading">Portfolio</p>
			</div>
		</div>

		<div class="swiper_container" v-if="!view_gallery">
			<swiper
				:effect="'cards'"
				:grab-cursor="true"
				:modules="modules"
				class="mySwiper"
			>
				<swiper-slide v-for="(slide, index) in slides" :key="index">
					<div class="swiper_wrapper">
						<!-- {{ slide }} -->
						<img :srcset="slide.image" alt="" class="sample_image" />
					</div>
					<div class="swiper_text">
						<p>
							{{ slide.title }}
						</p>
					</div>
				</swiper-slide>
			</swiper>

			<button class="btn btn_outline btn_view" @click.prevent="viewAllImages">
				View All
			</button>
		</div>

		<!-- v-if="loading" -->
		<div class="loader_container max_width_container" v-if="loading">
			<div class="loader">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>

		<div
			class="image_gallery_container max_width_container"
			v-if="view_gallery && !loading"
		>
			<ul>
				<li v-for="(slide, index) in gallery" :key="index">
					<img :srcset="slide" alt="" class="gallery_image" />
				</li>
			</ul>
			<button
				class="btn btn_outline btn_view"
				@click.prevent="view_gallery = false"
			>
				View Less
			</button>
		</div>
	</aside>
</template>

<script>
	import image_1 from "@/assets/images/portfolio/image_1.webp";
	import image_2 from "@/assets/images/portfolio/image_2.webp";
	import image_3 from "@/assets/images/portfolio/image_3.webp";
	import image_4 from "@/assets/images/portfolio/image_4.webp";
	import image_5 from "@/assets/images/portfolio/image_5.webp";
	import image_6 from "@/assets/images/portfolio/image_6.webp";

	import { ref } from "vue";
	import { useStore } from "vuex";

	// Import Swiper Vue.js components
	import { Swiper, SwiperSlide } from "swiper/vue";

	// Import Swiper styles
	import "swiper/css";
	import "swiper/css/effect-cards";

	// Import required modules
	import { EffectCards } from "swiper/modules";

	export default {
		components: {
			Swiper,
			SwiperSlide,
		},
		setup() {
			const store = useStore();

			const slides = [
				{
					title: "Social Media Poster",
					image: image_1,
				},
				{
					title: "Social Media Poster",
					image: image_2,
				},
			];

			/*****************************************
			 ******** GALLERY
			 ****************************************/

			const view_gallery = ref(false);
			const loading = ref(false); // Local loading state
			const loadError = ref(false);

			const gallery = [image_1, image_2, image_3, image_4, image_5, image_6];

			// Function to load an image asynchronously
			const loadImage = (src) => {
				return new Promise((resolve, reject) => {
					const img = new Image();
					img.src = src;

					img.onload = () => resolve();
					img.onerror = () => reject(new Error("Image failed to load"));
				});
			};

			const viewAllImages = async () => {
				view_gallery.value = true;
				loading.value = true; // Start loading
				loadError.value = false; // Reset error state

				try {
					// Load all images
					await Promise.all(gallery.map((src) => loadImage(src)));
					// Set loading to false once all images are loaded
					loading.value = false;
				} catch (error) {
					loadError.value = true; // Set error state if any image fails to load
					loading.value = false; // End loading state
				}
			};

			return {
				modules: [EffectCards],
				slides,
				view_gallery,
				viewAllImages,
				loading,
				gallery,
			};
		},
	};
</script>

<style lang="postcss" scoped>
	.portfolio_section_container {
		@apply w-full overflow-x-hidden flex flex-col items-center pt-[7rem] pb-[10rem] h-full mx-auto;
	}

	.swiper_container {
		@apply flex flex-col items-center w-[80%] mt-[5rem];
	}

	.mySwiper {
		@apply grid w-full max-w-[25rem] h-[35rem] rounded-2xl;
		grid-template-rows: 1fr 0.5fr;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}

	.swiper-slide {
		@apply flex flex-col bg-neutral-50 border-[.3px] border-neutral-200;
		border-radius: 18px;
		font-size: 22px;
	}

	.swiper_wrapper {
		@apply p-[1rem] h-full bg-shades-white;
	}

	.sample_image {
		@apply rounded-2xl;
		width: 100%; /* Ensure the image doesn't exceed the container width */
		height: 100%; /* Ensure the image doesn't exceed the container height */
		object-fit: cover; /* Cover the container while maintaining aspect ratio */
	}

	.swiper_text {
		@apply text-base text-neutral-700 px-[1rem] pt-[1.5rem] pb-[2rem];
	}

	.btn_view {
		@apply mt-[4rem];
	}

	/*****************************************
	********** GALLERY_STYLE_IMAGES
	****************************************/
	.image_gallery_container {
		@apply flex flex-col items-center mt-[5rem] mx-auto;
	}

	.image_gallery_container > ul {
		@apply grid gap-2;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
	}

	.gallery_image {
		@apply rounded-2xl;
		width: 100%; /* Ensure the image doesn't exceed the container width */
		height: auto; /* Ensure the image doesn't exceed the container height */
		object-fit: cover; /* Cover the container while maintaining aspect ratio */
	}

	.loader_container {
		@apply flex justify-center items-center h-screen;
	}

	/* From Uiverse.io by cosnametv */
	.loader {
		--color: #a5a5b0;
		--size: 70px;
		width: var(--size);
		height: var(--size);
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 5px;
	}

	.loader span {
		width: 100%;
		height: 100%;
		background-color: var(--color);
		animation: keyframes-blink 0.6s alternate infinite linear;
	}

	.loader span:nth-child(1) {
		animation-delay: 0ms;
	}

	.loader span:nth-child(2) {
		animation-delay: 200ms;
	}

	.loader span:nth-child(3) {
		animation-delay: 300ms;
	}

	.loader span:nth-child(4) {
		animation-delay: 400ms;
	}

	.loader span:nth-child(5) {
		animation-delay: 500ms;
	}

	.loader span:nth-child(6) {
		animation-delay: 600ms;
	}

	@keyframes keyframes-blink {
		0% {
			opacity: 0.3;
			transform: scale(0.5) rotate(5deg);
		}

		50% {
			opacity: 1;
			transform: scale(1);
		}
	}
</style>
