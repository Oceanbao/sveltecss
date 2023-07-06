<div class="loader" style="--color: #00ffee">
	<div class="dot" style="--i: 0" />
	<div class="dot" style="--i: 1" />
	<div class="dot" style="--i: 2" />
	<div class="dot" style="--i: 3" />
	<div class="dot" style="--i: 4" />
</div>

<style>
	.loader {
		position: relative;
		width: 120px;
		height: 120px;
	}

	.dot {
		position: absolute;
		width: 100%;
		height: 100%;
		transform-origin: center center;
		transform: rotate(225deg);
		animation: spin 5.5s infinite;
		animation-delay: calc(230ms * var(--i));
	}

	.dot::before {
		content: '';
		position: absolute;
		width: 15%;
		height: 15%;
		border-radius: 100%;
		background-color: var(--color);
		box-shadow: 0 0 10px var(--color), 0 0 20px var(--color), 0 0 40px var(--color),
			0 0 60px var(--color), 0 0 80px var(--color), 0 0 100px var(--color);
		animation: changeColor 4s linear infinite;
		animation-delay: calc(800ms * var(--i));
	}

	@keyframes spin {
		0% {
			transform: rotate(225deg);
			opacity: 1;
			animation-timing-function: ease-out;
		}

		7% {
			transform: rotate(345deg);
			animation-timing-function: linear;
		}

		30% {
			transform: rotate(455deg);
			animation-timing-function: ease-in-out;
		}

		39% {
			transform: rotate(690deg);
			animation-timing-function: linear;
		}

		70% {
			transform: rotate(815deg);
			opacity: 1;
			animation-timing-function: ease-out;
		}

		75% {
			transform: rotate(945deg);
			animation-timing-function: ease-out;
		}

		76% {
			transform: rotate(945deg);
			opacity: 0;
		}
		100% {
			transform: rotate(945deg);
			opacity: 0;
		}
	}

	@keyframes changeColor {
		0% {
			filter: hue-rotate(0deg);
		}
		100% {
			filter: hue-rotate(360deg);
		}
	}
</style>
