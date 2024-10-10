<template>
	<div class="figma_container">
		<div class="lens"></div>
		<div class="figma_wrapper">
			<!------------------------------>
			<!--------- TOP BAR ------------>
			<!------------------------------>
			<div class="top_bar_wrapper">
				<div>
					<i class="fa-solid fa-house figma_icon"></i>
					<div class="top_tab_wrapper">
						<i class="fa-solid fa-pen-nib figma_icon"></i>
						<p>Website Design</p>
						<i class="fa-solid fa-xmark figma_icon"></i>
					</div>
					<i class="fa-solid fa-plus figma_icon"></i>
				</div>

				<div>
					<i class="fa-solid fa-angle-down figma_icon"></i>
					<i class="fa-solid fa-minus figma_icon"></i>
					<i class="fa-regular fa-clone figma_icon"></i>
					<i class="fa-solid fa-xmark figma_icon"></i>
				</div>
			</div>

			<!------------------------------>
			<!----- CENTER CANVASS --------->
			<!------------------------------>
			<div class="canvass_container">
				<!------------------------------>
				<!--------- LEFT TOOL ---------->
				<div class="left_tool_container">
					<!-- 1st Group -->
					<div class="a_group">
						<div>
							<i class="fa-brands fa-figma figma_icon"></i>
							<i class="fa-solid fa-angle-down figma_icon"></i>
						</div>
						<i class="fa-solid fa-table-columns figma_icon"></i>
					</div>
					<!-- 2nd Group -->
					<div class="b_group border_b">
						<p>
							Website Design
							<i class="fa-solid fa-angle-down figma_icon"></i>
						</p>
					</div>

					<!-- 3rd Group -->
					<div class="c_group border_b">
						<div>
							<p class="figma_label highlight">File</p>
							<p class="figma_label">Assets</p>
						</div>
						<i class="fa-solid fa-magnifying-glass figma_icon"></i>
					</div>

					<!-- 4th Group -->
					<div class="d_group border_b">
						<p class="figma_label">
							Pages
							<i class="fa-solid fa-plus figma_icon"></i>
						</p>
						<p class="figma_label">Design System</p>
						<p class="figma_label highlight">Desktop</p>
						<p class="figma_label">Mobile</p>
					</div>

					<!-- 5th Group -->
					<div class="e_group">
						<p class="figma_label">Layers</p>
						<ul>
							<li>
								<p class="figma_label">
									<i class="fa-solid fa-crop-simple figma_icon compact"></i> Frame
								</p>
								<!-- INDENTED START -->
								<div class="sub_layer">
									<p class="figma_label">
										<i class="fa-solid fa-layer-group figma_icon compact"></i> Group 11
									</p>
									<p class="figma_label">
										<i class="fa-solid fa-crop-simple figma_icon compact"></i> Frame 135
									</p>
								</div>
								<!-- INDENTED END -->
								<p class="figma_label">
									<i class="fa-solid fa-crop-simple figma_icon compact"></i> Frame 142
								</p>
								<p class="figma_label">
									<i class="fa-solid fa-crop-simple figma_icon compact"></i> Frame 143
								</p>
								<p class="figma_label">
									<i class="fa-solid fa-layer-group figma_icon compact"></i> Group 3
								</p>
								<p class="figma_label">
									<i class="fa-solid fa-crop-simple figma_icon compact"></i> Frame 144
								</p>
								<!-- INDENTED START -->
								<div class="sub_layer">
									<p class="figma_label">
										<i class="fa-regular fa-image figma_icon compact"></i>Picture 1
									</p>
									<p class="figma_label">
										<i class="fa-regular fa-image figma_icon compact"></i>Picture 2
									</p>
									<p class="figma_label">
										<i class="fa-regular fa-image figma_icon compact"></i>Picture 3
									</p>
								</div>
								<!-- INDENTED END -->
								<p class="figma_label">
									<i class="fa-solid fa-crop-simple figma_icon compact"></i> Desktop
								</p>
							</li>
						</ul>
					</div>
				</div>

				<!------------------------------>
				<!--------- ARTBOARD ----------->
				<div class="artboard_container">
					<IntroductionAbout />
				</div>

				<!------------------------------>
				<!-------- RIGHT TOOL ---------->
				<!------------------------------>
				<!--------- LEFT TOOL ---------->
				<div class="right_tool_container">
					<!-- 1st Group -->
					<div class="a_group">
						<div>
							<p class="figma_label">I</p>
							<i class="fa-solid fa-angle-down figma_icon"></i>
						</div>

						<p class="figma_label share">Share</p>
					</div>

					<!-- 2rd Group -->
					<div class="c_group border_b">
						<div>
							<p class="figma_label highlight">Design</p>
							<p class="figma_label">Prototype</p>
						</div>
						<p class="figma_label">
							100% <i class="fa-solid fa-angle-down figma_icon compact"></i>
						</p>
					</div>

					<!-- 4th Group -->
					<div class="d_group border_b">
						<p class="figma_label">
							Local Variables
							<i class="fa-solid fa-sliders figma_icon"></i>
						</p>
					</div>

					<!-- 5th Group -->
					<div class="e_group">
						<p class="figma_label">
							Local Styles
							<i class="fa-solid fa-plus figma_icon"></i>
						</p>
						<ul>
							<li>
								<p class="figma_label">Text Styles</p>
								<!-- INDENTED START -->
								<div class="sub_layer">
									<p class="figma_label">
										<i class="fa-solid fa-angle-right figma_icon compact small"></i>
										Heading-1
									</p>
									<p class="figma_label">
										<i class="fa-solid fa-angle-right figma_icon compact small"></i>
										Heading-2
									</p>
									<p class="figma_label">
										<i class="fa-solid fa-angle-right figma_icon compact small"></i>
										Heading-3
									</p>
									<p class="figma_label">
										<i class="fa-solid fa-angle-right figma_icon compact small"></i>
										Heading-4
									</p>
									<p class="figma_label">
										<i class="fa-solid fa-angle-right figma_icon compact small"></i>
										Heading-5
									</p>
									<p class="figma_label">
										<i class="fa-solid fa-angle-right figma_icon compact small"></i>
										Heading-6
									</p>
								</div>
								<!-- INDENTED END -->
							</li>
							<li>
								<p class="figma_label">Color Styles</p>
								<!-- INDENTED START -->
								<div class="sub_layer">
									<p class="figma_label">
										<i class="fa-solid fa-angle-right figma_icon compact small"></i>
										Neutral
									</p>
									<p class="figma_label">
										<i class="fa-solid fa-angle-right figma_icon compact small"></i>
										Primary
									</p>
									<p class="figma_label">
										<i class="fa-solid fa-angle-right figma_icon compact small"></i>
										Secondary
									</p>
									<p class="figma_label">
										<i class="fa-solid fa-angle-right figma_icon compact small"></i>
										Tertiary
									</p>
									<p class="figma_label">
										<i class="fa-solid fa-angle-right figma_icon compact small"></i>
										Blue
									</p>
									<p class="figma_label">
										<i class="fa-solid fa-angle-right figma_icon compact small"></i>
										Yellow
									</p>
									<p class="figma_label">
										<i class="fa-solid fa-angle-right figma_icon compact small"></i>
										Red
									</p>
								</div>
								<!-- INDENTED END -->
							</li>
							<li>
								<p class="figma_label">Effect Styles</p>
								<!-- INDENTED START -->
								<div class="sub_layer">
									<p class="figma_label">
										<i class="fa-solid fa-angle-right figma_icon compact small"></i>
										Shadow
									</p>
									<p class="figma_label"></p>
								</div>

								<!-- INDENTED END -->
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import IntroductionAbout from "@/views/IntroductionAbout.vue";
</script>

