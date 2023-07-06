<section class="box">
	<div class="logo" />
</section>

<style>
	.box {
		min-height: 30vh;
	}
	.logo {
		height: 15rem;
		width: 9rem;
		border-left: 3rem solid #e50914;
		border-right: 3rem solid #e50914;
	}
	.logo::before {
		display: block;
		content: '';
		width: 100%;
		height: 100%;
		background: #e50914;
		transform: skewX(21.5deg);
		box-shadow: 0 0 30px black;
	}
</style>
