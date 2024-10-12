<template>
	<!------------------------------>
	<!----- LARGE SCREEN NAV ------->
	<!------------------------------>
	<nav
		class="nav_container"
		v-if="!mobile_screen"
		:class="{ bg_transparent: change_bg }"
	>
		<div class="nav_wrapper max_width_container">
			<p class="nav_name">Irene Toledo</p>
			<ul class="nav_lists_wrapper">
				<CustomButton><li class="nav_list">About</li></CustomButton>
				<CustomButton><li class="nav_list">Why Me?</li></CustomButton>
				<CustomButton><li class="nav_list">Services</li></CustomButton>
				<CustomButton><li class="nav_list">Portfolio</li></CustomButton>
				<CustomButton><li class="nav_list">Contact</li></CustomButton>
			</ul>
			<button class="btn nav_btn btn_outline">Say Hello</button>
		</div>
	</nav>

	<!------------------------------>
	<!--------- MOBILE NAV --------->
	<!------------------------------>
	<nav class="nav_container" :class="{ bg_transparent: change_bg }" v-else>
		<div class="nav_wrapper max_width_container">
			<p class="nav_name" :class="{ active: active_menu_bar }">Irene Toledo</p>

			<ul
				v-if="mobile_screen"
				class="mobile_nav_lists_wrapper"
				:class="{ active: active_menu_bar }"
			>
				<li class="mobile_nav_list">About</li>
				<li class="mobile_nav_list">Why Me?</li>
				<li class="mobile_nav_list">Services</li>
				<li class="mobile_nav_list">Portfolio</li>
				<li class="mobile_nav_list">Contact</li>
			</ul>

			<ul
				class="menu_wrapper"
				:class="{ active: active_menu_bar }"
				v-if="mobile_screen"
				@click.prevent="toggle_menu_bar"
			>
				<li class="menu_line" :class="{ bg_transparent: change_bg }"></li>
				<li class="menu_line" :class="{ bg_transparent: change_bg }"></li>
				<li class="menu_line" :class="{ bg_transparent: change_bg }"></li>
			</ul>
		</div>
	</nav>
</template>

<script setup>
	import CustomButton from "@/components/Button.vue";
	import { computed, onMounted, onBeforeUnmount, ref } from "vue";
	import { useStore } from "vuex";

	const store = useStore();

	/*****************************************
	 ******** WATCH REAL-TIME SCREEN SIZE
	 ****************************************/
	// Computed property to access the screen width from the store
	const mobile_screen = computed(() => store.state.mobile_screen);

	/*****************************************
	 ******** WATCH BACKGROUND CHANGE
	 ****************************************/
	const change_bg = computed(() => store.state.is_nav_bg_change);

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
	 ******** TOGGLE MENU BAR
	 ****************************************/
	const active_menu_bar = ref(false);
	const toggle_menu_bar = () => {
		active_menu_bar.value = !active_menu_bar.value;
	};
</script>

<style lang="postcss" scoped>
	/*****************************************
	********** LARGE SCREEN
	****************************************/
	.nav_container {
		@apply fixed flex items-center w-full h-[4.7rem] px-[2rem] z-[20];
	}

	.nav_container {
		background: rgb(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
	}

	.nav_wrapper {
		@apply flex items-center justify-between w-full h-full;
	}

	.nav_name {
		@apply text-lg text-neutral-800 font-semibold z-[1];
	}

	.nav_lists_wrapper {
		@apply flex;
	}

	.nav_list {
		@apply relative text-sm text-neutral-600 cursor-pointer px-[1rem] py-[.5rem];
		transition: all 0.3s ease-in-out;
	}

	/*****************************************
	********** MOBILE SCREEN
	****************************************/

	.nav_name.active {
		@apply text-shades-white;
		transition: all 0.5s ease-in-out;
	}

	.mobile_nav_lists_wrapper {
		@apply absolute top-0 left-0 flex flex-col items-center pt-[6rem] gap-10 w-full h-full bg-primary-800 h-full;
		transform: translateY(-100rem);
		transition: all 0.5s ease-in-out;
	}

	.mobile_nav_lists_wrapper.active {
		@apply h-screen;
		transform: translateY(0rem);
	}

	.mobile_nav_list {
		@apply text-lg text-shades-white font-medium;
	}

	/*****************************************
	********** HAMBURGER MENU STYLE **********
	****************************************/
	.menu_wrapper {
		@apply relative flex flex-col gap-1 justify-center;
	}

	.menu_line {
		@apply bg-shades-black w-[1.5rem] h-[.2rem] rounded-full;
		transition: all 0.5s ease-in-out;
	}

	/* ACTIVE */

	.menu_wrapper.active {
		@apply relative w-fit h-[1rem];
	}

	.menu_wrapper.active > .menu_line {
		@apply bg-shades-white;
	}

	.menu_wrapper.active > .menu_line:first-child {
		@apply w-[1rem];
	}

	.menu_wrapper.active > .menu_line:nth-child(2) {
		@apply absolute w-[1rem] bottom-[-.1rem] right-[-.4rem];
		transform: rotate(90deg);
	}

	.menu_wrapper.active > .menu_line:last-child {
		@apply absolute bottom-[-.20rem] right-[-.08rem];
		transform: rotate(-45deg);
	}

	/*****************************************
	******** CHANGE TO DARK TRANSPARENT
	****************************************/
	.nav_container.bg_transparent {
		background: rgb(8, 20, 55, 0.9);
		backdrop-filter: blur(10px);
	}

	.nav_container.bg_transparent .nav_name {
		@apply text-shades-white;
	}

	.nav_container.bg_transparent .nav_list {
		@apply text-neutral-400;
	}

	.nav_container.bg_transparent .nav_btn {
		@apply border-shades-white text-shades-white;
	}

	.menu_line.bg_transparent {
		@apply bg-shades-white;
	}

	/*****************************************
	******** MEDIA QUERIES
	****************************************/

	@media (min-width: 900px) {
		.nav_wrapper {
			@apply border-b-[.3px] border-neutral-300;
		}
	}
</style>
