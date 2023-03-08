<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const menu = document.getElementById('menu');
		if (!menu) return;

		const handlerOnMouseOver = (e: Event) => {
			const target = e.target as HTMLElement;
			const activeIndex = Number(target.dataset.itemIndex);
			menu.style.setProperty('--pattern-y', `-${activeIndex * 25}%`);
			menu.style.setProperty('--image-y', `${45 + activeIndex * 5}%`);
		};

		for (const item of document.getElementsByClassName(
			'menu-item'
		) as HTMLCollectionOf<HTMLElement>) {
			item.addEventListener('mouseover', handlerOnMouseOver);
		}

		return () => {
			for (const item of document.getElementsByClassName(
				'menu-item'
			) as HTMLCollectionOf<HTMLElement>) {
				item.addEventListener('mouseover', handlerOnMouseOver);
			}
		};
	});
</script>

<section>
	<div id="menu">
		<div id="menu-items">
			<div class="menu-item" data-item-index="1">Home</div>
			<div class="menu-item" data-item-index="2">Shop</div>
			<div class="menu-item" data-item-index="3">About</div>
			<div class="menu-item" data-item-index="4">Contact Us</div>
		</div>
		<div id="menu-background-pattern" />
		<div id="menu-background-image" />
	</div>
</section>

<style>
	section {
		position: relative;
		height: 100vh;
		width: 100vw;
		background-color: rgb(20, 20, 20);
	}

	#menu {
		display: flex;
		align-items: center;
		height: 100%;
		width: 100%;
	}

	#menu-items {
		position: relative;
		margin-left: clamp(4rem, 20vw, 48rem);
		z-index: 2;
	}

	#menu-background-pattern {
		background-position: 0% var(--pattern-y);
		background-image: radial-gradient(rgba(255, 255, 255, 0.1) 9%, transparent 9%);
		background-size: 12vmin 12vmin;
		position: absolute;
		left: 0px;
		top: 0px;
		height: 100vh;
		width: 100vw;
		transition: opacity 800ms ease, background-size 800ms ease, background-position 800ms ease;
		z-index: 1;
	}

	#menu-background-image {
		background-position: center var(--image-y);
		background-image: url('https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80');
		background-size: 110vmax;
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0px;
		left: 0px;
		opacity: 0.15;
		transition: opacity 800ms ease, background-size 800ms ease, background-position 800ms ease;
		z-index: 0;
	}

	#menu-items:hover ~ #menu-background-pattern {
		background-size: 11vmin 11vmin;
		opacity: 0.5;
	}

	#menu-items:hover ~ #menu-background-image {
		background-size: 100vmax;
		opacity: 0.1;
	}

	#menu-items:hover > .menu-item:not(:hover) {
		opacity: 0.3;
	}

	.menu-item {
		color: white;
		cursor: pointer;
		display: block;
		font-family: 'Ibarra Real Nova', serif;
		font-size: clamp(3rem, 8vw, 8rem);
		padding: clamp(0.25rem, 0.5vw, 1rem) 0rem;
		text-decoration: none;
		transition: opacity 400ms ease;
	}
</style>
