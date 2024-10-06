import { createStore } from "vuex";

// Create a new store instance.
export const store = createStore({
	state: {
		// Initialize with the current width
		windowWidth: window.innerWidth,
		mobile_screen: false,

		// Button Animations
		buttonTransform: "translate(0, 0)",
	},
	mutations: {
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
