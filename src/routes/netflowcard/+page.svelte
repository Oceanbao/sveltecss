<script lang="ts">
</script>

<main>
	<div class="screen">
		<div class="image" />
		<div class="overlay" />
		<div class="content">
			<div class="user">
				<span class="name" data-value="CODE">CODE</span>
			</div>
		</div>
	</div>
</main>

<style>
	main {
		--background-rgb: 29 30 34;
		--blue-rgb: 33 150 243;
		--primary-rgb: var(--blue-rgb);

		height: 100vh;
		display: grid;
		place-items: center;
		background-color: rgb(var(--background-rgb));
		margin: 0rem;
		overflow: hidden;
	}

	.screen {
		width: 500px;
		aspect-ratio: 10 / 16;
		display: flex;
		border: 3px solid rgb(var(--primary-rgb) / 80%);
		border-radius: 1rem;
		background-color: rbg(var(--primary-rgb) / 15%);
		overflow: hidden;
		position: relative;
		z-index: 10;
	}

	.screen::after,
	.screen::before {
		content: '';
		height: 5px;
		position: absolute;
		z-index: 4;
		left: 50%;
		translate: -50% 0%;
		background-color: white;
	}

	.screen::before {
		width: 15%;
		top: 0rem;
		border-bottom-left-radius: 1rem;
		border-bottom-right-radius: 1rem;
	}

	.screen:after {
		width: 25%;
		bottom: 0rem;
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
	}

	@keyframes pan-overlay {
		from {
			background-position: 0% 0%;
		}
		to {
			background-position: 0% -100%;
		}
	}

	.overlay {
		background: linear-gradient(
			rgb(var(--primary-rgb) / 0.15),
			rgb(var(--primary-rgb) / 0.15) 3px,
			transparent 3px,
			transparent 9px
		);
		background-size: 100% 9px;
		height: 100%;
		width: 100%;
		position: absolute;
		z-index: 2;
		left: 0px;
		top: 0px;
		animation: pan-overlay 22s infinite linear;
	}

	@keyframes pan-image {
		0% {
			background-position: 36% 42%;
			background-size: 200%;
		}

		20% {
			background-position: 30% 35%;
			background-size: 200%;
		}

		20.0001% {
			/* -- View 2 -- */
			background-position: 60% 85%;
			background-size: 500%;
		}

		40% {
			background-position: 49% 81%;
			background-size: 500%;
		}

		40.0001% {
			/* -- View 3 -- */
			background-position: 80% 42%;
			background-size: 300%;
		}

		60% {
			background-position: 84% 33%;
			background-size: 300%;
		}

		60.0001% {
			/* -- View 4 -- */
			background-position: 0% 0%;
			background-size: 300%;
		}

		80% {
			background-position: 15% 4%;
			background-size: 300%;
		}

		80.0001% {
			/* -- View 5 -- */
			background-position: 80% 10%;
			background-size: 300%;
		}

		100% {
			background-position: 72% 14%;
			background-size: 300%;
		}
	}

	.screen > .image {
		background-image: url('https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80');
		height: 100%;
		width: 100%;
		position: absolute;
		z-index: 1;
		left: 0px;
		top: 0px;
		background-size: 300%;
		background-position: 0% 0%;
		filter: sepia(100%) hue-rotate(160deg);
		opacity: 0.6;
		animation: pan-image 15s linear infinite;
	}

	.screen > .content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		flex-grow: 1;
		gap: 4rem;
		position: relative;
		z-index: 3;
		margin: 1rem;
		padding-bottom: 6rem;
		border: 1px solid rgb(var(--primary-rgb) / 50%);
		border-radius: 0.6rem;
	}

	.screen > .content > .user {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		position: relative;
	}

	.screen > .content > .user:before,
	.screen > .content > .user:after {
		content: '';
		position: absolute;
		top: 0px;
		background-color: rgb(var(--primary-rgb));
		border-radius: 1rem;
		box-shadow: 0px 0px 8px 3px rgb(var(--primary-rgb) / 60%);
	}

	.screen > .content > .user:before {
		height: 2px;
		width: 50px;
		translate: -20px -1rem;
		opacity: 0.75;
	}

	.screen > .content > .user:after {
		height: 3px;
		width: 30px;
		translate: 26px calc(-1rem - 0.5px);
	}

	.screen > .content > .user > :is(.name, .link) {
		font-family: 'Source Code Pro', monospace;
		color: white;
		text-align: center;
		text-transform: uppercase;
	}

	.screen > .content > .user > .name {
		position: relative;
		font-size: 4.25rem;
		font-weight: 400;
	}

	.screen > .content > .user > .name:before,
	.screen > .content > .user > .name:after {
		content: '';
		height: 4px;
		width: 4px;
		position: absolute;
		border: 2px solid white;
		border-radius: 2px;
	}

	.screen > .content > .user > .name:before {
		top: 55%;
		right: -1.5rem;
	}

	.screen > .content > .user > .name:after {
		top: 45%;
		left: -1.5rem;
	}

	@media (max-width: 700px) {
		.screen {
			scale: 0.6;
			margin-bottom: 0rem;
		}
	}
</style>
