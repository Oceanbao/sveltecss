<script lang="ts">
	let open = false;

	function toggleOpen() {
		open = !open;
	}
</script>

<section class="flex place-items-center gap-4">
	<button
		type="button"
		class="flex items-center justify-center rounded-lg bg-indigo-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
	>
		<svg
			width="20"
			height="20"
			fill="currentColor"
			class="mr-2 animate-spin"
			viewBox="0 0 1792 1792"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"
			/>
		</svg>
		loading
	</button>

	<button
		type="button"
		class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
	>
		<svg
			width="20"
			height="20"
			fill="currentColor"
			viewBox="0 0 1792 1792"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"
			/>
		</svg>
	</button>

	<div class="flex items-center">
		<button
			type="button"
			class="flex items-center rounded-l-md border-t border-b border-l bg-white px-4 py-2 text-base font-medium text-black hover:bg-gray-100"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				class="mr-2 h-4 w-4"
				fill="currentColor"
				viewBox="0 0 1792 1792"
			>
				<path
					d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
				/>
			</svg>
			Star
		</button>
		<button
			type="button"
			class="rounded-r-md border bg-white px-4 py-2 text-base font-medium text-black hover:bg-gray-100"
		>
			654
		</button>
	</div>

	<button
		class="rounded-full border-2 border-gray-900 px-6 py-2 uppercase transition duration-200 ease-in hover:bg-gray-800 hover:text-white focus:outline-none"
	>
		Play
	</button>

	<div class="relative inline-block text-left">
		<div>
			<button
				type="button"
				class=" flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-500"
				id="options-menu"
				on:click={() => toggleOpen()}
			>
				Pay with
				<svg
					width="20"
					height="20"
					fill="currentColor"
					viewBox="0 0 1792 1792"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"
					/>
				</svg>
			</button>
		</div>
		<div
			class="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800"
			style="display: {open ? 'block' : 'none'}"
		>
			<div
				class="divide-y divide-gray-100 py-1"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="options-menu"
			>
				<a
					href="#"
					class="text-md flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
					role="menuitem"
				>
					<svg
						width="20"
						height="20"
						fill="currentColor"
						class="mr-2 h-6 w-6 flex-shrink-0 dark:text-white"
						viewBox="0 0 2304 1792"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1597 903q0 69-21 106-19 35-52 35-23 0-41-9v-224q29-30 57-30 57 0 57 122zm438-36h-110q6-98 56-98 51 0 54 98zm-1559 135q0-59-33-91.5t-101-57.5q-36-13-52-24t-16-25q0-26 38-26 58 0 124 33l18-112q-67-32-149-32-77 0-123 38-48 39-48 109 0 58 32.5 90.5t99.5 56.5q39 14 54.5 25.5t15.5 27.5q0 31-48 31-29 0-70-12.5t-72-30.5l-18 113q72 41 168 41 81 0 129-37 51-41 51-117zm295-215l19-111h-96v-135l-129 21-18 114-46 8-17 103h62v219q0 84 44 120 38 30 111 30 32 0 79-11v-118q-32 7-44 7-42 0-42-50v-197h77zm316 25v-139q-15-3-28-3-32 0-55.5 16t-33.5 46l-10-56h-131v471h150v-306q26-31 82-31 16 0 26 2zm37 335h150v-471h-150v471zm622-249q0-122-45-179-40-52-111-52-64 0-117 56l-8-47h-132v645l150-25v-151q36 11 68 11 83 0 134-56 61-65 61-202zm-468-348q0-33-23-56t-56-23-56 23-23 56 23 56.5 56 23.5 56-23.5 23-56.5zm898 357q0-113-48-176-50-64-144-64-96 0-151.5 66t-55.5 180q0 128 63 188 55 55 161 55 101 0 160-40l-16-103q-57 31-128 31-43 0-63-19-23-19-28-66h248q2-14 2-52zm128-651v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z"
						/>
					</svg>
					<span class="flex flex-col">
						<span>Stripe</span>
						<span class="text-xs text-gray-400"> pay with your stripe account </span>
					</span>
				</a>
				<a
					href="#"
					class="text-md flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
					role="menuitem"
				>
					<svg
						width="20"
						height="20"
						fill="currentColor"
						class="mr-2 h-6 w-6 flex-shrink-0 dark:text-white"
						viewBox="0 0 2304 1792"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1119 341q-128-85-281-85-103 0-197.5 40.5t-162.5 108.5-108.5 162-40.5 197q0 104 40.5 198t108.5 162 162 108.5 198 40.5q153 0 281-85-131-107-178-265.5t.5-316.5 177.5-265zm33 24q-126 99-172 249.5t-.5 300.5 172.5 249q127-99 172.5-249t-.5-300.5-172-249.5zm33-24q130 107 177.5 265.5t.5 317-178 264.5q128 85 281 85 104 0 198-40.5t162-108.5 108.5-162 40.5-198q0-103-40.5-197t-108.5-162-162.5-108.5-197.5-40.5q-153 0-281 85zm741 722h7v-3h-17v3h7v17h3v-17zm29 17h4v-20h-5l-6 13-6-13h-5v20h3v-15l6 13h4l5-13v15zm-8 440v2h-5v-3h5v1zm0 9h3l-4-5h2l1-1q1-1 1-3t-1-3l-1-1h-9v13h3v-5h1zm-1262-68q0-19 11-31t30-12q18 0 29 12.5t11 30.5q0 19-11 31t-29 12q-19 0-30-12t-11-31zm473-44q30 0 35 32h-70q5-32 35-32zm356 44q0-19 11-31t29-12 29.5 12.5 11.5 30.5q0 19-11 31t-30 12q-18 0-29-12t-11-31zm272 0q0-18 11.5-30.5t29.5-12.5 29.5 12.5 11.5 30.5q0 19-11.5 31t-29.5 12-29.5-12.5-11.5-30.5zm158 72q-2 0-4-1-1 0-3-2t-2-3q-1-2-1-4 0-3 1-4 0-2 2-4l1-1q2 0 2-1 2-1 4-1 3 0 4 1l4 2 2 4v1q1 2 1 3l-1 1v3l-1 1-1 2q-2 2-4 2-1 1-4 1zm-1345-4h30v-85q0-24-14.5-38.5t-39.5-15.5q-32 0-47 24-14-24-45-24-24 0-39 20v-16h-30v135h30v-75q0-36 33-36 30 0 30 36v75h29v-75q0-36 33-36 30 0 30 36v75zm166 0h29v-135h-29v16q-17-20-43-20-29 0-48 20t-19 51 19 51 48 20q28 0 43-20v17zm178-41q0-34-47-40l-14-2q-23-4-23-14 0-15 25-15 23 0 43 11l12-24q-22-14-55-14-26 0-41 12t-15 32q0 33 47 39l13 2q24 4 24 14 0 17-31 17-25 0-45-14l-13 23q25 17 58 17 29 0 45.5-12t16.5-32zm130 34l-8-25q-13 7-26 7-19 0-19-22v-61h48v-27h-48v-41h-30v41h-28v27h28v61q0 50 47 50 21 0 36-10zm86-132q-29 0-48 20t-19 51q0 32 19.5 51.5t49.5 19.5q33 0 55-19l-14-22q-18 15-39 15-34 0-41-33h101v-12q0-32-18-51.5t-46-19.5zm159 0q-23 0-35 20v-16h-30v135h30v-76q0-35 29-35 10 0 18 4l9-28q-9-4-21-4zm30 71q0 31 19.5 51t52.5 20q29 0 48-16l-14-24q-18 13-35 12-18 0-29.5-12t-11.5-31 11.5-31 29.5-12q19 0 35 12l14-24q-20-16-48-16-33 0-52.5 20t-19.5 51zm245 68h30v-135h-30v16q-15-20-42-20-29 0-48.5 20t-19.5 51 19.5 51 48.5 20q28 0 42-20v17zm133-139q-23 0-35 20v-16h-29v135h29v-76q0-35 29-35 10 0 18 4l9-28q-8-4-21-4zm140 139h29v-190h-29v71q-15-20-43-20t-47.5 20.5-19.5 50.5 19.5 50.5 47.5 20.5q29 0 43-20v17zm78-20l-2 1h-3q-2 1-4 3-3 1-3 4-1 2-1 6 0 3 1 5 0 2 3 4 2 2 4 3t5 1q4 0 6-1 0-1 2-2l2-1q1-1 3-4 1-2 1-5 0-4-1-6-1-1-3-4 0-1-2-2l-2-1q-1 0-3-.5t-3-.5zm360-1253v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z"
						/>
					</svg>
					<span class="flex flex-col">
						<span>Mastercard</span>
						<span class="text-xs text-gray-400"> pay with your mastercard card </span>
					</span>
				</a>
				<a
					href="#"
					class="text-md flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
					role="menuitem"
				>
					<svg
						width="20"
						height="20"
						fill="currentColor"
						class="mr-2 h-6 w-6 flex-shrink-0 dark:text-white"
						viewBox="0 0 2304 1792"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M745 906q0 37-25.5 61.5t-62.5 24.5q-29 0-46.5-16t-17.5-44q0-37 25-62.5t62-25.5q28 0 46.5 16.5t18.5 45.5zm785-149q0 42-22 57t-66 15l-32 1 17-107q2-11 13-11h18q22 0 35 2t25 12.5 12 30.5zm351 149q0 36-25.5 61t-61.5 25q-29 0-47-16t-18-44q0-37 25-62.5t62-25.5q28 0 46.5 16.5t18.5 45.5zm-1368-171q0-59-38.5-85.5t-100.5-26.5h-160q-19 0-21 19l-65 408q-1 6 3 11t10 5h76q20 0 22-19l18-110q1-8 7-13t15-6.5 17-1.5 19 1 14 1q86 0 135-48.5t49-134.5zm309 312l41-261q1-6-3-11t-10-5h-76q-14 0-17 33-27-40-95-40-72 0-122.5 54t-50.5 127q0 59 34.5 94t92.5 35q28 0 58-12t48-32q-4 12-4 21 0 16 13 16h69q19 0 22-19zm447-263q0-5-4-9.5t-9-4.5h-77q-11 0-18 10l-106 156-44-150q-5-16-22-16h-75q-5 0-9 4.5t-4 9.5q0 2 19.5 59t42 123 23.5 70q-82 112-82 120 0 13 13 13h77q11 0 18-10l255-368q2-2 2-7zm380-49q0-59-38.5-85.5t-100.5-26.5h-159q-20 0-22 19l-65 408q-1 6 3 11t10 5h82q12 0 16-13l18-116q1-8 7-13t15-6.5 17-1.5 19 1 14 1q86 0 135-48.5t49-134.5zm309 312l41-261q1-6-3-11t-10-5h-76q-14 0-17 33-26-40-95-40-72 0-122.5 54t-50.5 127q0 59 34.5 94t92.5 35q29 0 59-12t47-32q0 1-2 9t-2 12q0 16 13 16h69q19 0 22-19zm218-409v-1q0-14-13-14h-74q-11 0-13 11l-65 416-1 2q0 5 4 9.5t10 4.5h66q19 0 21-19zm-1784 134q-5 35-26 46t-60 11l-33 1 17-107q2-11 13-11h19q40 0 58 11.5t12 48.5zm1912-516v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z"
						/>
					</svg>
					<span class="flex flex-col">
						<span>Paypal</span>
						<span class="text-xs text-gray-400"> pay with your paypal account </span>
					</span>
				</a>
			</div>
		</div>
	</div>
</section>
