<script lang="ts">
	export let text: string;
	export let onDelete: () => void;
	export let onCheck: () => void;

	const checkItem = () => {
		onCheck();
	};

	export let completed: boolean;
	$: textDecoration = completed ? 'line-through' : 'none';
	$: screenWidth = window.innerWidth;
	$: userOnMobile = window ? screenWidth < 768 : false;
	let showDelete = false;
	$: window.innerWidth, console.log(userOnMobile);

	window.addEventListener('resize', function () {
		screenWidth = window.innerWidth;
	});
</script>

{#if text}
	<div class="mt-2 ml-2 flex items-center md:m-2 md:w-full">
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
			id="todo-item-checkbox"
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
					id="todo-item-checkbox-svg"
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
			id="todo-item-textbox"
			style:width={userOnMobile
				? '235px'
				: showDelete
				? '612px'
				: '652px'}
			style:margin-left={userOnMobile
				? '-5px'
				: showDelete
				? '0px'
				: '20px'}
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
				showDelete = false;
			}}
			class=" w-full cursor-pointer border-2 border-dark-blue bg-light-cream shadow-[4px_4px_0px_0px_#FFD12F] hover:bg-cream"
		>
			<div
				style:color={completed
					? 'rgb(141,166,189)'
					: 'rgb(27,77,122)'}
				style:text-decoration={textDecoration}
				class="justify-self mt-[6px] min-h-[38px] w-full overflow-hidden break-words pl-3 pr-1 text-2xl text-dark-blue md:max-h-[70px]"
			>
				{text}
			</div>
		</div>
		<div
			style:border={completed
				? '1px solid rgb(141,166,189)'
				: '2px solid rgb(27,77,122)'}
			style:border-left={!userOnMobile
				? 'none'
				: completed
				? '1px solid rgb(141,166,189)'
				: '2px solid rgb(27,77,122)'}
			style:display={userOnMobile
				? 'block'
				: showDelete
				? 'block'
				: 'none'}
			style:box-shadow={completed
				? '4px 4px 0px 0px #ffd12f8c'
				: '4px 4px 0px 0px #FFD12F'}
			class="mr-2 ml-3 flex h-12 w-12 cursor-pointer border-t-2 border-b-2 border-r-2 border-dark-blue bg-red text-white shadow-[4px_4px_0px_0px_#FFD12F] md:ml-0"
			on:click={onDelete}
			on:keypress={onDelete}
			on:mouseenter|stopPropagation={() => {
				showDelete = true;
			}}
			on:mouseleave={() => {
				showDelete = false;
			}}
		>
			<p
				class="mt-[-13px] w-full pl-[5px] text-6xl font-semibold"
				on:click={onDelete}
				on:keypress={onDelete}
			>
				x
			</p>
		</div>
	</div>
{/if}
