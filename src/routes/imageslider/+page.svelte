<script lang="ts">
	const data = [
		'https://images.unsplash.com/photo-1670272499232-d6c55af87386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
		'https://images.unsplash.com/photo-1674574124473-e91fdcabaefc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
		'https://images.unsplash.com/photo-1670272502307-5539ca02550a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
		'https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
		'https://images.unsplash.com/photo-1670272499188-79fe22656f64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
		'https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
	];

	const slideHandler = (pos: string) => {
		const lists = document.querySelectorAll('.item');
		if (pos === 'prev') {
			document.getElementById('slide').prepend(lists[lists.length - 1]);
		}
		if (pos === 'next') {
			document.getElementById('slide').appendChild(lists[0]);
		}
	};
</script>

<section>
	<div class="box">
		<div id="slide">
			{#each data as d}
				<div class="item" style={`--url: url(${d})`}>
					<div class="content">
						<div class="name">Oceandev</div>
						<div class="desc">{`This is a description for.`}</div>
						<button>See more</button>
					</div>
				</div>
			{/each}
		</div>
		<div class="buttons">
			<button id="prev" on:click={() => slideHandler('prev')}><i /></button>
			<button id="next" on:click={() => slideHandler('next')}><i /></button>
		</div>
	</div>
</section>

<style>
	section {
		display: grid;
		place-items: center;
		overflow: hidden;
		width: 100vw;
		height: 100vh;
		background-color: rgb(25, 25, 25);
	}

	.box {
		position: absolute;
		/* width: 1000px; */
		/* height: 600px; */
		/* padding: 50px; */
		width: 80%;
		height: 60%;
		background-color: #f5f5f5;
		box-shadow: 0 30px 50px #dbdbdb;
	}

	#slide {
		width: max-content;
		/* margin-top: 50px; */
	}

	.item {
		background-image: var(--url);
		width: 200px;
		height: 300px;
		background-position: 50% 50%;
		display: inline-block;
		transition: 0.5s;
		background-size: cover;
		position: absolute;
		z-index: 1;
		top: 50%;
		transform: translate(0, -50%);
		border-radius: 20px;
		box-shadow: 0 30px 50px #505050;
	}

	.item:nth-child(1),
	.item:nth-child(2) {
		left: 0;
		top: 0;
		transform: translate(0, 0);
		border-radius: 0;
		width: 100%;
		height: 100%;
		box-shadow: none;
	}
	.item:nth-child(3) {
		left: 50%;
	}
	.item:nth-child(4) {
		left: calc(50% + 220px);
	}
	.item:nth-child(5) {
		left: calc(50% + 440px);
	}
	.item:nth-child(n + 6) {
		left: calc(50% + 660px);
		opacity: 0;
	}
	.item .content {
		position: absolute;
		top: 50%;
		left: 100px;
		width: 300px;
		text-align: left;
		padding: 0;
		color: #eee;
		transform: translate(0, -50%);
		display: none;
		font-family: system-ui;
	}
	.item:nth-child(2) .content {
		display: block;
		z-index: 11111;
	}
	.item .name {
		font-size: 40px;
		font-weight: bold;
		opacity: 0;
		animation: showcontent 1s ease-in-out 1 forwards;
	}
	.item .desc {
		margin: 20px 0;
		opacity: 0;
		animation: showcontent 1s ease-in-out 0.3s 1 forwards;
	}
	.item button {
		padding: 10px 20px;
		border: none;
		background-color: #eee;
		color: black;
		opacity: 0;
		animation: showcontent 1s ease-in-out 0.6s 1 forwards;
	}
	@keyframes showcontent {
		from {
			opacity: 0;
			transform: translate(0, 100px);
			filter: blur(33px);
		}
		to {
			opacity: 1;
			transform: translate(0, 0);
			filter: blur(0);
		}
	}
	.buttons {
		position: absolute;
		bottom: 30px;
		z-index: 222222;
		text-align: center;
		width: 100%;
	}
	.buttons button {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		border: 1px solid #555;
		transition: 0.5s;
	}
	.buttons button:hover {
		background-color: #bac383;
	}
</style>
