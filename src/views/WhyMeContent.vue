<template>
	<aside class="whyMe_section_wrapper">
		<div>
			<div class="section_title_wrapper">
				<p class="title_subheading">Why Choose Me?</p>
				<p class="title_heading">Skillset</p>
				<p class="title_details">
					By choosing me as your Virtual Assistant, you’ll gain a professional who is
					eager to apply her skills in a new capacity and is fully invested in
					contributing to your growth.
				</p>
			</div>

			<ul class="skillset_wrapper">
				<li
					v-for="skill in skills"
					:key="skill.skill"
					class="skillset_list_wrapper"
				>
					<i
						class="skill_icon"
						:class="`${skill.icon[0].icon} ${skill.icon[0].color}`"
					></i>
					<p class="skill_title_text">{{ skill.skill }}</p>
					<p class="skill_details_text">{{ skill.details }}</p>
				</li>
			</ul>

			<div class="whyMe_conclusion_text">
				<p>
					Let’s bring out the best in your brand and let it stand out! I’m here to
					turn your ideas into compelling content that grabs attention and builds
					genuine connections with your audience.
				</p>
				<p>
					Balancing social media and staying on top of design and handling
					administrative tasks can be overwhelming when you’re busy running a
					business. Focus on the big picture and let me handle the details! Whether
					you need a boost in your online presence, engaging content creation, or
					efficient management of administrative tasks, I’ve got you covered.
				</p>
			</div>
		</div>
	</aside>
</template>

<script setup>
	const skills = [
		{
			icon: [
				{
					icon: "fa-solid fa-border-all",
					color: "green",
				},
			],
			skill: "Microsoft Office Proficiency",
			details: `From crafting polished documents in Word to managing complex data in
						Excel, I’m well-versed in all things Microsoft Office. Whether it’s
						preparing presentations, reports, or handling administrative tasks, I’ve
						got you covered.`,
		},
		{
			icon: [
				{
					icon: "fa-solid fa-bezier-curve",
					color: "red",
				},
			],
			skill: "Graphic Design Skills",
			details: `Need eye-catching visuals? I have a strong foundation in graphic design, allowing me to create professional-quality graphics for your business. Whether it’s social media content, marketing materials, or custom designs, I can help your brand stand out.`,
		},
		{
			icon: [
				{
					icon: "fa-solid fa-headset",
					color: "blue",
				},
			],
			skill: "Customer Support",
			details: `With years of experience in customer and technical support, I understand the importance of clear communication, problem-solving, and providing top-notch service. I’m adept at managing customer inquiries, troubleshooting technical issues, and ensuring a seamless customer experience.`,
		},
		{
			icon: [
				{
					icon: "fa-regular fa-lightbulb",
					color: "yellow",
				},
			],
			skill: "Adaptability & Quick Learning",
			details: `While I’m new to the Virtual Assistant role, I’m a fast learner with a passion for mastering new skills. I’m confident that my ability to adapt quickly, combined with my existing knowledge, will enable me to excel as your VA.`,
		},
	];
</script>

<style lang="postcss" scoped>
	.whyMe_section_wrapper {
		@apply flex items-center justify-center h-full mx-auto pt-[15rem];
	}

	/*****************************************
	********** SKILLSET CARD
	****************************************/
	.skillset_wrapper {
		@apply flex pt-[4rem];
		flex-wrap: wrap;
	}

	.skillset_list_wrapper {
		@apply bg-neutral-50 px-[2rem] py-[3.5rem];
	}

	.skillset_list_wrapper:not(:last-child) {
		@apply border-b-[.3px] border-neutral-200;
	}

	@media (min-width: 700px) {
		.skillset_list_wrapper {
			flex: 1 1 calc(50% - 20px);
		}

		.skillset_list_wrapper:nth-child(1),
		.skillset_list_wrapper:nth-child(3) {
			@apply border-r-[.3px];
		}

		.skillset_list_wrapper:nth-child(3),
		.skillset_list_wrapper:nth-child(4) {
			@apply border-b-[0px];
		}
	}

	@media (min-width: 1200px) {
		.skillset_wrapper {
			@apply grid;
			grid-template-columns: repeat(4, 1fr);
		}

		.skillset_list_wrapper:not(:last-child) {
			@apply border-r-[.3px];
		}

		.skillset_list_wrapper {
			@apply border-b-[0px] !important;
		}
	}

	.skill_icon {
		@apply text-[2.5rem];
	}

	.skill_icon.green {
		@apply text-green-500;
	}

	.skill_icon.red {
		@apply text-red-500;
	}

	.skill_icon.blue {
		@apply text-blue-500;
	}

	.skill_icon.yellow {
		@apply text-yellow-500;
	}

	.skill_title_text {
		@apply text-neutral-700 font-bold text-[1.5rem] pt-[1.8rem] pb-[1rem];
	}

	.skill_details_text {
		@apply text-sm text-neutral-500;
	}

	/*****************************************
	********** CONCLUSION TEXT
	****************************************/
	.whyMe_conclusion_text {
		@apply grid gap-8 text-base text-neutral-700 bg-neutral-100 px-[2rem] py-[8rem];
	}

	.whyMe_conclusion_text > p {
		@apply w-full max-w-[40rem] mx-auto;
	}
</style>
