<div class="flex gap-4">
	<div
		class="h-32 w-32"
		style="
			background: hsl(210, 13%, 60%);
			color: hsl(210, 13%, 30%);
			text-shadow: 0 1px 1px hsla(0,0%,100%,.8);
		"
	>
		{`The only way to get rid of a temptation is to yield to it.`}
	</div>
	<div
		class="h-32 w-32"
		style="
			background: hsl(210, 13%, 40%);
			color: hsl(210, 13%, 75%);
			text-shadow: 0 1px 1px hsla(0,0%,100%,.8);
		"
	>
		{`The only way to get rid of a temptation is to yield to it.`}
	</div>
	<div
		class="flex h-32 w-32 items-center justify-center bg-[#201] text-3xl text-[#ffc] duration-300 hover:[text-shadow:0_0_.1em,_0_0_.3em]"
	>
		{`Glow`}
	</div>
	<div
		class="flex h-32 w-32 items-center justify-center text-3xl text-white"
		style="
			background: hsl(0,50%,45%);
			text-shadow: 
              1px 1px black, 2px 2px black,
             3px 3px black, 4px 4px black,
             5px 5px black, 6px 6px black,
             7px 7px black, 8px 8px black;
        "
	>
		{`CSS3d`}
	</div>
	<div class="flex h-32 w-32 items-center justify-center">
		<svg
			viewBox="0 0 100 100"
			width="100"
			height="100"
			style="
				fill: currentcolor;
				height: auto;
				max-width: 66vmin;
				transform-origin: center;
				width: 66%;
			"
		>
			<defs>
				<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" id="circle" />
			</defs>
			<text font-size="14" class="rotating-svg">
				<textPath xlink:href="#circle"> circular reasoning works because </textPath>
			</text>
		</svg>
	</div>
</div>

<style>
	.rotating-svg {
		transform-origin: 50% 50%;
		animation-name: rotatingSvg;
		animation-duration: 10s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}

	@keyframes rotatingSvg {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
