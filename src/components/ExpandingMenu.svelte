<script lang="ts">
	type Link = {
		href: string;
		text: string;
	};
	export let links: Link[];

	let active = false;
</script>

<div class="box">
	<input type="checkbox" class="checkbox" class:checked={active} id="nav-toggle" />
	<label for="nav-toggle" class="button" on:click={() => (active = !active)}
		><span class="icon">&nbsp;</span></label
	>
	<div class="background">&nbsp;</div>
	<nav>
		<ul class="list">
			{#each links as link (link.href)}
				<li class="item">
					<a href={link.href} class="link" on:click={() => (active = !active)}>
						<span>{link.text}</span></a
					>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style lang="scss">
	.checkbox {
		display: none;
	}

	.button {
		height: 3rem;
		width: 3rem;
		position: fixed;
		top: 2rem;
		right: 2rem;
		z-index: 2000;
		text-align: center;
		cursor: pointer;
		border-radius: 50%;
		background: linear-gradient(145deg, #e63ae6, #ff44ff);
		box-shadow: 13px 13px 28px #731d73, -13px -13px 28px #ff63ff;
	}

	.background {
		height: 3rem;
		width: 3rem;
		border-radius: 50%;
		position: fixed;
		top: 2rem;
		right: 2rem;
		background-image: radial-gradient(black, darkgray);
		z-index: 1000;
		transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
	}

	nav {
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
		opacity: 0;
		width: 0;
		transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}

	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		list-style: none;
		text-align: center;
		width: 100%;
	}

	.item {
		margin: 1rem;
	}

	.link {
		&:link,
		&:visited {
			display: inline-block;
			font-size: 2rem;
			font-weight: 600;
			padding: 1rem 2rem;
			color: #fff;
			text-decoration: none;
			background-image: linear-gradient(120deg, transparent 0%, transparent 50%, white 50%);
			background-size: 230%;
			transition: all 0.4s;

			span {
				margin-left: 1.5rem;
				display: inline-block;
			}
		}

		&:hover,
		&:active {
			background-position: 100%;
			color: black;
			transform: translateX(1rem);
		}
	}

	.checkbox.checked ~ .background {
		transform: scale(80);
	}
	.checkbox.checked ~ nav {
		opacity: 1;
		width: 100%;
		z-index: 1500;
	}

	.icon {
		position: relative;
		margin-top: 1.5rem;

		&,
		&::before,
		&::after {
			width: 1.5rem;
			height: 2px;
			background-color: yellow;
			display: inline-block;
		}

		&::before,
		&::after {
			content: '';
			position: absolute;
			left: 0;
			transition: all 0.2s;
		}

		&::before {
			top: -0.5rem;
		}
		&::after {
			top: 0.5rem;
		}
	}

	.button:hover .icon::before {
		top: -0.6rem;
	}

	.button:hover .icon::after {
		top: 0.6rem;
	}

	.checkbox.checked + .button .icon {
		background-color: transparent;
	}

	.checkbox.checked + .button .icon::before {
		top: 0;
		transform: rotate(135deg);
	}

	.checkbox.checked + .button .icon::after {
		top: 0;
		transform: rotate(-135deg);
	}
</style>
