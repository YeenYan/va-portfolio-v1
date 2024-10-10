<template>
	<section class="about_section_wrapper">
		<div>
			<div class="section_title_wrapper">
				<p class="title_subheading">Count on me to keep your Tasks</p>
				<p class="title_heading">Organized & Efficient</p>
				<p class="title_details">
					I focus on streamlining operations, managing data, and boosting efficiency
					with precision and reliability.
				</p>
			</div>

			<div class="image_wrapper">
				<img :srcset="CompiledImage" alt="Compiled Image" />
			</div>

			<p class="position_wrapper">
				Versatile Virtual Assistant | Customer / Tech Support | Creative Design |
				Social Media Management
			</p>
		</div>
	</section>
</template>

<script setup>
	import CompiledImage from "@/assets/images/compiled_image.webp";
</script>

<style lang="postcss" scoped>
	.about_section_wrapper {
		@apply flex justify-center h-[200vh];
	}

	.position_wrapper {
		@apply text-lg text-center text-shades-white bg-primary-700 p-[.7rem] mx-auto w-full max-w-[31rem] rounded-xl;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	}

	.image_wrapper {
		@apply w-full max-w-[37rem] py-[4rem];
	}
</style>
