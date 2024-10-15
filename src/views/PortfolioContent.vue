<template>
	<aside class="portfolio_section_container">
		<div class="portfolio_section_wrapper max_width_container">
			<div class="section_title_wrapper">
				<p class="title_subheading">A Small Selection Of My Work</p>
				<p class="title_heading">Portfolio</p>
			</div>
		</div>

		<div class="swiper_container">
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
					<p class="swiper_text">
						{{ slide.title }}
					</p>
				</swiper-slide>
			</swiper>

			<button class="btn btn_outline btn_view">View All</button>
		</div>
	</aside>
</template>

<script>
	import SocialMediaImage from "@/assets/images/sample_design.png";
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
			const slides = [
				{
					title: "Social Media Poster",
					image: SocialMediaImage,
				},
				{
					title: "Lorem Ipsum",
					image: SocialMediaImage,
				},
				{
					title: "Lorem Ipsum",
					image: SocialMediaImage,
				},
				{
					title: "Lorem Ipsum",
					image: SocialMediaImage,
				},
			];

			return {
				modules: [EffectCards],
				slides,
			};
		},
	};
</script>

<style lang="postcss" scoped>
	.portfolio_section_container {
		@apply flex flex-col items-center pt-[7rem] pb-[10rem] h-full mx-auto;
	}

	.swiper_container {
		@apply flex flex-col items-center w-[90%] mt-[5rem];
	}

	.mySwiper {
		@apply w-full max-w-[25rem] h-[35rem] rounded-2xl;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}

	.swiper-slide {
		@apply flex flex-col bg-neutral-50 border-[.3px] border-neutral-200;
		border-radius: 18px;
		font-size: 22px;
	}

	.swiper_wrapper {
		@apply p-[1rem] h-[90%] bg-shades-white;
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
</style>
