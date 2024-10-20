import { ref } from "vue";
import { useStore } from "vuex";

import Image1 from "@/assets/images/Header_v2.webp";
import Image2 from "@/assets/images/Header_mobile_v2.webp";
import Image3 from "@/assets/images/figma_desktop.webp";
import Image4 from "@/assets/images/figma_mobile.webp";
import Image5 from "@/assets/images/compiled_image.webp";
import Image6 from "@/assets/images/administrative.webp";
import Image7 from "@/assets/images/support.webp";
import Image8 from "@/assets/images/graphic.webp";
import Image9 from "@/assets/images/social_media.webp";
import Image10 from "@/assets/images/CircularText.webp";
import Image11 from "@/assets/images/about.webp";
import Image12 from "@/assets/images/signature.webp";

import portfolio_1 from "@/assets/images/portfolio/image_1.webp";
import portfolio_2 from "@/assets/images/portfolio/image_2.webp";
import portfolio_3 from "@/assets/images/portfolio/image_3.webp";
import portfolio_4 from "@/assets/images/portfolio/image_4.webp";
import portfolio_5 from "@/assets/images/portfolio/image_5.webp";
import portfolio_6 from "@/assets/images/portfolio/image_6.webp";
import portfolio_7 from "@/assets/images/portfolio/image_7.webp";
import portfolio_8 from "@/assets/images/portfolio/image_8.webp";
import portfolio_9 from "@/assets/images/portfolio/image_9.webp";

// Function to load an image asynchronously
const loadImage = (src) => {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.src = src;

		img.onload = () => resolve();
		img.onerror = () => reject(new Error("Image failed to load"));
	});
};

// Composable function to use for loading images
export const useImageLoader = () => {
	const store = useStore();

	const loading = ref(true); // Local loading state
	const loadError = ref(false);

	const imageSources = [
		Image1,
		Image2,
		Image3,
		Image4,
		Image5,
		Image6,
		Image7,
		Image8,
		Image9,
		Image10,
		Image11,
		Image12,
		portfolio_1,
		portfolio_2,
		portfolio_3,
		portfolio_4,
		portfolio_5,
		portfolio_6,
		portfolio_7,
		portfolio_8,
		portfolio_9,
	];

	const loadAllImages = async () => {
		loading.value = true; // Start loading
		loadError.value = false; // Reset error state

		try {
			// Load all images
			await Promise.all(imageSources.map((src) => loadImage(src)));
			// Set loading to false once all images are loaded
			loading.value = false;
			store.commit("setGlobalLoader", false);
		} catch (error) {
			loadError.value = true; // Set error state if any image fails to load
			loading.value = false; // End loading state
			store.commit("setGlobalLoader", false);
		}
	};

	return { loading, loadError, loadAllImages };
};
