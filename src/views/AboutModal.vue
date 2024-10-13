<template>
	<section class="about_container">
		<div class="blanket__wrapper">
			<div></div>
		</div>

		<div class="about_wrapper">
			<i class="fa-solid fa-xmark close_icon" @click.prevent="hide_about"></i>
			<div class="about_content">
				<p>Know more</p>
				<p>About me</p>
				<ul class="content_text_wrapper">
					<li v-for="content in contents" :key="content" class="content_text">
						{{ content.content }}
					</li>
				</ul>
				<img :srcset="signature" alt="" class="signature_image" />
			</div>
			<img :srcset="photo" alt="" class="profile_image" />
		</div>

		<!--  -->
	</section>
</template>

<script setup>
	import photo from "@/assets/images/about.webp";
	import signature from "@/assets/images/signature.webp";

	import { useStore } from "vuex";

	const store = useStore();

	const contents = [
		{
			content:
				"Hello! I’m Irene, and I have a diverse background that bridges the worlds of technical expertise, design, and customer support. My career began as a House Specification Planner, where I created custom house plans and designs for clients in Japan. It was a rewarding experience that honed my eye for detail and nurtured my passion for creative solutions.",
		},
		{
			content:
				"Currently, I work as a Technical Support Engineer, where I provide critical support to professional engineers across Australia in a dynamic retail environment. This role has sharpened my problem-solving skills, expanded my understanding of technical systems, and further strengthened my customer support expertise.",
		},
		{
			content:
				"Beyond my technical work, I enjoy creating witty captions for social media posts and designing unique and catchy visuals. With a unique combination of technical knowledge, customer support experience, and a keen sense of design, I bring a well-rounded perspective to every project I undertake. I’m always excited to take on new challenges and continue growing both professionally and creatively.",
		},
	];

	const hide_about = () => {
		store.commit("show_about", false);
	};
</script>

<style lang="postcss" scoped>
	.about_container {
		@apply h-screen flex items-center justify-center fixed z-10 inset-0 overflow-y-auto pt-[10rem];
	}

	.blanket__wrapper {
		@apply fixed inset-0 transition-opacity z-[-1];
	}

	.blanket__wrapper div {
		@apply absolute inset-0 bg-neutral-600 opacity-60 z-[-1];
	}

	.about_wrapper {
		@apply relative bg-shades-white p-[1.8rem] pt-[3.5rem] w-full h-fit max-w-[40rem] mx-auto rounded-2xl;
	}

	.close_icon {
		@apply absolute top-[.5rem] right-[.5rem] text-neutral-500 p-[.6rem] cursor-pointer;
	}

	.about_content > p:first-child {
		@apply text-neutral-600 font-semibold;
		font-size: clamp(1rem, 2vw, 1.125rem);
	}

	.about_content > p:nth-child(2) {
		@apply text-neutral-800 font-semibold pb-[1.5rem];
		font-size: clamp(2.25rem, 4vw, 3rem);
	}

	.content_text_wrapper {
		@apply flex flex-col gap-5;
	}

	.content_text:first-child {
		@apply w-[60%];
	}
	.content_text:nth-child(2) {
		@apply w-[55%];
	}
	.content_text:nth-child(3) {
		@apply w-[55%];
	}

	.content_text {
		font-size: clamp(0.75rem, 1vw, 0.875rem);
	}

	.signature_image {
		@apply pt-[2rem] max-w-[7rem];
	}

	.profile_image {
		@apply absolute bottom-0 right-0 w-[50%] max-w-[20rem];
	}

	@media (max-width: 600px) {
		.about_container {
			@apply pt-[0];
		}

		.content_text:first-child {
			@apply w-[70%];
		}
		.content_text:nth-child(2) {
			@apply w-[60%];
		}
		.content_text:nth-child(3) {
			@apply w-[55%];
		}
	}

	@media (max-width: 500px) {
		.content_text:first-child {
			@apply w-full;
		}
		.content_text:nth-child(2) {
			@apply w-[70%];
		}
		.content_text:nth-child(3) {
			@apply w-[55%];
		}
	}
</style>
