<script lang="ts">
	import { onMount } from 'svelte';

	const createWord = (text: string, index: number) => {
		const word = document.createElement('span');
		word.innerHTML = `${text}`;
		word.classList.add('card-subtitle-word');
		word.style.transitionDelay = `${index * 40}ms`;
		return word;
	};

	onMount(() => {
		const subtitle = document.getElementsByClassName('card-subtitle')[0];
		const addWord = (text: string, index: number) => subtitle.appendChild(createWord(text, index));
		const createSubtitle = (text: string) => text.split(' ').map(addWord);
		createSubtitle("But in a much more real sense, I have no idea what I'm doing.");
	});
</script>

<section>
	<div class="card">
		<h3 class="card-title">I know exactly what I'm doing</h3>
		<h4 class="card-subtitle" />
		<div class="card-content" />
	</div>
</section>

<style>
	section {
		--border: rgb(3, 169, 244);

		--g1: rgb(98, 0, 234);
		--g2: rgb(236, 64, 122);
		--g3: rgb(253, 216, 53);

		background-color: rgb(28, 28, 28);
		height: 100vh;
		width: 100vw;
		display: grid;
		place-items: center;
	}

	.card {
		aspect-ratio: 1 / 1.05;
		border: 0.5vmin solid var(--border);
		cursor: pointer;
		position: relative;
		width: 56vmin;
	}

	.card:hover::before {
		background-position: 100% 100%;
		transform: scale(1.08, 1.03);
	}

	.card:hover > .card-content {
		background-position: -10% 0%;
	}

	.card:hover :global(.card-subtitle-word) {
		opacity: 1;
		transform: translateY(0%);
		transition: opacity 0ms, transform 200ms cubic-bezier(0.9, 0.06, 0.15, 0.9);
	}

	.card::before {
		background: linear-gradient(
			130deg,
			transparent 0% 33%,
			var(--g1) 66%,
			var(--g2) 83.5%,
			var(--g3) 100%
		);
		background-position: 0% 0%;
		background-size: 300% 300%;
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		left: 0px;
		top: 0px;
		transition: background-position 350ms ease, transform 350ms ease;
		z-index: 1;
	}

	.card-content {
		background: radial-gradient(rgba(255, 255, 255, 0.2) 8%, transparent 8%);
		background-position: 0% 0%;
		background-size: 5vmin 5vmin;
		height: calc(100% - 10vmin);
		width: calc(100% - 10vmin);
		padding: 5vmin;
		position: relative;
		transition: background-position 350ms ease;
		z-index: 2;
	}

	h3,
	h4 {
		padding: 4vmin;
		position: relative;
		z-index: 1;
	}

	.card-title,
	.card-subtitle {
		color: white;
		font-family: 'Anek Latin', sans-serif;
		font-weight: 400;
		margin: 0px;
	}

	.card-title {
		font-size: 6vmin;
	}

	.card-subtitle {
		font-size: 3vmin;
		margin-top: 2vmin;
	}

	.card-subtitle > :global(.card-subtitle-word) {
		display: inline-block;
		margin: 0vmin 0.3vmin;
		opacity: 0;
		position: relative;
		transform: translateY(40%);
		transition: none;
	}
</style>
