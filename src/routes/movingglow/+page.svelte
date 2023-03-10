<script lang="ts">
	const handlerOnMouseMove = (e: MouseEvent) => {
		for (const elem of document.getElementsByClassName('card')) {
			const card = elem as HTMLElement;

			const rect = card.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			card.style.setProperty('--mouse-x', `${x}px`);
			card.style.setProperty('--mouse-y', `${y}px`);
		}
	};
</script>

<div class="box">
	<div class="cards" on:mousemove={handlerOnMouseMove}>
		{#each Array(6) as _, index (index)}
			<div class="card">
				<div class="card-content" />
			</div>
		{/each}
	</div>
</div>

<style>
	.box {
		background-color: rgb(27, 18, 18);
		display: flex;
		height: 100vh;
		width: 100vw;
		justify-content: center;
		align-items: center;
		margin: 0px;
		padding: 0px;
		overflow: hidden;
	}
	.cards {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		max-width: 916px;
		width: calc(100% - 20px);
	}
	.cards:hover > .card::after {
		opacity: 1;
	}
	.card {
		position: relative;
		background-color: rgba(255, 255, 255, 0.1);
		/* border: 1px solid rgba(255, 255, 255, 0.1); */
		border-radius: 10px;
		cursor: pointer;
		height: 260px;
		width: 300px;
	}
	.card:hover::before {
		opacity: 1;
	}
	.card::before,
	.card::after {
		content: '';
		opacity: 0;
		transition: opacity 500ms;
		border-radius: inherit;
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0px;
		top: 0px;
		z-index: 2;
	}
	.card::before {
		background: radial-gradient(
			800px circle at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.06),
			transparent 40%
		);
		z-index: 3;
	}
	.card::after {
		background: radial-gradient(
			400px circle at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.4),
			transparent 40%
		);
		z-index: 1;
	}
	.card-content {
		background-color: rgb(23, 23, 23);
		height: calc(100% - 2px);
		width: calc(100% - 2px);
		border-radius: inherit;
		margin: 1px;
		position: relative;
		z-index: 2;
	}
</style>
