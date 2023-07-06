<div class="text">
	<span>I&apos;</span>M<span>POSSIBLE</span>
</div>

<style lang="scss">
	.text {
		background-color: #000;
		font-size: 4rem;
		font-weight: 500;
		color: #222;
		letter-spacing: 5px;
		cursor: pointer;

		& span {
			transition: 0.5s;
		}

		&:hover span:nth-child(1) {
			margin-right: 10px;
		}

		&:hover span:nth-child(1)::after {
			content: '';
		}

		&:hover span:nth-child(2) {
			margin-left: 40px;
		}

		&:hover span {
			color: #fff;
			text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff, 0 0 80px #fff, 0 0 120px #fff,
				0 0 160px #fff;
		}
	}
</style>
