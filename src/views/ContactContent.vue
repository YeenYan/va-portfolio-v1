<template>
	<aside class="contact_section_container">
		<div class="contact_section_wrapper max_width_container">
			<div class="section_title_wrapper">
				<p class="title_subheading">Get In Touch</p>
				<p class="title_heading">Contact Me</p>
				<p class="title_details">
					If you’re looking for a dedicated and capable assistant to help elevate
					your business, I’d love to discuss how I can support you. Let’s work
					together to create a more efficient, productive, and visually compelling
					business environment.
				</p>
			</div>

			<div class="contact_cta_wrapper">
				<img :srcset="CircularText" alt="" class="circular_image" />
				<div class="text_wrapper" @click.prevent="openGmail">
					<p>let's talk</p>
				</div>
			</div>

			<ul class="links_container">
				<li v-for="link in links" :key="link" class="link_wrapper">
					<a :href="link.link" target="_blank" class="link_icon">
						<i :class="link.icon"></i>
					</a>
				</li>
			</ul>

			<p class="copyright_text">© {{ year }} Irene Toledo. All rights reserved</p>
		</div>
	</aside>
</template>

<script setup>
	import CircularText from "@/assets/images/CircularText.webp";
	import { ref } from "vue";
	import { useStore } from "vuex";

	const store = useStore();

	const links = [
		{
			icon: "fa-brands fa-facebook-f",
			link: "https://www.facebook.com/irene.toledo.756412",
		},
		{
			icon: "fa-brands fa-instagram",
			link: "https://www.instagram.com/ayeentoledo/",
		},
		{
			icon: "fa-brands fa-x-twitter",
			link: "https://x.com/IM_yinyan",
		},
		{
			icon: "fa-brands fa-linkedin-in",
			link: "https://www.linkedin.com/in/irene-belaro-toledo/",
		},
	];

	const year = ref(new Date().getFullYear());

	const getCurrentYear = () => {
		year.value = new Date().getFullYear();
		return year.value;
	};

	const openGmail = () => {
		store.commit("openGmail");
	};
</script>

<style lang="postcss" scoped>
	.contact_section_container {
		@apply relative w-full h-screen items-center pt-[5rem];
	}

	.contact_section_wrapper {
		@apply flex flex-col items-center mx-auto gap-16;
	}

	/*****************************************
	********** CTA
	****************************************/
	.contact_cta_wrapper {
		@apply relative flex items-center justify-center w-full max-w-[10rem] h-[10rem] mx-auto;
	}

	.circular_image {
		animation: rotateText 15s linear infinite;
	}

	.text_wrapper {
		@apply absolute flex items-center justify-center text-[1rem] text-center text-shades-white bg-primary-600 w-[60%] h-[60%] rounded-full cursor-pointer;
		transition: all 0.3s ease-in-out;
	}

	.text_wrapper:hover {
		transform: scale(1.1);
	}

	@keyframes rotateText {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.copyright_text {
		@apply absolute bottom-0 flex w-fit pb-[2rem] text-xs text-neutral-600 text-center;
	}
</style>
