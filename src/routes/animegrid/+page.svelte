<script lang="ts">
	import { onMount } from 'svelte';
	import anime from 'animejs';

	onMount(() => {
		const wrapper = document.getElementById('tiles');
		if (!wrapper) return;
		const box = document.getElementById('tile-box');
		if (!box) return;

		let columns = 0,
			rows = 0,
			toggled = false;

		const toggle = () => {
			toggled = !toggled;

			box.classList.toggle('toggled');
		};

		const handleOnClick = (index: number) => {
			toggle();

			anime({
				targets: '.tile',
				opacity: toggled ? 0 : 1,
				delay: anime.stagger(50, {
					grid: [columns, rows],
					from: index
				})
			});
		};

		const createTile = (index: number) => {
			const tile = document.createElement('div');

			tile.classList.add('tile');

			tile.style.opacity = toggled ? '0' : '1';

			tile.onclick = (e: MouseEvent) => handleOnClick(index);

			return tile;
		};

		const createTiles = (quantity: number) => {
			Array.from(Array(quantity)).map((tile, index) => {
				wrapper.appendChild(createTile(index));
			});
		};

		const createGrid = () => {
			wrapper.innerHTML = '';

			const size = box.clientWidth > 800 ? 100 : 50;

			columns = Math.floor(box.clientWidth / size);
			rows = Math.floor(box.clientHeight / size);

			wrapper.style.setProperty('--columns', `${columns}`);
			wrapper.style.setProperty('--rows', `${rows}`);

			createTiles(columns * rows);
		};

		createGrid();

		window.onresize = () => createGrid();
	});
</script>

<section id="tile-box">
	<div id="tiles" />

	<h1 id="title" class="centered">
		The name of the game is
		<span class="fancy">Chess</span>.
	</h1>
</section>

<style>
	#tile-box {
		--g1: rgb(98, 0, 234);
		--g2: rgb(236, 64, 122);

		animation: background-pan 10s linear infinite;
		background: linear-gradient(to right, var(--g1), var(--g2), var(--g1));
		background-size: 200%;
		height: 100vh;
		overflow: hidden;
		margin: 0px;
		position: relative;
	}

	@keyframes background-pan {
		from {
			background-position: 0% center;
		}

		to {
			background-position: -200% center;
		}
	}

	:global(#tile-box.toggled) {
		animation: none;
	}

	:global(#tile-box.toggled) > #title {
		opacity: 0;
	}

	:global(#tile-box.toggled .tile:hover) {
		opacity: 0.1 !important;
	}

	.centered {
		left: 50%;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	#tiles {
		height: calc(100vh - 1px);
		width: calc(100vw - 1px);
		position: relative;
		z-index: 2;

		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		grid-template-rows: repeat(var(--rows), 1fr);
	}

	section :global(.tile) {
		cursor: pointer;
		position: relative;
	}

	section :global(.tile:hover::before) {
		background-color: rgb(30, 30, 30);
	}

	section :global(.tile::before) {
		background-color: rgb(15, 15, 15);
		content: '';
		inset: 0.5px;
		position: absolute;
	}

	#title {
		color: white;
		font-family: 'Rubik', sans-serif;
		font-size: 6vw;
		margin: 0px;
		pointer-events: none;
		transition: opacity 1200ms ease;
		width: 50vw;
		z-index: 3;
	}

	#title > .fancy {
		color: var(--g2);
		font-family: 'Dancing Script', cursive;
		font-size: 1.5em;
		line-height: 0.9em;
	}
</style>
