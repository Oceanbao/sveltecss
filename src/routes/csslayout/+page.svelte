<script lang="ts">
	import FlexAlignContent from './FlexAlignContent.svelte';
	import FlexAuto from './FlexAuto.svelte';
	import FlexAutoMargin from './FlexAutoMargin.svelte';
	import FlexCard from './FlexCard.svelte';
	import FlexItems from './FlexItems.svelte';
	import GridCard from './GridCard.svelte';
	import GridFrAutoMinMax from './GridFrAutoMinMax.svelte';
	import GridItems from './GridItems.svelte';
	import GridResponsive from './GridResponsive.svelte';
</script>

<!-- Float  -->
<div class="w-[400px] text-black">
	<div class="float-left w-[200px] border-2 border-black">Float left and out of block-flow.</div>
	<img
		src="/laughing.png"
		alt="laughin man logo"
		class="float-left h-14 w-14"
		style="shape-outside: circle(50%);"
	/>
	<p class="bg-[#e5dbff]">
		Inside container and in flow. Text wrap around the float but background extends behind it.
	</p>
</div>

<hr class="my-4 h-4 border-t-4 border-solid border-t-black" />

<!-- Absolute position -->
<div class="relative h-[400px] w-[400px] border-2 border-black bg-blue-400">
	Relative parent
	<div class="absolute top-2 right-2 w-[200px]">Absolute position child (top 2 right 2)</div>
	<div class="fixed top-24 right-14 w-48 bg-blue-300 text-black">
		Fixed position child (top 24 right 14)
	</div>
</div>

<hr class="my-4 h-4 border-t-4 border-solid border-t-black" />

<!-- Multi column (tailwind either count or width) -->
<div class="columns-3">
	This built-in responsiveness is a key part of multiple-column layout, and it was the first
	specification in which we started to see this kind of behavior. With column-width, we aren’t able
	to dictate an exact pixel width. There is tolerance for the possibility of a container that is
	flexibly sized. This specification is the only method we have that takes a chunk of continuous
	content and arranges it into a set of columns. Other methods act on the child elements, rather
	than flowing content regardless of what it contains. One way I like to use this specification is
	in creating a more compact view of interface elements, such as a collection of checkboxes. By
	giving their container a column-width, I can collapse a long list into something that takes up far
	less room and requires much less scrolling. Using column-width means that the items display in
	two, three, or four columns depending on available space, without the need to control that with
	media queries. This is a useful specification. It does a few simple things that can be very
	helpful if put to the right use. Try not to forget about it as a possibility when choosing which
	layout methods to use.
</div>

<hr class="my-4 h-4 border-t-4 border-solid border-t-black" />

<!-- Flex cards with custom column -->
<FlexCard columns={6} />

<hr class="my-4 h-4 border-t-4 border-solid border-t-black" />

<!-- Grid Card -->
<GridCard num={5} />

<hr class="my-4 h-4 border-t-4 border-solid border-t-black" />

<!-- Flex Items -->
<FlexItems />

<hr class="my-4 h-4 border-t-4 border-solid border-t-black" />

<!-- Flex Align Content -->
<FlexAlignContent num={3} />
<FlexAlignContent num={6} />

<hr class="my-4 h-4 border-t-4 border-solid border-t-black" />

<!-- Flex Auto Margin Trick -->
<FlexAutoMargin num={5} />

<hr class="my-4 h-4 border-t-4 border-solid border-t-black" />

<!-- Grid Items -->
<GridItems />

<hr class="my-4 h-4 border-t-4 border-solid border-t-black" />

<!-- Grid Responsive -->
<GridResponsive num={5} />

<hr class="my-4 h-4 border-t-4 border-solid border-t-black" />

<!-- Flex Auto -->
<FlexAuto num={5} />

<hr class="my-4 h-4 border-t-4 border-solid border-t-black" />

<!-- Grid Fr and Auto and AutoMinMax -->
<GridFrAutoMinMax />
