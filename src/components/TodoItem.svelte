<script lang="ts">
	export let text: string;
	export let onDelete: () => void;
	export let onCheck: () => void;

	const checkItem = () => {
		onCheck();
	};

	export let completed: boolean;
	$: textDecoration = completed ? 'line-through' : 'none';
	let showDelete = false;
</script>

{#if text}
	<div class="m-2 flex w-full items-center">
		<!-- <svg
			class="scale-50 cursor-pointer"
			xmlns="http://www.w3.org/2000/svg"
			height="48"
			width="48"
			><path
				d="M17.5 40q-1.45 0-2.475-1.025Q14 37.95 14 36.5q0-1.45 1.025-2.475Q16.05 33 17.5 33q1.45 0 2.475 1.025Q21 35.05 21 36.5q0 1.45-1.025 2.475Q18.95 40 17.5 40Zm13 0q-1.45 0-2.475-1.025Q27 37.95 27 36.5q0-1.45 1.025-2.475Q29.05 33 30.5 33q1.45 0 2.475 1.025Q34 35.05 34 36.5q0 1.45-1.025 2.475Q31.95 40 30.5 40Zm-13-12.5q-1.45 0-2.475-1.025Q14 25.45 14 24q0-1.45 1.025-2.475Q16.05 20.5 17.5 20.5q1.45 0 2.475 1.025Q21 22.55 21 24q0 1.45-1.025 2.475Q18.95 27.5 17.5 27.5Zm13 0q-1.45 0-2.475-1.025Q27 25.45 27 24q0-1.45 1.025-2.475Q29.05 20.5 30.5 20.5q1.45 0 2.475 1.025Q34 22.55 34 24q0 1.45-1.025 2.475Q31.95 27.5 30.5 27.5ZM17.5 15q-1.45 0-2.475-1.025Q14 12.95 14 11.5q0-1.45 1.025-2.475Q16.05 8 17.5 8q1.45 0 2.475 1.025Q21 10.05 21 11.5q0 1.45-1.025 2.475Q18.95 15 17.5 15Zm13 0q-1.45 0-2.475-1.025Q27 12.95 27 11.5q0-1.45 1.025-2.475Q29.05 8 30.5 8q1.45 0 2.475 1.025Q34 10.05 34 11.5q0 1.45-1.025 2.475Q31.95 15 30.5 15Z"
			/></svg
		> -->
		<div
			style:border={completed
				? '2px solid rgb(141,166,189)'
				: '2px solid rgb(27,77,122)'}
			style:box-shadow={completed
				? '4px 4px 0px 0px #ffd12f8c'
				: '4px 4px 0px 0px #FFD12F'}
			class="mr-2 h-12 min-h-[38px] w-12 cursor-pointer border-2 border-dark-blue bg-light-cream shadow-[4px_4px_0px_0px_#FFD12F] hover:bg-cream"
			on:click={checkItem}
			on:keypress={checkItem}
			style:margin-right={showDelete ? '23px' : '20px'}
		>
			{#if completed}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="48"
					width="48"
					class="ml-[-2px]"
					style:filter={`invert(66%) sepia(25%) saturate(309%)
				hue-rotate(167deg) brightness(93%) contrast(93%)`}
					><path
						d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z"
					/></svg
				>
			{/if}
		</div>

		<div
			style:width={showDelete ? '612px' : '652px'}
			style:margin-left={showDelete ? '0px' : '20px'}
			style:border={completed
				? '2px solid rgb(141,166,189)'
				: '2px solid rgb(27,77,122)'}
			style:box-shadow={completed
				? '4px 4px 0px 0px #ffd12f8c'
				: '4px 4px 0px 0px #FFD12F'}
			on:mouseenter={() => {
				showDelete = true;
			}}
			on:mouseleave={() => {
				setTimeout(() => {
					showDelete = false;
				}, 20);
			}}
			class="w-[612px] cursor-pointer border-2 border-dark-blue bg-light-cream shadow-[4px_4px_0px_0px_#FFD12F] hover:bg-cream"
		>
			<div
				style:text-decoration={textDecoration}
				class="justify-self mt-[6px] max-h-[70px] min-h-[38px] w-full overflow-auto break-words pl-3 pr-1 text-2xl text-dark-blue"
			>
				{text}
			</div>
		</div>
		<div
			style:border={completed
				? '1px solid rgb(141,166,189)'
				: '2px solid rgb(27,77,122)'}
			style:border-left={'none'}
			style:display={showDelete ? 'block' : 'none'}
			style:box-shadow={completed
				? '4px 4px 0px 0px #ffd12f8c'
				: '4px 4px 0px 0px #FFD12F'}
			class="mr-2 flex h-12 w-12 cursor-pointer border-t-2 border-b-2 border-r-2 border-dark-blue bg-red text-white shadow-[4px_4px_0px_0px_#FFD12F]"
			on:click={onDelete}
			on:keypress={onDelete}
		>
			<p
				class="mt-[-13px] w-full pl-[6px] text-6xl font-semibold"
				on:click={onDelete}
				on:keypress={onDelete}
			>
				x
			</p>
		</div>
	</div>
{/if}
