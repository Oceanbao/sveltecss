<div class="box">
	<div class="image" />
	<div class="image" />
	<div class="image" />
</div>

<style lang="scss">
	.box {
		position: relative;
		width: 100%;
	}

	.image {
		position: sticky;
		top: 0;
		width: 100%;
		height: 100vh;
		background-color: #000;
	}

	.image:nth-child(1) {
		background: url('https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3442&q=80');
		background-size: cover;
	}
	.image:nth-child(2) {
		background: url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80');
		background-size: cover;
	}
	.image:nth-child(3) {
		background: url('https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80');
		background-size: cover;
	}
</style>
