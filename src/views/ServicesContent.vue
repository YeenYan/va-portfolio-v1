<template>
	<aside class="service_section_container" ref="serviceContainer">
		<div class="service_section_wrapper" :class="{ show: change_bg }">
			<!-- max_width_container -->
			<div class="section_title_wrapper">
				<p class="title_subheading">What Can I Offer</p>
				<p class="title_heading">Services</p>
				<p class="title_details">
					I’m dedicated to delivering results and committed to your success. My
					technical expertise, customer-centric approach, and creative flair make me
					a versatile and reliable partner for your business.
				</p>
			</div>

			<ul class="service_lists_container" ref="serviceWrapper">
				<!-- ============================================= -->
				<li
					v-for="(service, index) in services"
					:key="index"
					class="service_list_wrapper"
					:class="`${service.position}`"
					:ref="`service${index}`"
				>
					<div class="service_title_wrapper" :class="`${service.position}`">
						<p class="service_title_text" :class="`${service.position}`">
							<i
								class="service_icon"
								:class="`${service.service_color} ${service.service_icon} ${service.position}`"
							></i>
							{{ service.service_title }}
						</p>
						<div
							class="bottom_bar"
							:class="`${service.service_color} ${service.position}`"
						></div>
					</div>

					<!------------------------------>
					<!------- CONTENT HERE --------->
					<!------------------------------>
					<div class="service_details_container">
						<div
							class="line"
							:class="`${service.service_color} ${service.position}`"
							:ref="`boxes${index}`"
						></div>
						<!------------------------------>
						<!--------- IMAGE HERE --------->
						<!------------------------------>
						<div class="service_image_container" :class="`${service.position}`">
							<div
								class="back"
								:class="`${service.service_color} ${service.position}`"
							></div>
							<div class="service_image_wrapper">
								<img
									:srcset="service.service_image"
									:alt="service.service_title"
									class="service_image"
								/>
							</div>
						</div>
						<ul class="service_checklists_container" :class="`${service.position}`">
							<li
								v-for="checklist in service.service_checklist"
								:key="checklist"
								class="checklist_wrapper"
							>
								<p class="checklist_text">
									<i
										class="fa-solid fa-circle-check checklist_icon"
										:class="`${service.service_color}`"
									></i>
									{{ checklist }}
								</p>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</aside>
</template>

