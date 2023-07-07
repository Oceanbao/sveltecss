<section class="flex gap-4 flex-wrap">
	<!-- Transparent border -->
	<div class="flex h-80 w-80 bg-indigo-600">
		<div
			class="border-[20px] border-solid border-yellow-500/50 text-justify hyphens-auto m-auto h-32 w-32 text-black bg-white bg-clip-padding"
		>
			Semi-transparent borders
		</div>
	</div>
	<!-- Border Shadow -->
	<div class="m-auto h-48 w-64 bg-[yellowgreen] fake-border">
		Faked border by box-shadow 4th param 'spread radius', making shadow larger or smaller; outter
		'border' stacked by second comma-split item
	</div>
	<div class="m-auto h-80 w-80 positioned-background" />

	<!-- Border image -->
	<div
		class="h-64 w-64 p-4"
		style="
					border: 2em solid transparent;
					background: linear-gradient(white, white), url('https://images.unsplash.com/photo-1514186077719-5f31a164c12e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2831&q=80');
					background-size: cover;
					background-clip: padding-box, border-box;
					background-origin: border-box;
				"
	>
		{`I have a nice border image around`}
	</div>

	<!-- control thickness of border -->
	<!-- control width of stripes -->
	<!-- backgroundSize: '30% 30%', -->
	<div
		class="h-32 w-64 p-4"
		style="
					border: 16px solid transparent;
					background: linear-gradient(white, white) padding-box,
            repeating-linear-gradient(-45deg,
              red 0, red 12.5%,
              transparent 0, transparent 25%,
              #58a 0, #58a 37.5%,
              transparent 0, transparent 50%)
              0 / 5em 5em;
				"
	>
		{`My border is reminiscent of vintage envelopes`}
	</div>

	<div class="h-32 w-64 p-4 ants-border">
		{`My border is reminiscent of vintage envelopes`}
	</div>

	<!-- Clipped border -->
	<div
		class="h-32 w-64 p-4"
		style="
        border-top: 0.2em solid transparent;
        border-image:
          100% 0 0 linear-gradient(90deg, currentColor 4em, transparent 0);
        padding-top: 1em;
      "
	>
		1. This is a footnote.
	</div>

	<!-- Curved border -->
	<div class="curved-border">Focus on my border</div>

	<!-- Folded border -->
	<div class="folded-corder">
		<blockquote>
			The only way to get rid of...
			<footer>
				- <cite>Oscar Wilde, The Picture of Dorian Gray</cite>
			</footer>
		</blockquote>
	</div>

	<!-- Tinted image -->
	<img
		width="320px"
		height="240px"
		src="https://images.unsplash.com/photo-1514186077719-5f31a164c12e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2831&q=80"
		alt="sapporo"
		class="tinted-image"
	/>

	<!-- Underline by background -->
	<div class="h-32 w-64">
		The only way to{` `}
		<span class="underlined">get rid of a temptation is to yield to it.</span>
		{` `}
		<span class="underlined-dotted">Or else you will onday grow the monster inside.</span>
	</div>
</section>

<style>
	.fake-border {
		box-shadow: 0 0 0 10px #655, 0 0 0 15px deeppink, 0 2px 5px 15px rgba(0, 0, 0, 0.6);
		border-radius: 1rem;
	}
	.positioned-background {
		background: url('https://images.unsplash.com/photo-1514186077719-5f31a164c12e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2831&q=80')
			no-repeat 100% 100% / 50% #58a;
		background-position: calc(100% - 40px) calc(100% - 20px);
		background-origin: content-box;
	}

	.ants-border {
		border: 16px solid transparent;
		background: linear-gradient(white, white) padding-box,
			repeating-linear-gradient(
					-45deg,
					red 0,
					red 12.5%,
					transparent 0,
					transparent 25%,
					#58a 0,
					#58a 37.5%,
					transparent 0,
					transparent 50%
				)
				0 / 5em 5em;
		animation: ants 12s linear infinite;
	}

	@keyframes ants {
		to {
			background-position: 100%;
		}
	}

	.curved-border {
		color: white;
		padding: 2em;
		width: 480px;
		height: 120px;
		background: #58a;
		background: radial-gradient(circle at top left, transparent 20px, #58a 0) top left,
			radial-gradient(circle at top right, transparent 20px, #58a 0) top right,
			radial-gradient(circle at bottom right, transparent 20px, #58a 0) bottom right,
			radial-gradient(circle at bottom left, transparent 20px, #58a 0) bottom left;
		background-size: 50% 50%;
		background-repeat: no-repeat;
	}

	.folded-corder {
		position: relative;
		padding: 2em;
		text-align: center;
		color: white;
		background: #58a;
		background: linear-gradient(-150deg, transparent 1.5em, #58a 0);
		border-radius: 0.5em;
	}
	.folded-corder::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		background: linear-gradient(
				to left bottom,
				transparent 50%,
				rgba(0, 0, 0, 0.2) 0,
				rgba(0, 0, 0, 0.4)
			)
			100% 0 no-repeat;
		width: 1.73em;
		height: 3em;
		transform: translateY(-1.3em) rotate(-30deg);
		transform-origin: bottom right;
		border-bottom-left-radius: inherit;
		box-shadow: -0.2em 0.2em 0.3em -0.1em rgba(0, 0, 0, 0.15);
	}

	.tinted-image {
		transition: 0.5s filter;
		filter: sepia() saturate(4) hue-rotate(295deg);
	}
	.tinted-image:hover,
	.tinted-image:focus {
		filter: none;
	}

	.underlined {
		background: linear-gradient(90deg, gray 66%, transparent 0) repeat-x;
		background-size: 0.2em 2px;
		background-position: 0 1em;
		text-shadow: 0.05em 0 white, -0.05em 0 white;
	}
	.underlined-dotted {
		background: linear-gradient(gray, gray) no-repeat;
		background-size: 100% 1px;
		background-position: 0 1.15em;
		text-shadow: 0.05em 0 white, -0.05em 0 white;
	}
</style>
