<script lang="ts">
</script>

<div class="box">
	<h1 class="text">multi color text with css</h1>
</div>

<style>
	.box {
		background: #151515;
	}

	.text {
		--color1: #01579b;
		--color2: #00838f;
		--color3: #ffd600;
		--color4: #ff4081;
		--color5: #f44336;

		font-family: 'Luckiest Guy', cursive;
		text-transform: uppercase;
		word-spacing: 100vw;
		width: min-content;
		text-align: center;
		font-size: 4rem;
		line-height: 100%;
		background: linear-gradient(
			225deg,
			var(--color1) 0%,
			var(--color1) 9%,
			transparent 9%,
			transparent 10%,
			var(--color2) 10%,
			var(--color2) 19%,
			transparent 19%,
			transparent 20%,
			var(--color3) 20%,
			var(--color3) 29%,
			transparent 29%,
			transparent 30%,
			var(--color4) 30%,
			var(--color4) 39%,
			transparent 39%,
			transparent 40%,
			var(--color5) 40%,
			var(--color5) 49%,
			transparent 49%,
			transparent 50%,
			var(--color1) 60%,
			var(--color1) 69%,
			transparent 69%,
			transparent 70%,
			var(--color2) 50%,
			var(--color2) 69%,
			transparent 69%,
			transparent 70%,
			var(--color3) 70%,
			var(--color3) 79%,
			transparent 79%,
			transparent 80%,
			var(--color4) 80%,
			var(--color4) 89%,
			transparent 89%,
			transparent 90%,
			var(--color5) 90%,
			var(--color5) 99%,
			transparent 99%
		);
		background-size: 200% 200%;
		color: transparent;
		background-clip: text;
		-webkit-background-clip: text;
		animation: move 4s linear infinite;
	}

	@keyframes move {
		0% {
			background-position: 0px 100%;
		}
		100% {
			background-position: 100% 0px;
		}
	}
</style>
