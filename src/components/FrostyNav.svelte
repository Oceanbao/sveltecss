<script lang="ts">
	const randHex = () => {
		const randomColor = Math.floor(Math.random() * 16777215).toString(16);
		return `#${randomColor}`;
	};

	const pages = [
		['/', 'Home'],
		['/fixedscroll', 'FixedScroll'],
		['/imageslider', 'ImageSlider'],
		['/movingglow', 'MovingGlow'],
		['/twichcard', 'TwichCard'],
		['/threelinks', 'ThreeLinks'],
		['/animegrid', 'AnimeGrid'],
		['/parallaxmenu', 'ParallaxMenu'],
		['/swipecards', 'SwipeCards'],
		['/shiftinggallery', 'ShiftingGallery'],
		['/trailimages', 'TrailImages'],
		['/curtainreveal', 'CurtainReveal'],
		['/cyberletters', 'CyberLetters'],
		['/3dbubbles', '3DBubbles'],
		['/netflowcard', 'NetFlowCard']
	];
</script>

<nav>
	<ul>
		{#each pages as page (page[1])}
			<li style={`--clr: ${randHex()}`}>
				<a href={page[0]}>{`${page[1]}`}</a>
			</li>
		{/each}
		<li style="--clr: #1da1f2">
			<a data-sveltekit-preload-code="off" data-sveltekit-preload-data="off" href="/layoutdesign"
				>LayoutDesign</a
			>
		</li>
	</ul>
</nav>

<style>
	nav {
		--bg: #222;

		top: 0;
		left: 0;
		position: relative;
		height: 100px;
		background-color: var(--bg);
		backdrop-filter: saturate(180%) blur(20px);
		z-index: 9999;
		display: grid;
		align-items: center;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: space-around;
	}

	li {
		flex: 0 1 40px;
		position: relative;
		list-style: none;
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transition: 0.5s;
	}

	li:hover {
		z-index: 100;
		transform: scale(0.75);
	}

	li::before {
		content: '';
		position: absolute;
		inset: 10px;
		box-shadow: 0 0 0 10px var(--clr), 0 0 0 20px var(--bg), 0 0 0 22px var(--clr);
		transition: 0.5s;
	}

	li:hover::before {
		inset: 0px;
	}

	li::after {
		content: '';
		position: absolute;
		inset: 0;
		background: var(--bg);
		transform: rotate(45deg);
	}

	a {
		position: relative;
		text-decoration: none;
		color: var(--clr);
		z-index: 10;
		font-size: 1rem;
		transition: 0.5s;
	}

	li:hover a {
		font-size: 3rem;
		filter: drop-shadow(0 0 20px var(--clr)) drop-shadow(0 0 40px var(--clr))
			drop-shadow(0 0 60px var(--clr));
	}
</style>