<style lang="postcss" scoped>
	/*****************************************
 ********** GENERIC
 ****************************************/
	.figma_icon {
		@apply text-[.7rem] px-[.8rem] py-[.7rem] text-tertiary-200;
	}

	.figma_icon.compact {
		@apply pl-[.1rem] pr-[.3rem] py-[.3rem] text-tertiary-500;
	}

	.figma_icon.small {
		@apply text-[.5rem] pl-[.1rem] pr-[.3rem] py-[.3rem] text-tertiary-500;
	}

	.figma_label {
		@apply text-[.6rem] text-shades-white px-[.4rem] py-[.2rem] rounded;
	}

	.figma_label.highlight {
		@apply bg-tertiary-800;
	}

	.border_b {
		@apply border-b-[.3px] border-tertiary-600;
	}

	/*****************************************
 ********** PARENT
 ****************************************/
	.figma_container {
		@apply flex flex-col items-center bg-neutral-900 h-screen px-[1.5rem] pb-[1.5rem] rounded-2xl;
	}

	.lens {
		@apply w-[4rem] h-[1rem] bg-neutral-700 rounded-full my-[.5rem];
	}

	.figma_wrapper {
		@apply rounded-xl w-full h-full overflow-hidden;
	}
	/* bg-shades-white */

	/*****************************************
 ********** TOP BAR
 ****************************************/

	.top_bar_wrapper {
		@apply flex items-center justify-between w-full bg-tertiary-800;
	}

	.top_bar_wrapper > div:first-child {
		@apply flex h-full;
	}

	.top_bar_wrapper > div:last-child {
		@apply flex h-full border-l-[.3px] border-tertiary-600;
	}

	.top_tab_wrapper {
		@apply flex items-center bg-tertiary-900 px-[.5rem];
	}

	.top_tab_wrapper > p {
		@apply text-[.5rem] text-shades-white;
	}

	/*****************************************
 ********** CENTER CANVASS
 ****************************************/
	.canvass_container {
		@apply relative h-[95%] p-[1rem];
		background: #1e1e1e;
	}
	/*====>  LEFT TOOL BAR */
	.left_tool_container {
		@apply absolute top-0 left-0 bg-tertiary-900 p-[1rem] w-full max-w-[11rem] h-fit rounded-xl m-[.7rem] border-[.1px] border-tertiary-800 z-[2];
	}

	/* 1st Group */
	.left_tool_container > .a_group {
		@apply flex justify-between;
	}

	.left_tool_container > .a_group > div > .figma_icon {
		@apply px-[.3rem];
	}

	/* 2nd Group */
	.left_tool_container > .b_group {
		@apply text-[.7rem] text-shades-white pb-[.5rem];
	}

	.left_tool_container > .b_group > p > .figma_icon {
		@apply px-[.1rem];
	}

	/* 3rd Group */
	.left_tool_container > .c_group,
	.right_tool_container > .c_group {
		@apply flex justify-between items-center gap-1 w-full;
	}

	.left_tool_container > .c_group > div,
	.right_tool_container > .c_group > div {
		@apply flex;
	}

	.left_tool_container > .c_group > .figma_icon {
		@apply self-end;
	}

	/* 4th Group */
	.left_tool_container > .d_group {
		@apply grid gap-2 pb-[.5rem];
	}

	.left_tool_container > .d_group > p:first-child,
	.right_tool_container > .d_group > p:first-child,
	.right_tool_container > .e_group > p:first-child {
		@apply flex items-center justify-between w-full;
	}

	/* 5th Group */
	.left_tool_container > .e_group,
	.right_tool_container > .e_group {
		@apply pt-[.5rem];
	}

	.sub_layer {
		@apply pl-[1rem];
	}

	/*====>  RIGHT TOOL BAR */
	.right_tool_container {
		@apply absolute top-0 right-0 bg-tertiary-900 p-[1rem] w-full max-w-[11rem] h-full rounded-xl m-[.7rem] h-fit border-[.3px] border-tertiary-800;
	}

	.right_tool_container > .a_group {
		@apply flex items-center justify-between;
	}

	.right_tool_container > .a_group > div {
		@apply flex items-center;
	}

	.right_tool_container > .a_group > div > p {
		@apply grid place-items-center bg-orange-500 w-[1.5rem] h-[1.5rem] rounded-full;
	}

	.right_tool_container > .a_group .figma_icon {
		@apply px-[.3rem];
	}

	.right_tool_container > .a_group .share {
		@apply bg-blue-500;
	}

	.right_tool_container > .c_group {
		@apply pb-[.5rem];
	}

	.right_tool_container > .c_group > p {
		@apply flex items-center;
	}

	.right_tool_container > .c_group > p > .compact {
		@apply pr-[0];
	}

	.right_tool_container > .e_group ul {
		@apply grid gap-3;
	}

	/*====>  ARTBOARD */
	.artboard_container {
		@apply flex flex-col items-center justify-center bg-shades-white w-full h-full;
	}

	.about_section_wrapper {
		transform: scale(0.4);
	}
</style>
