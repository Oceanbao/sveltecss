<script>
	import AnimeGrid from '@/components/AnimeGrid.svelte';
	import CurtailReveal from '@/components/CurtailReveal.svelte';
	import CyberLetters from '@/components/CyberLetters.svelte';
	import ImageSlider from '@/components/ImageSlider.svelte';
	import MagicText from '@/components/MagicText.svelte';
	import MorphingShapes from '@/components/MorphingShapes.svelte';
	import MovingGlow from '@/components/MovingGlow.svelte';
	import NetflixLogo from '@/components/NetflixLogo.svelte';
	import ParallaxMenu from '@/components/ParallaxMenu.svelte';
	import ScatterLetters from '@/components/ScatterLetters.svelte';
	import ShiftingGallery from '@/components/ShiftingGallery.svelte';
	import SwipeCards from '@/components/SwipeCards.svelte';
	import SwipeImages from '@/components/SwipeImages.svelte';
	import ThreeLinks from '@/components/ThreeLinks.svelte';
	import TrailCursor from '@/components/TrailCursor.svelte';
	import TrailImage from '@/components/TrailImage.svelte';
	import TwitchCard from '@/components/TwitchCard.svelte';
	import DownArrows from '../components/DownArrows.svelte';
	import RingForm from '../components/RingForm.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="box">
	<DownArrows />
	<RingForm />
	<NetflixLogo />
	<ImageSlider />
	<MovingGlow />
	<MagicText />
	<TwitchCard />
	<ThreeLinks />
	<AnimeGrid />
	<ParallaxMenu />
	<TrailCursor />
	<SwipeCards />
	<ShiftingGallery />
	<TrailImage />
	<MorphingShapes />
	<CurtailReveal />
	<SwipeImages />
	<ScatterLetters />
	<CyberLetters />
</div>

<style>
	.box {
		display: flex;
		flex-direction: column;
		place-items: center;
	}
</style>
