<script lang="ts">
	const handleClick = () => {
		if (window) {
			window.scrollTo(0, document.body.scrollHeight);
		}
	};
</script>

<div class="arrow cursor-pointer" on:click={handleClick}>
	<span />
	<span />
	<span />
</div>

<style>
	.arrow span {
		display: block;
		width: 50px;
		height: 50px;
		border-bottom: 5px solid #06a8ff;
		border-right: 5px solid #06a8ff;
		transform: rotate(45deg);
		margin: -10px;
		animation: scroll 2s infinite;
	}

	.arrow span:nth-child(2) {
		animation-delay: 0.2s;
	}

	.arrow span:nth-child(3) {
		animation-delay: 0.4s;
	}

	@keyframes scroll {
		0% {
			opacity: 0;
		}
		40% {
			opacity: 1;
		}
		80% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}
</style>
