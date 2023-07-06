<script lang="ts">
	let active = false;
</script>

<div class:active>
	<nav
		class="fixed top-[20px] left-[20px] h-24 w-24 origin-center transition-all duration-300 hover:scale-110"
	>
		<div class="bg" />
		<button on:click={() => (active = !active)} />
	</nav>

	<ul class="menus">
		<li style="--i: 1">Products</li>
		<li style="--i: 2">News</li>
		<li style="--i: 3">About</li>
	</ul>
</div>

<style>
	.bg,
	button {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		transition-timing-function: ease-out;
	}

	.bg {
		background-color: gray;
		transition: transform 1s;
	}

	button {
		cursor: pointer;
		outline: none;
		border: none;
	}

	button::before,
	button::after {
		content: '';
		width: 40%;
		height: 4%;
		background-color: #000;
		position: absolute;
		inset: 0;
		margin: auto;
		transition: all 0.3s;
	}

	button::before {
		transform: translateY(calc(-0.08 * 100px));
	}
	button::after {
		transform: translateY(calc(0.08 * 100px));
	}
	button:hover::before {
		transform: translateY(calc(0.1 * 100px));
	}
	button:hover::after {
		transform: translateY(calc(-0.1 * 100px));
	}

	.active button::before {
		transform: rotate(45deg);
	}
	.active button::after {
		transform: rotate(-45deg);
	}
	.active .bg {
		transform: scale(100);
	}

	.menus {
		list-style: none;
		position: fixed;
		inset: 0;
		margin: auto;
		height: fit-content;
		width: fit-content;
		text-align: center;
		font-size: 6.6rem;
		line-height: 8.8rem;
	}
	.menus li {
		animation: hide 0.4s ease-in-out;
		animation-fill-mode: both;
		animation-delay: calc(-0.1s * var(--i) + 0.4s);
	}

	.active .menus li {
		animation: show 0.4s ease-in-out;
		animation-fill-mode: both;
		animation-delay: calc(0.1s * var(--i));
	}

	@keyframes hide {
		from {
			opacity: 1;
			visibility: visible;
			transform: translateY(0);
		}
		to {
			opacity: 0;
			visibility: hidden;
			transform: translateY(100px);
		}
	}
	@keyframes show {
		from {
			opacity: 0;
			visibility: hidden;
			transform: translateY(100px);
		}
		to {
			opacity: 1;
			visibility: visible;
			transform: translateY(0);
		}
	}
</style>
