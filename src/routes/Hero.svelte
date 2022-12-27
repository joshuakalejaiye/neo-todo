<script lang="ts">
	import SearchBar from '$components/SearchBar.svelte';
	export let addTodos: (text: string) => void;
</script>

<div
	class="h-96 w-full border-b-2 border-t-2 border-dark-blue bg-light-cream"
>
	<div
		class="flex h-full flex-col items-center justify-center"
	>
		<h1
			class="text-7xl font-semibold text-dark-blue md:text-8xl"
		>
			to-do app
		</h1>
		<SearchBar onAdd={addTodos} />
	</div>
</div>
