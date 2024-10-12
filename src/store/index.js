import { createStore } from "vuex";

// Create a new store instance.
export const store = createStore({
	state: {
		// Global Loader
		global_loader: true,

		// Initialize with the current width
		windowWidth: window.innerWidth,
		mobile_screen: false,

		// Button Animations
		buttonTransform: "translate(0, 0)",

		// Navigation Background Change
		is_nav_bg_change: false,
	},
	mutations: {
		/*****************************************
		 ****** GLOBAL LOADER
		 ****************************************/
		setGlobalLoader(state, val) {
			state.global_loader = val;
		},

		/*****************************************
		 ****** CHANGE NAV COLOR
		 ****************************************/
		changeNavBackground(state, val) {
			state.is_nav_bg_change = val;
		},
		/*****************************************
		 ****** SCREEN DEVICE CHECKING
		 ****************************************/
		checkScreen(state) {
			// Update width
			state.windowWidth = window.innerWidth;

			if (state.windowWidth < 900) {
				state.mobile_screen = true;
			} else {
				state.mobile_screen = false;
			}
		},

		/*****************************************
		 ****** MOUSE BUTTON HOVER FUNCTION
		 ****************************************/
		setButtonTransform(state, transform) {
			state.buttonTransform = transform;
		},
		resetButtonTransform(state) {
			state.buttonTransform = "translate(0, 0)";
		},
	},
});
