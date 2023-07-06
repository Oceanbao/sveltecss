<p>
	grid-cols-[1fr 4fr 1fr] (Holi-grail can be done using 150px 1fr 150px with row-level span etc.)
</p>

<ul class="grid grid-cols-[1fr_4fr_1fr] gap-4 p-0 text-black">
	<li
		class="border-1 col-span-1 col-start-1 mt-0 mr-2 mb-4 ml-2 rounded border-solid border-slate-200 bg-blue-200 p-2"
	>
		<h2>Card 1</h2>
		<p>col-span-1 (grid-column: span 1 / span 1) col-start-1 (grid-column-start: 1)</p>
	</li>

	<li
		class="border-1 col-span-1 col-start-2 mt-0 mr-2 mb-4 ml-2 rounded border-solid border-slate-200 bg-blue-200 p-2"
	>
		<h2>Card 2</h2>
		<p>col-span-1 (grid-column: span 1 / span 1) col-start-2 (grid-column-start: 2)</p>
	</li>

	<li
		class="border-1 col-span-1 col-start-3 mt-0 mr-2 mb-4 ml-2 rounded border-solid border-slate-200 bg-blue-200 p-2"
	>
		<h2>Card 3</h2>
		<p>col-span-1 (grid-column: span 1 / span 1) col-start-3 (grid-column-start: 3)</p>
	</li>
</ul>

<p>grid-cols-[1fr auto 1fr]</p>
<pre>
  - Auto responsive to content but will expand the entire track (row/col)
  - Auto track will fit its content, as others are `fr`; `auto` track fixed to its content width (item-1 at 320px)
  - Note this affects the entire track (col-2)
  - Even though item-4 on track col-1 row-2 not auto, its fixed height (320px) will expand its track (row-2)
</pre>

<ul class="grid grid-cols-[1fr_auto_1fr] gap-4 p-0 text-black">
	<li class="border-1 mt-0 mr-2 mb-4 ml-2 rounded border-solid border-slate-200 bg-blue-200 p-2">
		<h2>Card 1</h2>
	</li>

	<li
		class="border-1 mt-0 mr-2 mb-4 ml-2 w-80 rounded border-solid border-slate-200 bg-blue-200 p-2"
	>
		<h2>Card 2 (w-80)</h2>
	</li>

	<li class="border-1 mt-0 mr-2 mb-4 ml-2 rounded border-solid border-slate-200 bg-blue-200 p-2">
		<h2>Card 3</h2>
	</li>

	<li
		class="border-1 mt-0 mr-2 mb-4 ml-2 h-80 rounded border-solid border-slate-200 bg-blue-200 p-2"
	>
		<h2>Card 4 (h-80)</h2>
	</li>

	<li class="border-1 mt-0 mr-2 mb-4 ml-2 rounded border-solid border-slate-200 bg-blue-200 p-2">
		<h2>Card 5</h2>
	</li>
</ul>

<p>auto-rows-[minmax(150px, auto)] grid-cols-[1fr 1fr 1fr]</p>
<pre>
  - Auto generally means 'fit content' and useful with minmax of an ideal or min size and responsive to further content addition
</pre>

<ul class="grid auto-rows-[minmax(150px,auto)] grid-cols-[1fr_1fr_1fr] gap-4 p-0 text-black">
	<li
		class="border-1 col-span-1 col-start-1 row-span-1 row-start-1 mt-0 mr-2 mb-4 ml-2 rounded border-solid border-slate-200 bg-blue-200 p-2"
	>
		<h2>Card 1 col-span-1 col-start-1 row-span-1 row-start-1</h2>
		<p>
			This row has min row of 150px but will expand entire track once content grows beyond that, by
			&apos;auto&apos; --------------------------
			---------------------------------------------------------------
			---------------------------------------------------------------
			---------------------------------------------------------------
		</p>
	</li>

	<li
		class="border-1 col-start-2 col-end-4 row-span-2 row-start-2 mt-0 mr-2 mb-4 ml-2 rounded border-solid border-slate-200 bg-blue-200 p-2"
	>
		<h2>Card 2 col-end-4 col-start-2 row-span-2 row-start-2</h2>
	</li>

	<li
		class="border-1 mt-0 mr-2 mb-4 ml-2 w-80 rounded border-solid border-slate-200 bg-blue-200 p-2"
	>
		<h2>Card 3</h2>
	</li>
</ul>

<p>grid-flow-dense grid-cols-[repeat(auto-fill,minmax(250px,1fr))]</p>
<pre>
  - grid-auto-flow (row, col, dense, spares) is useful if source orderless but
  visual dense placement is desired, as in photo gallery or masonary
</pre>

<ul
	class="grid grid-flow-dense grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 p-0 text-black"
>
	<li class="border-1 mt-0 mr-2 mb-4 ml-2 rounded border-solid border-slate-200 bg-blue-200 p-2">
		<h2>Card 1</h2>
	</li>

	<li class="border-1 mt-0 mr-2 mb-4 ml-2 rounded border-solid border-slate-200 bg-blue-200 p-2">
		<h2>Card 2</h2>
	</li>

	<li
		class="border-1 col-[auto/span_2] mt-0 mr-2 mb-4 ml-2 rounded border-solid border-slate-200 bg-blue-200 p-2"
	>
		<h2>Card 3 col-[auto / span 2]</h2>
		<p>I am a landscape card, spanning 2 column tracks</p>
	</li>

	<li class="border-1 mt-0 mr-2 mb-4 ml-2  rounded border-solid border-slate-200 bg-blue-200 p-2">
		<h2>Card 4</h2>
	</li>

	<li
		class="border-1 col-[auto/span_2] mt-0 mr-2 mb-4 ml-2 rounded border-solid border-slate-200 bg-blue-200 p-2"
	>
		<h2>Card 5 col-[auto / span 2]</h2>
		<p>I am a landscape card, spanning 2 column tracks</p>
	</li>

	<li class="border-1 mt-0 mr-2 mb-4 ml-2  rounded border-solid border-slate-200 bg-blue-200 p-2">
		<h2>Card 6</h2>
	</li>

	<li class="border-1 mt-0 mr-2 mb-4 ml-2  rounded border-solid border-slate-200 bg-blue-200 p-2">
		<h2>Card 7</h2>
	</li>
</ul>
