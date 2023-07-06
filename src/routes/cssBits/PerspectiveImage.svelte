<script lang="ts">
	const lerp = (min: number, max: number, percentage: number) =>
		min * (1 - percentage) + max * percentage;

	let xOffset = 0;
	let yOffset = 0;
	let spotX = 50;
	let spotY = 50;

	function onMoveHander(e: MouseEvent) {
		const { width, height, x, y } = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
		const percentageX = (e.clientX - x) / width;
		const percentageY = (e.clientY - y) / height;
		xOffset = lerp(-15, 15, percentageX);
		yOffset = lerp(-15, 15, percentageY);
		spotX = percentageX * 100;
		spotY = percentageY * 100;
	}

	function onLeaveHandler() {
		xOffset = 0;
		yOffset = 0;
		spotX = 50;
		spotY = 50;
	}
</script>

<div class="w-[calc(.2*(100%-72px))] bg-[#1a1c1d] transition-transform duration-300 ease-in-out">
	<div
		class="relative after:absolute after:inset-0 after:will-change-[background-image] after:content-[''] after:[background-image:radial-gradient(circle_at_calc(var(--spot-x,_50)_*_1%)_calc(var(--spot-y,_50)_*_1%),_#fff2,_transparent)] hover:scale-105"
		style="--x-off: {xOffset}; --y-off: {yOffset}; --spot-x: {spotX}; --spot-y: {spotY};"
		on:mousemove={onMoveHander}
		on:pointerleave={onLeaveHandler}
	>
		<img
			class="transition-transform duration-100 will-change-transform [transform:perspective(1000px)_scale(1.02,_.97)_rotateX(calc(var(--y-off,_0)_*_-1deg))_rotateY(calc(var(--x-off,_0)_*_1deg))]"
			alt="Emancipation"
			loading="eager"
			src="https://image.tmdb.org/t/p/w342/s9sUK1vAaOcxJfKzNTszrNkPhkH.jpg"
			width="342"
			height="556"
		/>
	</div>
</div>
