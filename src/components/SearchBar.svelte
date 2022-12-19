<script lang="ts">
	let val = '';
	export let onAdd: (text: string) => void;
</script>

<form class="w-128 mt-4 ml-2">	
	<input class="shadow-[4px_4px_0px_0px_#26B7C5] h-12 w-full border-2 border-dark-blue text-2xl pl-3 cursor-pointer active:bg-white focus:outline-none focus:cursor-text placeholder:font-light" placeholder="Enter a Task..." bind:value={val} />
	<button
		on:click|preventDefault={() => {
			onAdd(val);
			val = '';
		}}>Add</button
	>
</form>
