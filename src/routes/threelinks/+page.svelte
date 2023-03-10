<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		for (const link of document.getElementsByClassName('link') as HTMLCollectionOf<HTMLElement>) {
			link.onmousemove = (e: MouseEvent) => {
				const decimal = e.clientX / link.offsetWidth;
				const basePercent = 60;
				const percentRange = 40;
				const adjustablePercent = percentRange * decimal;
				const lightBluePercent = basePercent + adjustablePercent;
				link.style.setProperty('--light-blue-percent', `${lightBluePercent}%`);
			};
		}
	});
</script>

<section>
	<a class="link" href="#">How</a>
	<a class="link" href="#">To</a>
	<a class="link" href="#">Make</a>
</section>

<style>
	section {
		--blue: rgb(61, 90, 254);
		--light-blue: rgb(33, 150, 243);

		height: 100vh;
		width: 100vw;
		background-color: rgb(10, 10, 10);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.link {
		display: block;
		position: relative;
		color: white;
		font-size: clamp(2em, 8vw, 7em);
		padding: clamp(0.25em, 1vw, 1em) clamp(1em, 4vw, 4em);
		border-top: 1px solid rgba(255, 255, 255, 0.5);
	}
	.link:hover::before {
		width: 100%;
		transition: width 600ms ease;
	}
	.link::before {
		background: linear-gradient(
			to right,
			transparent,
			var(--blue),
			var(--light-blue-percent),
			var(--light-blue)
		);
		content: '';
		position: absolute;
		left: 0px;
		top: 0px;
		height: 100%;
		width: 0%;
	}
	.link:nth-child(3) {
		border-bottom: 1px solid rgba(255, 255, 255, 0.5);
	}
</style>
