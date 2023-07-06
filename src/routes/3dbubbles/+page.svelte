<script lang="ts">
	import { onMount } from 'svelte';

	let subcontainer: HTMLElement;

	onMount(() => {
		const randomZPosition = () => {
			const randomNumber = Math.floor(Math.random() * 2000) + 1;

			return randomNumber % 2 === 0 ? randomNumber : -randomNumber;
		};

		const randomBlur = (zPosition: number) => {
			let positivePositionValue = Math.abs(zPosition);
			let positionString = positivePositionValue.toString().padStart(4, '0');
			let stringArr = positionString.split('');
			stringArr.splice(2, 0, '.');
			let finalString = stringArr.join('');
			return finalString;
		};

		const createCircle = () => {
			const circle = document.createElement('div') as HTMLElement;
			let position = randomZPosition();
			circle.classList.add('circle');
			circle.style.top = `${Math.floor(Math.random() * window.innerHeight) + 1}px`;
			circle.style.left = `${Math.floor(Math.random() * window.innerWidth) + 1}px`;
			circle.style.setProperty('--z-position', `${position}px`);
			circle.style.setProperty('--blur-value', `${randomBlur(position)}px`);
			circle.style.setProperty('--hue', `${Math.floor(Math.random() * 361)}`);

			subcontainer.appendChild(circle);
		};

		for (let i = 0; i < 350; i++) {
			createCircle();
		}
	});
</script>

<div class="box">
	<div bind:this={subcontainer} class="subcontainer" />
</div>

<style>
	.box {
		height: 100vh;
		perspective: 2000px;
		background-color: black;
		overflow: hidden;
	}

	.subcontainer {
		height: 100%;
		width: 100%;
		position: relative;
		transform-style: preserve-3d;
		animation: rotate 30s linear infinite;
	}

	.subcontainer :global(.circle) {
		--blur-value: 0px;
		--z-position: 0px;
		--hue: 0;
		width: 45px;
		aspect-ratio: 1;
		border-radius: 100%;
		position: absolute;
		background-color: magenta;
		background-image: radial-gradient(
			circle at 65% 15%,
			white 1px,
			hsl(var(--hue), 70%, 65%) 3%,
			hsl(var(--hue), 70%, 35%) 60%,
			hsl(var(--hue), 70%, 65%) 100%
		);
		transform: translateZ(var(--z-position));
		animation: rotateY 30s linear infinite;
		filter: blur(var(--blur-value));
	}

	@keyframes rotateY {
		from {
			transform: translateZ(var(--z-position)) rotateY(0deg);
		}
		to {
			transform: translateZ(var(--z-position)) rotateY(-360deg);
		}
	}

	@keyframes rotate {
		from {
			transform: rotateY(0deg);
		}
		to {
			transform: rotateY(360deg);
		}
	}
</style>
