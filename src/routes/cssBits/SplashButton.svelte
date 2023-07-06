<script lang="ts">
	let clicked = false;
	let timer: NodeJS.Timer;

	function clickHandler() {
		clicked = true;
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			clicked = false;
		}, 600);
	}
</script>

<button
	type="button"
	class="relative cursor-pointer rounded-md border-none bg-blue-500 px-4 py-2 text-lg font-normal text-white transition-transform duration-200 ease-in active:scale-90"
	class:splash={clicked}
	on:click|preventDefault={clickHandler}
>
	Click Me!
</button>

<style>
	button::before,
	button::after {
		content: '';
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		height: 100%;
		width: 100%;
		z-index: -1;
		background-repeat: no-repeat;
	}

	button.splash::before {
		top: -70%;
		background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
			radial-gradient(circle, transparent 20%, #7d2ae8 20%, transparent 30%),
			radial-gradient(circle, #7d2ae8 20%, transparent 20%),
			radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
			radial-gradient(circle, #7d2ae8 20%, transparent 20%),
			radial-gradient(circle, #7d2ae8 20%, transparent 20%),
			radial-gradient(circle, #7d2ae8 20%, transparent 20%),
			radial-gradient(circle, #7d2ae8 20%, transparent 20%);
		background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
		background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%,
			70% 90%;
		animation: topBubbles 0.6s ease-in-out forwards;
	}

	@keyframes topBubbles {
		50% {
			background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%,
				90% 30%;
		}
		100% {
			background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%,
				90% 20%;
			background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
		}
	}

	button.splash::after {
		bottom: -70%;
		background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
			radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
			radial-gradient(circle, #7d2ae8 20%, transparent 20%),
			radial-gradient(circle, #7d2ae8 20%, transparent 20%),
			radial-gradient(circle, #7d2ae8 20%, transparent 20%),
			radial-gradient(circle, #7d2ae8 20%, transparent 20%),
			radial-gradient(circle, #7d2ae8 20%, transparent 20%);
		background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
		background-position: 10% 0%, 30% 10%, 55% 0%, 70% 0%, 85% 0%, 70% 0%, 70% 0%;
		animation: bottomBubbles 0.6s ease-in-out forwards;
	}

	@keyframes bottomBubbles {
		50% {
			background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105%, 0%;
		}
		100% {
			background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
			background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
		}
	}
</style>
