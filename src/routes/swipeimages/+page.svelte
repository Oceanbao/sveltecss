<script lang="ts">
	import { onMount } from 'svelte';

	let track: HTMLElement;

	onMount(() => {
		const handleOnDown = (e: MouseEvent | TouchEvent) => {
			let clientX;
			if ('touches' in e) {
				clientX = e.touches[0].clientX;
			} else {
				clientX = e.clientX;
			}
			track.dataset.mouseDownAt = `${clientX}`;
		};

		const handleOnUp = (_e: MouseEvent | TouchEvent) => {
			track.dataset.mouseDownAt = '0';
			track.dataset.prevPercentage = track.dataset.percentage;
		};

		const handleOnMove = (e: MouseEvent | TouchEvent) => {
			if (!track.dataset.mouseDownAt || !track.dataset.prevPercentage) return;
			if (track.dataset.mouseDownAt === '0') return;

			let clientX;
			if ('touches' in e) {
				clientX = e.touches[0].clientX;
			} else {
				clientX = e.clientX;
			}

			const mouseDelta = parseFloat(track.dataset.mouseDownAt) - clientX;
			const maxDelta = window.innerWidth / 2;

			const percentage = (mouseDelta / maxDelta) * -100;
			const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
			const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

			track.dataset.percentage = `${nextPercentage}`;

			track.animate(
				{
					transform: `translate(${nextPercentage}%, -50%)`
				},
				{ duration: 1200, fill: 'forwards' }
			);
			for (const image of track.getElementsByClassName('image')) {
				image.animate(
					{
						objectPosition: `${100 + nextPercentage}% center`
					},
					{ duration: 1200, fill: 'forwards' }
				);
			}
		};

		window.addEventListener('mousedown', handleOnDown);
		window.addEventListener('touchstart', handleOnDown);

		window.addEventListener('mouseup', handleOnUp);
		window.addEventListener('touchend', handleOnUp);

		window.addEventListener('mousemove', handleOnMove);
		window.addEventListener('touchmove', handleOnMove);

		return () => {
			window.removeEventListener('mousedown', handleOnDown);
			window.removeEventListener('touchstart', handleOnDown);

			window.removeEventListener('mouseup', handleOnUp);
			window.removeEventListener('touchend', handleOnUp);

			window.removeEventListener('mousemove', handleOnMove);
			window.removeEventListener('touchmove', handleOnMove);
		};
	});
</script>

<section id="swipeimages">
	<div bind:this={track} id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
		<img
			class="image"
			src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
			draggable="false"
		/>
		<img
			class="image"
			src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
			draggable="false"
		/>
		<img
			class="image"
			src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
			draggable="false"
		/>
		<img
			class="image"
			src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
			draggable="false"
		/>
		<img
			class="image"
			src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
			draggable="false"
		/>
		<img
			class="image"
			src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80"
			draggable="false"
		/>
		<img
			class="image"
			src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80"
			draggable="false"
		/>
		<img
			class="image"
			src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
			draggable="false"
		/>
	</div>
</section>

<style global>
	#swipeimages {
		background-color: black;
		position: relative;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
	}

	#image-track {
		display: flex;
		gap: 4vmin;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(0%, -50%);
		user-select: none;
	}

	#image-track > .image {
		width: 40vmin;
		height: 56vmin;
		max-width: none;
		object-fit: cover;
		object-position: 100% center;
	}
</style>
