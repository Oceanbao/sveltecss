<script lang="ts">
	import { onMount } from 'svelte';

	let letterElement: HTMLElement;
	let blobElement: HTMLElement;

	onMount(() => {
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

		let interval: NodeJS.Timer;

		const handleOnHover = (e: MouseEvent) => {
			let iteration = 0;

			clearInterval(interval);

			interval = setInterval(() => {
				const target = e.target as HTMLElement;
				target.innerText = target.innerText
					.split('')
					.map((letter, index) => {
						if (index < iteration && target.dataset.value) {
							return target.dataset.value[index];
						}

						return letters[Math.floor(Math.random() * 26)];
					})
					.join('');

				if (iteration >= target.dataset.value.length) {
					clearInterval(interval);
				}

				iteration += 1 / 3;
			}, 30);
		};

		letterElement.addEventListener('mouseover', handleOnHover);

		const handleOnPointerMove = (e: MouseEvent) => {
			const { clientX, clientY } = e;

			blobElement.animate(
				{
					left: `${clientX}px`,
					top: `${clientY}px`
				},
				{ duration: 3000, fill: 'forwards' }
			);
		};

		window.addEventListener('pointermove', handleOnPointerMove);

		return () => {
			letterElement.removeEventListener('mouseover', handleOnHover);
			window.removeEventListener('pointermove', handleOnPointerMove);
		};
	});
</script>

<section id="cyberletters">
	<div bind:this={blobElement} id="blob" />
	<div id="blur" />
	<h1 bind:this={letterElement} data-value="HYPERPLEXED">HYPERPLEXED</h1>
</section>

<style global>
	#cyberletters {
		background-color: black;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		position: relative;
	}

	#cyberletters h1 {
		font-family: 'Space Mono', monospace;
		font-size: clamp(3rem, 10vw, 10rem);
		color: white;
		padding: 0rem clamp(1rem, 2vw, 3rem);
		border-radius: clamp(0.4rem, 0.75vw, 1rem);
		margin: 0rem;
		position: absolute;
		left: 50%;
		top: 50%;
		translate: -50% -50%;
		z-index: 3;
	}

	#cyberletters h1:hover {
		background-color: white;
		color: black;
	}

	@keyframes rotate {
		from {
			rotate: 0deg;
		}

		50% {
			scale: 1 1.5;
		}

		to {
			rotate: 360deg;
		}
	}

	#cyberletters #blob {
		background-color: white;
		height: 34vmax;
		aspect-ratio: 1;
		position: absolute;
		left: 50%;
		top: 50%;
		translate: -50% -50%;
		border-radius: 50%;
		background: linear-gradient(to right, aquamarine, mediumpurple);
		animation: rotate 20s infinite;
		opacity: 0.8;
	}

	#cyberletters #blur {
		height: 100%;
		width: 100%;
		position: absolute;
		z-index: 2;
		backdrop-filter: blur(12vmax);
	}
</style>
