<script lang="ts">
	export let text: string;
	export let onDelete: () => void;
	export let onCheck: () => void;
	export let completed: boolean;
	$: textDecoration = completed ? 'line-through' : 'none';

	//console log when value changes
	$: textDecoration, console.log(textDecoration);
	$: completed, console.log(completed);
</script>

{#if text}
	<div class="todoContainer">
		<input
			on:click={() => {
				onCheck();
			}}
			id={`todo-checkbox-` + text}
			type="checkbox"
		/>
		<div style:textDecoration style:textAlign="left">
			{text}
		</div>
		<div on:click={onDelete} on:keypress={onDelete}>x</div>
	</div>
{/if}

<style>
	.todoContainer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 50px;
		border: 1px solid black;
		border-radius: 5px;
		margin: 10px 0;
	}
</style>
