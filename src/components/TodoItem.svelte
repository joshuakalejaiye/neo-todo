<script lang="ts">
	export let text: string;
	export let onDelete: () => void;
	export let onCheck: () => void;

	const checkItem = () => {
		onCheck();
	};

	export let completed: boolean;
	$: textDecoration = completed ? 'line-through' : 'none';

	//console log when value changes
	// $: textDecoration, console.log(textDecoration);
	// $: completed, console.log(completed);
	// let checkboxRef: HTMLInputElement;
	// $: checkboxRef, console.log(checkboxRef);
</script>

{#if text}
	<div
		style:display="flex"
		style:margin-left="-55px"
		style:width="100%"
		style:flex-direction="row"
	>
		<svg
			class="dragger"
			xmlns="http://www.w3.org/2000/svg"
			height="48"
			width="48"
			><path
				d="M17.5 40q-1.45 0-2.475-1.025Q14 37.95 14 36.5q0-1.45 1.025-2.475Q16.05 33 17.5 33q1.45 0 2.475 1.025Q21 35.05 21 36.5q0 1.45-1.025 2.475Q18.95 40 17.5 40Zm13 0q-1.45 0-2.475-1.025Q27 37.95 27 36.5q0-1.45 1.025-2.475Q29.05 33 30.5 33q1.45 0 2.475 1.025Q34 35.05 34 36.5q0 1.45-1.025 2.475Q31.95 40 30.5 40Zm-13-12.5q-1.45 0-2.475-1.025Q14 25.45 14 24q0-1.45 1.025-2.475Q16.05 20.5 17.5 20.5q1.45 0 2.475 1.025Q21 22.55 21 24q0 1.45-1.025 2.475Q18.95 27.5 17.5 27.5Zm13 0q-1.45 0-2.475-1.025Q27 25.45 27 24q0-1.45 1.025-2.475Q29.05 20.5 30.5 20.5q1.45 0 2.475 1.025Q34 22.55 34 24q0 1.45-1.025 2.475Q31.95 27.5 30.5 27.5ZM17.5 15q-1.45 0-2.475-1.025Q14 12.95 14 11.5q0-1.45 1.025-2.475Q16.05 8 17.5 8q1.45 0 2.475 1.025Q21 10.05 21 11.5q0 1.45-1.025 2.475Q18.95 15 17.5 15Zm13 0q-1.45 0-2.475-1.025Q27 12.95 27 11.5q0-1.45 1.025-2.475Q29.05 8 30.5 8q1.45 0 2.475 1.025Q34 10.05 34 11.5q0 1.45-1.025 2.475Q31.95 15 30.5 15Z"
			/></svg
		>
		<div
			style:background-color={completed ? '#FFD12F' : '#fbf9ee'}
			class="todoCheckbox"
			on:click={checkItem}
			on:keypress={checkItem}
		/>

		<div class="todoContainer">
			<div
				style:text-decoration={textDecoration}
				style:width="100%"
				style:textAlign="left"
			>
				{text}
			</div>
		</div>
		<div class="deleteButton" on:click={onDelete} on:keypress={onDelete}>
			<p class="deleteText">x</p>
		</div>
	</div>
{/if}

<style>
	.dragger {
		width: 48px;
		height: 48px;
		margin-top: 13px;
		margin-right: 10px;
		cursor: grab;
		filter: invert(19%) sepia(89%) saturate(1065%) hue-rotate(182deg)
			brightness(95%) contrast(84%);
	}
	.todoCheckbox {
		width: 60px;
		height: 50px;
		margin-top: 11px;
		border-radius: 0px;
		background-color: #fbf9ee;
		border: 2px solid #1b4d7a;
		margin-right: 10px;
		cursor: pointer;
	}
	.todoContainer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 50px;
		border: 2px solid #1b4d7a;
		margin-top: 11px;
		background-color: #fbf9ee;
		cursor: text;
	}
	.deleteButton {
		width: 60px;
		height: 50px;
		background-color: #db6163;
		margin-top: 11px;
		border-right: 2px solid #1b4d7a;
		border-top: 2px solid #1b4d7a;
		border-bottom: 2px solid #1b4d7a;
		cursor: pointer;
	}
	.deleteText {
		color: #fbf9ee;
		font-size: 60px;
		margin-top: -19px;
		margin-left: 4px;
	}
</style>
