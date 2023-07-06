<script>
	import BlurLoading from './BlurLoading.svelte';
	import CyberButton from './CyberButton.svelte';
	import Magnifier from './Magnifier.svelte';
	import MoonSun from './MoonSun.svelte';
	import PerspectiveImage from './PerspectiveImage.svelte';
	import ScalingMenu from './ScalingMenu.svelte';
	import SplashButton from './SplashButton.svelte';
</script>

<ScalingMenu />

<div class="m-auto flex h-32 w-32 items-center justify-center">
	<SplashButton />
</div>

<div class="m-auto flex h-64 items-center justify-center gap-16 bg-black">
	<BlurLoading />
	<!-- tri line -->
	<div class="triline-box">
		<div class="triline-item" />
		<div class="triline-item" />
		<div class="triline-item" />
	</div>
	<MoonSun />
</div>

<Magnifier />

<PerspectiveImage />

<CyberButton />

<style>
	.triline-box {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		perspective: 800px;
	}

	.triline-item {
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.triline-item:nth-child(1) {
		border-bottom: 6px solid #f13a8f;
		transform: rotateX(35deg) rotateY(-45deg);
		animation: rotate-one 1s linear infinite;
	}
	.triline-item:nth-child(2) {
		border-right: 6px solid #4bc8eb;
		transform: rotateX(50deg) rotateY(10deg);
		animation: rotate-two 1s linear infinite;
	}
	.triline-item:nth-child(3) {
		border-top: 6px solid #36f372;
		transform: rotateX(35deg) rotateY(55deg);
		animation: rotate-three 1s linear infinite;
	}

	@keyframes rotate-one {
		to {
			transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
		}
	}
	@keyframes rotate-two {
		to {
			transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
		}
	}
	@keyframes rotate-three {
		to {
			transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
		}
	}
</style>
