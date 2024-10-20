<template>
	<aside class="portfolio_section_container">
		<div class="portfolio_section_wrapper max_width_container">
			<div class="section_title_wrapper">
				<p class="title_subheading">A Small Selection Of My Work</p>
				<p class="title_heading">Portfolio</p>
			</div>
		</div>

		<div class="slider_container">
			<i
				class="fa-solid fa-caret-left slider_btn left"
				@click.prevent="prevSlide"
			></i>
			<ul class="slider_wrapper" ref="scrollContainer">
				<li v-for="(slide, index) in slides" :key="slide" :id="'slide-' + index">
					<div class="image_wrapper">
						<img :srcset="slide.image" alt="" />
					</div>
					<p class="slider_label">{{ slide.type }}</p>
				</li>
			</ul>
			<i
				class="fa-solid fa-caret-right slider_btn right"
				@click.prevent="nextSlide"
			></i>
		</div>
	</aside>
</template>

<script setup>
	import image_1 from "@/assets/images/portfolio/image_1.webp";
	import image_2 from "@/assets/images/portfolio/image_2.webp";
	import image_3 from "@/assets/images/portfolio/image_3.webp";
	import image_4 from "@/assets/images/portfolio/image_4.webp";
	import image_5 from "@/assets/images/portfolio/image_5.webp";
	import image_6 from "@/assets/images/portfolio/image_6.webp";
	import image_7 from "@/assets/images/portfolio/image_7.webp";
	import image_8 from "@/assets/images/portfolio/image_8.webp";
	import image_9 from "@/assets/images/portfolio/image_9.webp";

	import { ref } from "vue";

	const slides = [
		{ type: "Social Media Poster", image: image_1 },
		{ type: "Social Media Poster", image: image_8 },
		{ type: "Social Media Poster", image: image_9 },
		{ type: "Logo Design", image: image_3 },
		{ type: "Logo Design", image: image_4 },
		{ type: "Digital Painting", image: image_5 },
		{ type: "Digital Painting", image: image_6 },
		{ type: "Digital Painting", image: image_7 },
		{ type: "Resume / CV Design", image: image_2 },
	];

	// // Slider state
	// const currentSlide = ref(1); // Start at the first actual slide (index 1)
	// const transition_multiplier = ref(0);
	// const transition_val = ref(0);

	// // let item = slides.shift();
	// // slides.push(item);
	// // Next slide logic
	// const nextSlide = () => {
	// 	currentSlide.value++;
	// 	if (currentSlide.value == slides.length + 1) {
	// 		currentSlide.value = 1;
	// 		transition_multiplier.value = 0;
	// 		transition_val.value = 0;
	// 	} else {
	// 		transition_multiplier.value = currentSlide.value * 5 - 5;
	// 		transition_val.value =
	// 			currentSlide.value * 100 - 100 + transition_multiplier.value;
	// 	}
	// 	console.log({
	// 		trans: transition_multiplier.value,
	// 		current: currentSlide.value,
	// 		trans_val: transition_val.value,
	// 	});
	// 	// console.log(slides);
	// };

	// // Previous slide logic
	// const prevSlide = () => {
	// 	currentSlide.value--;

	// 	if (currentSlide.value <= 0) {
	// 		currentSlide.value = slides.length;
	// 		transition_multiplier.value = currentSlide.value * 5 - 5;
	// 		transition_val.value =
	// 			currentSlide.value * 100 - 100 + transition_multiplier.value;
	// 	} else {
	// 		transition_multiplier.value = currentSlide.value * 5 - 5;
	// 		transition_val.value =
	// 			currentSlide.value * 100 - 100 + transition_multiplier.value;
	// 	}
	// 	console.log({
	// 		trans: transition_multiplier.value,
	// 		current: currentSlide.value,
	// 		trans_val: transition_val.value,
	// 	});
	// };

	// const scrollContainer = ref(null);

	// const scrollToElement = (sectionId) => {
	// 	const element = document.getElementById(sectionId);
	// 	if (element && scrollContainer.value) {
	// 		const rect = element.getBoundingClientRect();
	// 		const scrollX = scrollContainer.value.scrollLeft || window.pageXOffset;
	// 		const offset = -40; // Adjust the offset as needed

	// 		// Calculate the target scroll position with the offset
	// 		const targetX = scrollX + rect.left - offset;

	// 		// Smooth scroll to the target horizontal position
	// 		scrollContainer.value.scrollTo({
	// 			left: targetX,
	// 			behavior: "smooth",
	// 		});
	// 	}
	// };

	const currentSlide = ref(0);
	const scrollContainer = ref(null);

	const scrollToSlide = (slideIndex) => {
		const targetSlide = document.getElementById(`slide-${slideIndex}`);
		if (targetSlide) {
			const container = scrollContainer.value;
			const containerWidth = container.clientWidth;
			const slideRect = targetSlide.getBoundingClientRect();
			const containerRect = container.getBoundingClientRect();

			// Calculate how far to scroll so the image is centered
			const targetScrollX =
				container.scrollLeft +
				(slideRect.left - containerRect.left) -
				(containerWidth / 2 - slideRect.width / 2);

			container.scrollTo({
				left: targetScrollX,
				behavior: "smooth",
			});
		}
	};

	const nextSlide = () => {
		if (currentSlide.value < slides.length - 1) {
			currentSlide.value++;
		} else {
			currentSlide.value = 0; // Loop back to first slide
		}
		scrollToSlide(currentSlide.value);
	};

	const prevSlide = () => {
		if (currentSlide.value > 0) {
			currentSlide.value--;
		} else {
			currentSlide.value = slides.length - 1; // Loop back to last slide
		}
		scrollToSlide(currentSlide.value);
	};
</script>

<style lang="postcss" scoped>
	.portfolio_section_container {
		@apply w-full overflow-x-hidden flex flex-col items-center pt-[7rem] pb-[20rem] h-full mx-auto;
	}

	/* ========================================================================== */
	/* ========================================================================== */
	.slider_container {
		@apply relative flex items-center mt-[5rem] mx-auto;
	}

	.slider_wrapper {
		@apply flex gap-4 w-full max-w-[25rem] max-h-[30rem] rounded-[1.5rem] overflow-hidden;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	}

	.slider_wrapper > li {
		@apply min-w-[100%] bg-shades-white border-[.3px] rounded-[1.5rem];
		transition: all 1s ease-in-out;
		transform: translateX(0rem);
	}

	.image_wrapper {
		@apply min-w-full h-full max-h-[25rem] rounded-t-[1.5rem] overflow-hidden;
	}

	.image_wrapper img {
		width: 100%;
		height: 100% !important;
		object-fit: cover;
	}

	.slider_label {
		@apply text-sm text-neutral-700 font-semibold px-[1.5rem] py-[1.5rem] h-full;
	}

	.slider_btn {
		@apply text-2xl text-neutral-900 px-[1.4rem] py-[.8rem] border-[.1rem] border-shades-white rounded-full  cursor-pointer;
		background: rgb(0, 0, 0, 0.1);
		backdrop-filter: blur(10px);
	}

	.slider_btn.left {
		@apply absolute left-[-2.2rem] z-[2];
	}

	.slider_btn.right {
		@apply absolute right-[-2.2rem];
	}

	@media (max-width: 600px) {
		.slider_btn.left {
			@apply bottom-[-5rem] left-[8rem];
		}

		.slider_btn.right {
			@apply bottom-[-5rem] right-[8rem];
		}
	}
</style>
