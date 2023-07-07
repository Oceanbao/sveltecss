<section class="flex flex-col gap-4">
	<div class="border-l-4 border-yellow-600 bg-yellow-200 p-4 text-yellow-600" role="alert">
		<p class="font-bold">Danger</p>
		<p>Battery is low, your phone can't take any photo.</p>
	</div>

	<div
		class="relative flex items-center bg-blue-500 px-4 py-3 text-sm font-bold text-white"
		role="alert"
	>
		<svg
			width="20"
			height="20"
			fill="currentColor"
			class="mr-2 h-4 w-4"
			viewBox="0 0 1792 1792"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1216 1344v128q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64v-384h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v576h64q26 0 45 19t19 45zm-128-1152v192q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-192q0-26 19-45t45-19h256q26 0 45 19t19 45z"
			/>
		</svg>
		<p>Something not ideal might be happening.</p>
		<button class="absolute top-0 bottom-0 right-0 px-4 py-3">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="h-6 w-6 text-white"
				viewBox="0 0 1792 1792"
			>
				<path
					d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"
				/>
			</svg>
		</button>
	</div>

	<div class="bg-pink-600 dark:bg-gray-800 px-3 py-3 sm:px-6 lg:px-8">
		<div class="flex flex-wrap items-center justify-between">
			<div class="flex w-0 flex-1 items-center">
				<span class="flex rounded-lg bg-pink-800 p-2 dark:bg-black">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						class="h-6 w-6 text-white"
						viewBox="0 0 1792 1792"
					>
						<path
							d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z"
						/>
					</svg>
				</span>
				<p class="ml-3 truncate font-medium text-white">
					<span class="md:hidden">This site use cookies!</span>
					<span class="hidden md:inline">
						We use cookies! Something not ideal might be happening.
					</span>
				</p>
			</div>
			<div class="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
				<a
					href="#"
					class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-pink-600 shadow-sm hover:bg-pink-50 dark:text-gray-800"
				>
					Learn more
				</a>
			</div>
			<div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
				<button
					type="button"
					class="-mr-1 flex rounded-md p-2 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
				>
					<span class="sr-only">Dismiss</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="h-6 w-6 text-white"
						viewBox="0 0 1792 1792"
					>
						<path
							d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>

	<div class="m-auto w-72 rounded-lg bg-white p-6 shadow-md">
		<div class="relative mx-auto mb-3 -mt-10 w-8">
			<img
				class="-mt-1"
				width="32px"
				src="https://www.iconbolt.com/iconsets/fluent-emoji-flat/cookie.svg"
				alt="cookie"
			/>
		</div>
		<span
			class="text-md text-center mx-auto mb-3 block w-full leading-normal text-gray-800 sm:w-48"
		>
			{`We care about your data, and we'd love to use cookies to make your
          experience better.`}
		</span>
		<div class="flex items-center justify-between">
			<a class="mr-1 text-xs text-gray-400 hover:text-gray-800" href="#"> Privacy Policy </a>
			<div class="w-1/2">
				<button
					type="button"
					class="w-full rounded-lg bg-indigo-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
				>
					See more
				</button>
			</div>
		</div>
	</div>

	<div class="m-auto w-64 rounded-2xl bg-white p-4 shadow-lg dark:bg-gray-800">
		<div class="h-full w-full text-center">
			<div class="flex h-full flex-col justify-between">
				<svg
					width="40"
					height="40"
					class="m-auto mt-4 h-12 w-12 text-indigo-500"
					fill="currentColor"
					viewBox="0 0 1792 1792"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"
					/>
				</svg>
				<p class="mt-4 text-xl font-bold text-gray-800 dark:text-gray-200">Remove card</p>
				<p class="px-6 py-2 text-xs text-gray-600 dark:text-gray-400">
					Are you sure you want to delete this card ?
				</p>
				<div class="mt-8 flex w-full items-center justify-between gap-4">
					<button
						type="button"
						class="w-full rounded-lg bg-indigo-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
					>
						Delete
					</button>
					<button
						type="button"
						class="w-full rounded-lg bg-white py-2 px-4 text-center text-base font-semibold text-indigo-500 shadow-md transition duration-200 ease-in hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	</div>
</section>
