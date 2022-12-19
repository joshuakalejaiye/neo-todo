<script lang="ts">
	import SearchBar from '$components/SearchBar.svelte';
	export let addTodos: (text: string) => void;
</script>

<div class="hero">
	<h1>to-do app</h1>
	<SearchBar onAdd={addTodos} />
</div>

<style>
	.hero {
		margin-top: 30px;
		height: 370px;
		border-top: 1px solid #1b4d7a;
		border-bottom: 1px solid #1b4d7a;
		width: 100vw;
		text-align: center;
		background-color: #fbf9ee;
	}
	h1 {
		margin-top: 50px;
		font-size: 100px;
		font-weight: 400;
	}
</style>
