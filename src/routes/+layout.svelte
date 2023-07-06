<script lang="ts">
	import '@/app.css';
	import ExpandingMenu from '@/components/ExpandingMenu.svelte';

	export let data;

	let links = data.routes
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