<script setup>
	import AdministrativeImage from "@/assets/images/administrative.webp";
	import SupportImage from "@/assets/images/support.webp";
	import GraphicImage from "@/assets/images/graphic.webp";
	import SocialMediaImage from "@/assets/images/social_media.webp";

	import { onMounted, onUnmounted, ref, watch, computed } from "vue";
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	// Import custom composable for managing transition state
	import { useTransitionComposable } from "../composables/transition-composable";
	import { useStore } from "vuex";

	gsap.registerPlugin(ScrollTrigger);

	const store = useStore();

	/*****************************************
	 ******** CONTENT HERE
	 ****************************************/
	const services = [
		{
			position: "left",
			service_icon: "fa-regular fa-folder-closed",
			service_title: "Administrative Tasks",
			service_image: AdministrativeImage,
			service_color: "primary",
			service_checklist: [
				"Email Management",
				"Calendar Management",
				"Data Entry",
				"File Organizer",
				"Document Preparation",
				"Online Research",
			],
		},
		{
			position: "right",
			service_icon: "fa-regular fa-comment-dots",
			service_title: "Communication Skill",
			service_image: SupportImage,
			service_color: "blue",
			service_checklist: ["Customer Service and Support", "Technical Support"],
		},
		{
			position: "left",
			service_icon: "fa-solid fa-vector-square",
			service_title: "UI/ UX | Graphic Design",
			service_image: GraphicImage,
			service_color: "purple",
			service_checklist: [
				"Logo",
				"Website | Landing Page",
				"Social Media Poster",
				"Banner",
				"Youtube Thumbnail",
				"Customize Icons",
				"Marketing Materials",
			],
		},
		{
			position: "right",
			service_icon: "fa-regular fa-thumbs-up",
			service_title: "Social Media Management",
			service_image: SocialMediaImage,
			service_color: "yellow",
			service_checklist: [
				"Managing Social Media Accounts",
				"Scheduling Social Media Posts",
				"Content Creation",
				"Engaging with Followers",
			],
		},
	];

	const change_bg = computed(() => store.state.is_nav_bg_change);

	/*****************************************
	 ******** GSAP FUNCTIONS
	 ****************************************/

	// Destructure transition state from the composable
	const { transitionState } = useTransitionComposable();

	// Create a reference to the main container
	const serviceContainer = ref();
	const serviceWrapper = ref();

	// Declare a variable to hold the GSAP context
	let ctx;

	// Watch for changes in transition state and the main reference
	watch(
		[() => transitionState.transitionComplete, serviceContainer, serviceWrapper],
		(newValue) => {
			// Check if transition is complete and main is defined
			if (newValue && serviceContainer.value) {
				// Create a GSAP context to scope the animations
				ctx = gsap.context((self) => {
					const container = self.selector(".service_section_container");
					const group = self.selector(".service_section_wrapper");
					// PARENT ANIMATION
					gsap.timeline({
						scrollTrigger: {
							trigger: container,
							start: "50% 70%",
							end: "80% 80%",
							scrub: true,
							// markers: {
							// 	startColor: "black",
							// 	endColor: "black",
							// 	fontSize: "18px",
							// 	fontWeight: "bold",
							// 	indent: 60,
							// },
							onEnter: () => handleEnter(),
							onLeave: () => handleReset(),
							onEnterBack: () => handleEnter(),
							onLeaveBack: () => handleReset(),
							toggleActions: "play none none reverse",
						},
					});

					function handleEnter() {
						gsap.to(group, {
							opacity: 1,
							duration: 1,
							backgroundColor: "#081437",
						});
					}

					function handleReset() {
						gsap.to(group, {
							opacity: 0,
							duration: 1,
							backgroundColor: "#FFFFFF",
						});
					}

					// =========================================================
					if (newValue && serviceWrapper.value) {
						// Create a GSAP context to scope the animations
						ctx = gsap.context((self) => {
							const services = gsap.utils.toArray(".service_checklists_container");
							const boxes = gsap.utils.toArray(".back");

							// ====================================
							// CHECKLIST TIMELINE ANIMATION
							const timeline = gsap.timeline({
								scrollTrigger: {
									trigger: serviceWrapper.value,
									start: "top 50%",
									end: "bottom bottom",
									scrub: true,
									// markers: {
									// 	startColor: "blue",
									// 	endColor: "blue",
									// 	fontSize: "18px",
									// 	fontWeight: "bold",
									// 	indent: 60,
									// },
								},
							});

							services.forEach((service, index) => {
								timeline.from(service, {
									opacity: 0,
									x: index % 2 === 0 ? -200 : 200,
									duration: 2,
								});
								timeline.to(service, {
									opacity: 1,
									x: index % 2 === 0 ? 0 : 0,
									duration: 2,
								});
							});
							// ====================================

							// ====================================
							// BEHIND BOX TIMELINE ANIMATION
							const BoxTimeline = gsap.timeline({
								scrollTrigger: {
									trigger: serviceWrapper.value,
									start: "top 50%",
									end: "bottom bottom",
									scrub: true,
									// markers: {
									// 	startColor: "red",
									// 	endColor: "red",
									// 	fontSize: "18px",
									// 	fontWeight: "bold",
									// 	indent: 60,
									// },
								},
							});

							boxes.forEach((box, index) => {
								BoxTimeline.from(box, {
									x: index % 2 === 0 ? 15 : 15,
									y: index % 2 === 0 ? -10 : -10,
									scale: index % 2 === 0 ? -0.9 : -0.9,
									duration: 2,
								});
								BoxTimeline.to(box, {
									x: index % 2 === 0 ? 0 : 0,
									y: index % 2 === 0 ? 0 : 0,
									scale: index % 2 === 0 ? 1 : 1,
									duration: 2,
								});
							});
							// ====================================
						});
					}
				}, serviceContainer.value);
			}
		},
		{
			immediate: true, // Run the watcher immediately on setup
		}
	);

	onMounted(() => {
		// window.addEventListener("scroll", checkIfAtTop);
	});

	// Cleanup function to revert GSAP animations when the component is unmounted
	onUnmounted(() => {
		// Revert all animations and clean up
		ctx.revert();
	});
</script>

