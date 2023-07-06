<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

		const enhance = (id) => {
			const element = document.getElementById(id),
				text = element.innerText.split('');

			element.innerText = '';

			text.forEach((value, index) => {
				const outer = document.createElement('span');

				outer.className = 'outer';

				const inner = document.createElement('span');

				inner.className = 'inner';

				inner.style.animationDelay = `${rand(-5000, 0)}ms`;

				const letter = document.createElement('span');

				letter.className = 'letter';

				letter.innerText = value;

				letter.style.animationDelay = `${index * 1000}ms`;

				inner.appendChild(letter);

				outer.appendChild(inner);

				element.appendChild(outer);
			});
		};

		enhance('channel-link');
	});
</script>

<section id="scatterletters">
	<div id="text">
		<div id="text">
			<div class="line">
				<p class="word">A</p>
				<p class="word">Person</p>
			</div>

			<div class="line">
				<p class="word">YouTube</p>
				<p class="word">&</p>
			</div>

			<div class="line">
				<p class="word">CodePendence</p>
			</div>

			<div class="line">
				<a
					id="channel-link"
					href="https://youtube.com/@hyperplexed"
					target="_blank"
					class="word fancy"
				>
					@Hyperplexed
				</a>
			</div>
		</div>
	</div>
</section>

<style global>
	#scatterletters {
		--green: rgb(42, 252, 152);
		--blue: rgb(41, 121, 255);

		background-color: black;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		display: grid;
		place-items: center;
	}

	@keyframes float {
		from,
		to {
			transform: translateY(-0%);
		}

		50% {
			transform: translateY(-3%);
		}
	}

	@keyframes background-pan {
		from {
			background-position: 1000% center;
		}

		to {
			background-position: 0% center;
		}
	}

	#scatterletters .line {
		display: flex;
		justify-content: space-between;
	}

	#scatterletters .word {
		color: white;
		font-size: clamp(2rem, 8vw, 10rem);
		font-family: 'Rubik', sans-serif;
		margin: 0rem;
		text-transform: uppercase;
		transition: opacity 250ms ease;
	}

	#scatterletters a {
		text-decoration: none;
	}

	#scatterletters #text:has(.fancy:hover) .word:not(.fancy:hover) {
		opacity: 0.2;
	}

	#scatterletters .fancy span {
		display: inline-block;
	}

	#scatterletters .fancy > .outer {
		transition: transform 350ms ease;
	}

	#scatterletters .fancy:hover > .outer {
		transition-duration: 800ms;
	}

	#scatterletters .fancy:hover > .outer > .inner {
		animation: float 5s ease infinite;
	}

	#scatterletters .fancy:hover > .outer > .inner > .letter {
		background: linear-gradient(to right, var(--blue), var(--green), var(--blue));
		background-size: 1000%;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: background-pan 150s linear infinite;
	}

	#scatterletters .fancy:hover > .outer:nth-child(1) {
		transform: translate(-80%, 60%) rotate(8deg);
	}

	#scatterletters .fancy:hover > .outer:nth-child(2) {
		transform: translate(-40%, 20%) rotate(4deg);
	}

	#scatterletters .fancy:hover > .outer:nth-child(3) {
		transform: translate(-10%, 60%) rotate(-6deg);
	}

	#scatterletters .fancy:hover > .outer:nth-child(4) {
		transform: translate(0%, 8%) rotate(-8deg);
	}

	#scatterletters .fancy:hover > .outer:nth-child(5) {
		transform: translate(0%, -20%) rotate(5deg);
	}

	#scatterletters .fancy:hover > .outer:nth-child(6) {
		transform: translate(0%, 20%) rotate(-3deg);
	}

	#scatterletters .fancy:hover > .outer:nth-child(7) {
		transform: translate(0%, -40%) rotate(-5deg);
	}

	#scatterletters .fancy:hover > .outer:nth-child(8) {
		transform: translate(0%, 15%) rotate(10deg);
	}

	#scatterletters .fancy:hover > .outer:nth-child(9) {
		transform: translate(0%, -50%) rotate(8deg);
	}

	#scatterletters .fancy:hover > .outer:nth-child(10) {
		transform: translate(0%, 15%) rotate(-6deg);
	}

	#scatterletters .fancy:hover > .outer:nth-child(11) {
		transform: translate(50%, -10%) rotate(-3deg);
	}

	#scatterletters .fancy:hover > .outer:nth-child(12) {
		transform: translate(120%, -30%) rotate(-10deg);
	}
</style>
