<script lang="ts">
	import '@/app.css';
	import ExpandingMenu from '@/components/ExpandingMenu.svelte';

	let routes = [
		'designui',
		'3dbubbles',
		'animegrid',
		'cssBits',
		'csslayout',
		'curtainreveal',
		'cyberletters',
		'fixedscroll',
		'imageslider',
		'layoutdesign',
		'movingglow',
		'netflowcard',
		'parallaxmenu',
		'shiftinggallery',
		'stickybg',
		'swipecards',
		'swipeimage',
		'tailwind',
		'threelinks',
		'trailimages',
		'twichcard'
	];

	let links = routes
		.map((dir) => ({ href: `/${dir}`, text: dir }))
		.concat({
			href: '/',
			text: 'home'
		});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
		integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
</svelte:head>

<ExpandingMenu {links} />

<slot />
