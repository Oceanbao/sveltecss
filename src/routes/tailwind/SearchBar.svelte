<script lang="ts">
	import { createDialog } from 'svelte-headlessui';
	import { createCombobox } from 'svelte-headlessui';
	import Transition from 'svelte-transition';

	const dialog = createDialog({ label: '' });

	function keydownHandler(e: KeyboardEvent) {
		if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
			$dialog.expanded ? dialog.close() : dialog.open();
		}
	}

	const people = [
		{ name: 'Wade Cooper' },
		{ name: 'Arlene Mccoy' },
		{ name: 'Devon Webb' },
		{ name: 'Tom Cook' },
		{ name: 'Tanya Fox' },
		{ name: 'Hellen Schmidt' }
	];

	const comboBox = createCombobox({ label: 'Actions', selected: people[0] });

	$: filtered = people.filter((person) =>
		person.name
			.toLowerCase()
			.replace(/\s+/g, '')
			.includes($comboBox.filter.toLowerCase().replace(/\s+/g, ''))
	);
</script>

<svelte:window on:keydown={keydownHandler} />

<Transition show={$dialog.expanded}>
	<!-- Backdrop -->
	<Transition
		enter="ease-out duration-300"
		enterFrom="opacity-0"
		enterTo="opacity-100"
		leave="ease-in duration-200"
		leaveFrom="opacity-100"
		leaveTo="opacity-0"
	>
		<div class="fixed inset-0 bg-gray-500/75" on:click={dialog.close} on:keypress={dialog.close} />
	</Transition>

	<div class="fixed inset-0 overflow-y-auto">
		<div class="flex min-h-full items-center justify-center p-4 text-center">
			<Transition
				enter="ease-out duration-300"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<div
					class="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
					use:dialog.modal
				>
					<div class="relative mt-1">
						<div
							class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width={1.5}
								stroke="currentColor"
								class="mr-4 h-6 w-6 text-gray-500"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
								/>
							</svg>
							<input
								use:comboBox.input
								class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
								placeholder="Search..."
								value={$comboBox.selected.name}
							/>
						</div>

						<Transition
							show={$comboBox.expanded}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
							on:after-leave={() => comboBox.reset()}
						>
							<ul
								use:comboBox.items
								class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
							>
								{#each filtered as value}
									{@const active = $comboBox.active === value}
									{@const selected = $comboBox.selected === value}
									<li
										class="relative cursor-default select-none py-2 pl-10 pr-4 {active
											? 'bg-teal-600 text-white'
											: 'text-gray-900'}"
										use:comboBox.item={{ value }}
									>
										<span class="block truncate {selected ? 'font-medium' : 'font-normal'}"
											>{value.name}</span
										>
										{#if selected}
											<span
												class="absolute inset-y-0 left-0 flex items-center pl-3 {active
													? 'text-white'
													: 'text-teal-600'}"
											/>
										{/if}
									</li>
								{:else}
									<li class="relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900">
										<span class="block truncate font-normal">Nothing found</span>
									</li>
								{/each}
							</ul>
						</Transition>
					</div>
				</div></Transition
			>
		</div>
	</div>
</Transition>
