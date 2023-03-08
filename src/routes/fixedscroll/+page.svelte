<script>
	const images = [
		'https://images.unsplash.com/photo-1677435369384-585fa3ee8c22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80',
		'https://images.unsplash.com/photo-1677461404800-55ba48012cce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
		'https://images.unsplash.com/photo-1677454563342-e353acd2e003?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80',
		'https://images.unsplash.com/photo-1677400841013-b17f87ca8af3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
		'https://images.unsplash.com/photo-1677350839343-6d94f3f88f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
		'https://images.unsplash.com/photo-1677438525309-9043f4a6af56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
		'https://images.unsplash.com/photo-1677430586198-c9e789c79561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
	];
</script>

<div class="box">
	{#each images as img}
		<div class="img">
			<img src={img} alt="some images" />
		</div>
	{/each}
</div>

<style>
	.box {
		height: 100vh;
		overflow-y: scroll;
		scrollbar-width: none;
		scroll-snap-type: y mandatory;
	}
	.box::-webkit-scrollbar {
		display: none;
	}
	.img {
		height: 100vh;
		width: 100vw;
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}
	img {
		object-fit: cover;
		min-height: 100%;
		min-width: 100%;
	}
</style>
