<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const trailer = document.getElementById('trailer');
		if (!trailer) return;
		const svgArrow = document.getElementById('cursor-arrow');
		if (!svgArrow) return;
		const svgPlay = document.getElementById('cursor-play');
		if (!svgPlay) return;

		const animateTrailer = (e: MouseEvent, interacting: boolean) => {
			const x = e.clientX - trailer.offsetWidth / 2;
			const y = e.clientY - trailer.offsetHeight / 2;

			const keyframes = {
				transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
			};

			trailer.animate(keyframes, {
				duration: 800,
				fill: 'forwards'
			});
		};

		window.onmousemove = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const interactable = target.closest('.interactable') as HTMLElement;
			const interacting = interactable !== null;
			animateTrailer(e, interacting);

			if (interacting) {
				switch (interactable.dataset.type) {
					case 'link':
						svgArrow.style.display = 'block';
						svgPlay.style.display = 'none';
						break;
					case 'video':
						svgPlay.style.display = 'block';
						svgArrow.style.display = 'none';
						break;
				}
			} else {
				svgArrow.style.display = 'none';
				svgPlay.style.display = 'none';
			}
		};
	});
</script>

<section>
	<div id="trailer">
		<svg
			id="cursor-arrow"
			width="15"
			height="15"
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			><path
				d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
				fill="currentColor"
				fill-rule="evenodd"
				clip-rule="evenodd"
			/></svg
		>
		<svg
			id="cursor-play"
			width="15"
			height="15"
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			><path
				d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
				fill="currentColor"
				fill-rule="evenodd"
				clip-rule="evenodd"
			/></svg
		>
	</div>
	<div
		class="interactable"
		data-type="link"
		style="background-image: url(https://images.unsplash.com/photo-1657739774592-14c8f97eaece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)"
	/>

	<div
		class="interactable"
		data-type="video"
		style="background-image: url(https://images.unsplash.com/photo-1657779582398-a13b5896ff19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)"
	/>
</section>

<style>
	section {
		position: relative;
		height: 100vh;
		width: 100vw;
		background-color: rgb(20, 20, 20);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: clamp(10px, 4vw, 100px);
	}

	section:hover #trailer {
		opacity: 1;
	}

	#trailer {
		height: 20px;
		width: 20px;
		background-color: white;
		border-radius: 20px;
		position: fixed;
		left: 0px;
		top: 0px;
		z-index: 9999;
		pointer-events: none;
		opacity: 0;
		transition: opacity 500ms ease;
		display: grid;
		place-items: center;
	}

	#trailer:not([data-type='']) > svg {
		opacity: 1;
	}

	#trailer > svg {
		/* font-size: 6px; */
		/* line-height: 4px; */
		opacity: 0;
		transition: opacity 400ms ease;
	}

	.interactable {
		aspect-ratio: 1/ 1.5;
		width: clamp(120px, 40vmin, 600px);
		background-position: center 50%;
		background-size: 100%;
		opacity: 0.4;
		transition: background-size 400ms ease, opacity 400ms ease, transform 400ms ease;
	}

	.interactable:hover {
		background-size: 105%;
		opacity: 0.8;
	}
</style>
