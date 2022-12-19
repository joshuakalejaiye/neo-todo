<script lang="ts">
	import SearchBar from '$components/SearchBar.svelte';
	export let addTodos: (text: string) => void;
</script>

<div class="h-96 bg-light-cream w-full border-b-2 border-t-2 border-dark-blue">
	<div class="flex flex-col items-center h-full justify-center">
		<h1 class="text-dark-blue text-8xl">to-do app</h1>
		<SearchBar onAdd={addTodos} />
	</div>
</div>

