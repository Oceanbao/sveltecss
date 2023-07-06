<script lang="ts">
	export let num: number;
</script>

<p>Flex grow/shrink - 2:1 ratio sizing (self 2 0 0, others 1 0 0)</p>

<ul class="flex list-none p-0 text-black">
	<li
		class="border-1 mt-0 mr-2 mb-4 ml-2 flex-[2_0_0] rounded border-solid border-slate-200 bg-blue-200 p-2"
	>
		<h2>Card 1 (flex: 2 0 0)</h2>
	</li>

	<li
		class="border-1 mt-0 mr-2 mb-4 ml-2 flex-[1_0_0] rounded border-solid border-slate-200 bg-blue-200 p-2"
	>
		<h2>Card 2 (flex: 1 0 0)</h2>
	</li>

	<li
		class="border-1 mt-0 mr-2 mb-4 ml-2 flex-[0_0_0] rounded border-solid border-slate-200 bg-blue-200 p-2"
	>
		<h2>Card 2 (flex: 0 0 0)</h2>
	</li>

	<li
		class="border-1 mt-0 mr-2 mb-4 ml-2 flex-[3_0_0] rounded border-solid border-slate-200 bg-blue-200 p-2"
	>
		<h2>Card 3 (flex: 3 0 0)</h2>
	</li>
</ul>

<p>Flex auto - flex: 1 1 auto (Tailwind default)</p>

<ul class="flex list-none p-0 text-black">
	{#each [...Array(num).keys()] as index}
		<li
			class="border-1 mt-0 mr-2 mb-4 ml-2 flex-auto rounded border-solid border-slate-200 bg-blue-200 p-2"
		>
			<h2>Card {index + 1}</h2>
			{#if index === 1}
				<p>
					ART WORDS plastic arts 造型艺术 graphic arts 形象艺术 Fine Arts 美术 art gallery
					画廊,美术馆 salon 沙龙 exhibition 展览 collection 收藏 author 作者 style 风格
				</p>
			{/if}
			{#if index === 3}
				<p>
					ART WORDS plastic arts 造型艺术 graphic arts 形象艺术 Fine Arts 美术 art gallery
					画廊,美术馆 salon 沙龙 exhibition 展览 collection 收藏 author 作者 style 风格 ART WORDS
					plastic arts 造型艺术 graphic arts 形象艺术 Fine Arts 美术 art gallery 画廊,美术馆 salon
					沙龙 exhibition 展览 collection 收藏 author 作者 style 风格
				</p>
			{/if}
		</li>
	{/each}
</ul>
