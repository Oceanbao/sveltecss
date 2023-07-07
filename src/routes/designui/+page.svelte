<script lang="ts">
	import Alerts from './Alerts.svelte';
	import Borders from './Borders.svelte';
	import Buttons from './Buttons.svelte';
	import Dashboard from './Dashboard.svelte';
	import LetterEffects from './LetterEffects.svelte';
	import StripedBackground from './StripedBackground.svelte';

	const LongText =
		'Morbi rhoncus in justo quis ornare. Etiam fermentum massa in metus pretium commodo. Nullam eros quam, vulputate at nunc a, mattis porta diam. Morbi ultrices nisi non urna tristique, eget sagittis mauris mollis. Proin varius, felis vel tristique pretium';
</script>

<main class="gap-4 flex flex-col">
	<!-- Simple Button -->
	<div class="h-24 w-48">
		<button
			class="m-4 min-h-min rounded-lg bg-gradient-to-r from-indigo-500 to-sky-500 px-4 py-4 text-2xl font-bold text-white shadow-lg shadow-indigo-500/40"
		>
			Download
		</button>
	</div>

	<!-- Responsive Text -->
	<article class="responsive-text">
		{LongText}
	</article>

	<Buttons />

	<Alerts />

	<Dashboard />

	<Borders />

	<StripedBackground />

	<LetterEffects />
</main>

<style>
	.responsive-text {
		font-size: clamp(1rem, 0.75rem + 1.5vw, 2rem);
	}
</style>
