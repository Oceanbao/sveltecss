<!-- Striped background -->
<div class="flex max-w-3xl flex-wrap gap-4">
	<div class="h-32 w-32" style="background: linear-gradient(#fb3, #58a)">
		{`linear-gradient(color1, color2)`}
	</div>

	<div class="h-32 w-32" style="background: linear-gradient(#fb3 20%, #58a 80%)">
		{`linear-gradient(color1 20%, color2 80%)`}
	</div>

	<!-- size of two stripes to 15px height each -->
	<div
		class="h-32 w-32"
		style="
					background: linear-gradient(#fb3 50%, #58a 50%);
					background-size: 100% 30px;
				"
	>
		{`linear-gradient(color1 50% color2 50%) + background-size: 100% 30px`}
	</div>

	<!-- size of two stripes to 15px height each -->
	<div
		class="h-32 w-32"
		style="
					background: linear-gradient(#fb3 30%, #58a 30%);
					background-size: 100% 30px;
				"
	>
		{`linear-gradient(color1 30% color2 30%) + background-size: 100% 30px`}
	</div>

	<!-- if second color position at 0, its position will be adjusted by browser -->
	<!-- to equate that of first's stop (maintenance) (same as previous) -->
	<div
		class="h-32 w-32"
		style="
					background: linear-gradient(#fb3 30%, #58a 0);
					background-size: 100% 30px;
				"
	>
		{`linear-gradient(color1 30% color2 0) + background-size: 100% 30px`}
	</div>

	<!-- if second color position at 0, its position will be adjusted by browser -->
	<!-- to equate that of first's stop (maintenance) (same as previous) -->
	<div
		class="h-32 w-32"
		style="
					background: linear-gradient(#fb3 33.3%, #58a 0, #58a 66.6%, yellowgreen 0);
					background-size: 100% 45px;
				"
	>
		{`linear-gradient(color1 33.3%, color2 0, color2 66.6%, color3 0) + background-size: 100% 45px`}
	</div>

	<!-- vertical, to right or 90deg -->
	<div
		class="h-32 w-32"
		style="
					background: linear-gradient(to right, #fb3 50%, #58a 0);
					background-size: 30px 100%;
				"
	>
		{`linear-gradient(to right, c1 50%, c1 0) + background-size: 30px 100%`}
	</div>

	<!-- diagonal, 45deg -->
	<div
		class="h-32 w-32"
		style="
					background: linear-gradient(45deg, #fb3 50%, #58a 0);
					background-size: 30px 30px;
				"
	>
		{`linear-gradient(45deg, c1 50%, c1 0) + background-size: 30px 30px`}
	</div>

	<!-- diagonal, 45deg, repeated -->
	<div
		class="h-32 w-32"
		style="
					background: linear-gradient(45deg, #fb3 25%, #58a 0, #58a 50%, #fb3 0, #fb3 75%, #58a 0);
					background-size: 42.42641px 42.42641px;
				"
	>
		{` linear-gradient(45deg, #fb3 25%, #58a 0, #58a 50%, #fb3 0, #fb3 75%, #58a 0) + background-size: 42.42641px 42.42641px`}
	</div>

	<div
		class="h-32 w-32"
		style="
				  background: repeating-linear-gradient(45deg, #fb3 25%, #58a 0, #58a 50%, #fb3 0, #fb3 75%, #58a 0);
				"
	>
		{`repeating-linear-gradient(45deg, #fb3 25%, #58a 0, #58a 50%, #fb3 0, #fb3 75%, #58a 0)`}
	</div>

	<div
		class="h-32 w-32"
		style="
					background: repeating-linear-gradient(45deg, #fb3, #58a 15px, #58a 0, #58a 30px);
				"
	>
		{`repeating-linear-gradient(45deg, #fb3, #58a 15px, #58a 0, #58a 30px`}
	</div>

	<div
		class="h-32 w-32"
		style="
					background: repeating-linear-gradient(45deg, #fb3, #58a 25%, #58a 0, #58a 50%);
					background-size: 42.42641px 42.42641px;
				"
	>
		{`repeating-linear-gradient(45deg, #fb3, #58a 25%, #58a 0, #58a 50%); background-size: 42.42641px 42.42641px`}
	</div>

	<!-- flexible subtle stripes via background-image with single base color -->
	<div
		class="h-32 w-32"
		style="
					background: #58a;
					background-image:
						repeating-linear-gradient(30deg, hsla(0,0%,100%,.1), hsla(0,0%,100%,.1) 15px, transparent 0, transparent 30px);
				"
	>
		{`background: c1; repeating-linear-gradient(30deg, hsla(0,0%,100%,.1), hsla(0,0%,100%,.1) 15px, transparent 0, transparent 30px)`}
	</div>
</div>
