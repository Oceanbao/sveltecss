<script>
	import MagicText from '@/components/MagicText.svelte';
	import MorphingShapes from '@/components/MorphingShapes.svelte';
	import NetflixLogo from '@/components/NetflixLogo.svelte';
	import PopupForm from '@/components/PopupForm.svelte';
	import ScatterLetters from '@/components/ScatterLetters.svelte';
	import TrailCursor from '@/components/TrailCursor.svelte';
	import DownArrows from '../components/DownArrows.svelte';
	import RingForm from '../components/RingForm.svelte';
	import RollingText from '@/components/RollingText.svelte';
	import ShinyText from '@/components/ShinyText.svelte';
	import FlipCard from '@/components/FlipCard.svelte';
</script>

<div class="box">
	<RollingText />
	<ShinyText />
	<FlipCard />
	<DownArrows />
	<RingForm />
	<NetflixLogo />
	<MagicText />
	<TrailCursor />
	<MorphingShapes />
	<ScatterLetters />
	<PopupForm />
</div>

<style>
	.box {
		display: flex;
		flex-direction: column;
		place-items: center;
	}
</style>