<style lang="postcss" scoped>
	.service_section_container {
		@apply flex items-center justify-center w-full h-full mx-auto overflow-x-hidden;
		/* background: #081437; */
	}

	.service_section_wrapper {
		@apply w-full h-full pt-[20rem] pb-[30rem];
		opacity: 0;
	}

	.service_section_wrapper.show {
		opacity: 1;
	}

	.service_section_wrapper .title_subheading {
		@apply text-neutral-300;
	}

	.service_section_wrapper .title_heading {
		@apply text-shades-white;
	}

	.service_section_wrapper .title_details {
		@apply text-neutral-400 max-w-[29rem] mx-auto;
	}

	/*****************************************
	********** SERVICES GENERIC STYLE
	****************************************/
	.service_lists_container {
		@apply flex flex-col gap-[8rem] w-[90%] max-w-[56rem] mx-auto mt-[7rem];
	}

	.service_list_wrapper {
		@apply relative pt-[2rem] w-full max-w-[37rem];
	}

	.service_title_wrapper {
		@apply absolute top-0 w-fit;
	}

	.service_title_text {
		@apply text-shades-white font-bold pb-[.2rem];
		font-size: clamp(1.2rem, 2vw, 1.5rem);
	}

	.service_icon {
		@apply absolute text-[1rem] text-shades-white p-[.6rem] rounded-full;
	}

	.service_title_wrapper > .bottom_bar {
		@apply absolute bottom-0 w-[85%] h-[.4rem] rounded-full;
	}

	/* DETAILS CONTENT STYLE */
	.service_details_container {
		@apply relative w-full pt-[4rem] px-[1rem];
	}

	.service_details_container .line {
		@apply absolute top-0 h-[120%] w-[.15rem];
	}

	/* IMAGES STYLE */
	.service_image_container {
		@apply relative flex w-full;
	}

	.service_image_container > .back {
		@apply absolute top-[1.3rem] w-full max-w-[20rem] h-full max-h-[20rem] rounded-3xl;
	}

	.service_image_wrapper {
		@apply flex items-center justify-center max-w-[20rem] rounded-3xl overflow-hidden;
	}

	.service_image {
		@apply w-full;
		transform: scale(1.1);
	}

	/* CHECKLIST STYLE */
	.service_checklists_container {
		@apply absolute flex flex-col gap-3 top-[2rem] p-[1rem] bg-shades-white w-fit rounded-xl;
		box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
			rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
	}

	.checklist_text {
		@apply text-base font-medium;
	}

	.checklist_icon {
		@apply pr-[.4rem];
	}

	/*****************************************
	********** SERVICES POSITIONING
	****************************************/
	/* PARENT CONTAINER & WRAPPER */
	.service_list_wrapper.left {
		@apply self-start;
	}
	.service_list_wrapper.right {
		@apply self-end;
	}

	.service_title_wrapper.right {
		@apply right-0;
	}
	.service_title_wrapper.left {
		@apply left-0;
	}

	/* TITLE */
	.service_title_text.left {
		@apply pl-[3rem];
	}
	.service_title_text.right {
		@apply pr-[3rem];
	}

	/* ICON ALONGSIDE TITLE */
	.service_icon.left {
		@apply left-0;
	}
	.service_icon.right {
		@apply right-0;
	}

	/* LINE BELOW TITLE */
	.service_title_wrapper > .bottom_bar.left {
		@apply right-0;
	}
	.service_title_wrapper > .bottom_bar.right {
		@apply left-0;
	}

	/* SIDELINE */
	.service_details_container .line.left {
		@apply left-[1rem];
	}
	.service_details_container .line.right {
		@apply right-[1rem];
	}

	/* IMAGE PARENT */
	.service_image_container.left {
		@apply justify-start pl-[2rem];
	}
	.service_image_container.right {
		@apply justify-end pr-[2rem];
	}

	/* BOX BACK OF THE IMAGE */
	.service_image_container > .back.left {
		@apply left-[1.3rem];
	}
	.service_image_container > .back.right {
		@apply right-[1.3rem];
	}

	/* TASK LISTS */
	.service_checklists_container.left {
		@apply right-[3rem];
	}
	.service_checklists_container.right {
		@apply left-[3rem];
	}

	/*****************************************
	********** COLOR GENERIC STYLE
	****************************************/
	/* BAR COLOR OPTIONS */
	.service_title_wrapper > .bottom_bar.primary {
		@apply bg-primary-500;
	}
	.service_title_wrapper > .bottom_bar.blue {
		@apply bg-blue-500;
	}
	.service_title_wrapper > .bottom_bar.purple {
		@apply bg-purple-500;
	}
	.service_title_wrapper > .bottom_bar.yellow {
		@apply bg-yellow-600;
	}

	/* ICON COLOR OPTIONS */
	.service_icon.primary {
		@apply bg-primary-500;
	}
	.service_icon.blue {
		@apply bg-blue-500;
	}
	.service_icon.purple {
		@apply bg-purple-500;
	}
	.service_icon.yellow {
		@apply bg-yellow-600;
	}

	/* SIDELINE COLOR STYLE */
	.service_details_container .line.primary {
		@apply bg-gradient-to-b from-primary-500 to-transparent;
	}
	.service_details_container .line.blue {
		@apply bg-gradient-to-b from-blue-500 to-transparent;
	}
	.service_details_container .line.purple {
		@apply bg-gradient-to-b from-purple-500 to-transparent;
	}
	.service_details_container .line.yellow {
		@apply bg-gradient-to-b from-yellow-600 to-transparent;
	}

	/* IMAGES COLOR STYLE */
	.service_image_container > .back.primary {
		@apply bg-primary-500;
	}
	.service_image_container > .back.blue {
		@apply bg-blue-500;
	}
	.service_image_container > .back.purple {
		@apply bg-purple-500;
	}
	.service_image_container > .back.yellow {
		@apply bg-yellow-600;
	}

	/* CHECK ICON COLOR OPTIONS */
	.checklist_icon.primary {
		@apply text-primary-500;
	}
	.checklist_icon.blue {
		@apply text-blue-500;
	}
	.checklist_icon.purple {
		@apply text-purple-500;
	}
	.checklist_icon.yellow {
		@apply text-yellow-600;
	}

	@media (max-width: 600px) {
		.service_list_wrapper {
			@apply h-[30rem];
		}

		.service_details_container {
			@apply pt-[2rem];
		}

		.service_image_container > .back,
		.service_image_wrapper {
			@apply max-w-[15rem];
		}

		.service_checklists_container {
			@apply top-[10rem];
		}
	}
</style>
