<script lang="ts">
	import { onMount } from 'svelte';

	let index = 0;
	const interval = 1000;

	const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

	const animate = (star: HTMLElement) => {
		star.style.setProperty('--star-left', `${rand(-10, 100)}%`);
		star.style.setProperty('--star-top', `${rand(-40, 80)}%`);

		star.style.animation = 'none';
		star.offsetHeight;
		star.style.animation = '';
	};

	onMount(() => {
		const timers: NodeJS.Timer[] = [];

		for (const star of document.getElementsByClassName(
			'magic-star'
		) as HTMLCollectionOf<HTMLElement>) {
			setTimeout(() => {
				animate(star);

				const timer = setInterval(() => animate(star), interval);
				timers.push(timer);
			}, index++ * (interval / 3));
		}

		return () => {
			timers.forEach((t, _idx) => clearInterval(t));
		};
	});
</script>

<section>
	<h1>
		Sometimes I'll start a line of code and I <span class="magic">
			{#each Array(3) as _, index (index)}
				<div class="magic-star">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="0.05"
						stroke="currentColor"
						class="h-6 w-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
						/>
					</svg>
				</div>
			{/each}
			<span class="magic-text">don't even know</span> where it's going.
		</span>
	</h1>
</section>

<style>
	section {
		--purple: rgb(123, 31, 162);
		--violet: rgb(103, 58, 183);
		--pink: rgb(244, 143, 177);

		height: 30vh;
		width: 100vw;
		background-color: rgb(10, 10, 10);
		margin: 0px;
		overflow: hidden;
		display: grid;
		place-items: center;
	}
	h1 {
		color: white;
		font-family: 'Rubik', sans-serif;
		font-size: clamp(2em, 2vw, 4em);
		font-weight: 400;
		margin: 0px;
		padding: 20px;
		text-align: center;
	}
	.magic {
		display: inline-block;
		position: relative;
	}
	.magic-star {
		--size: clamp(20px, 1.5vw, 30px);

		display: block;
		position: absolute;
		height: var(--size);
		width: var(--size);
		left: var(--star-left);
		top: var(--star-top);
		animation: scale 700ms ease infinite;
	}
	.magic-star > svg {
		display: block;
		opacity: 0.7;
		animation: rotate 1000ms linear infinite;
	}
	.magic-star > svg > path {
		fill: var(--violet);
	}
	.magic-text {
		white-space: nowrap;
		background: linear-gradient(to right, var(--purple), var(--violet), var(--pink), var(--purple));
		background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 200%;
		animation: background-pan 3s linear infinite;
	}

	@keyframes background-pan {
		from {
			background-position: 0% center;
		}
		to {
			background-position: -200% center;
		}
	}
	@keyframes scale {
		from,
		to {
			transform: scale(0);
		}
		50% {
			transform: scale(1);
		}
	}
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(180deg);
		}
	}
</style>
