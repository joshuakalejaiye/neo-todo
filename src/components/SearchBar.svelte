<script lang="ts">
	let val = '';
	export let onAdd: (text: string) => void;
</script>

<form>
	<input class="textbox" placeholder="Enter a Task..." bind:value={val} />
	<button
		on:click|preventDefault={(e) => {
			onAdd(val);
			val = '';
		}}>Add</button
	>
</form>

<style>
	form {
		margin: 0 0 0 0;
		display: flex;
		justify-content: center;
	}
	.textbox {
		width: 430px;
		height: 50px;
		border: 2px solid #1b4d7a;
	}
</style>
