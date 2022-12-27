<script lang="ts">
	let val = '';
	export let onAdd: (text: string) => void;
</script>

<form class="ml-2 mt-9 w-80 md:mt-4 md:w-128">
	<input
		class=" h-12 w-full cursor-pointer border-2 border-dark-blue pl-3 text-2xl shadow-[4px_4px_0px_0px_#26B7C5] placeholder:font-light focus:cursor-text focus:outline-none active:bg-white"
		placeholder="Enter a Task..."
		bind:value={val}
	/>
	<div id="submit_button" class="absolute">
		<div class="relative">
			<button
				class="absolute bottom-[9px] left-[270px] h-8 w-8 rounded-full border-2 border-dark-blue bg-light-cream shadow-[3px_2px_0px_0px_#DB6163] active:bg-cream active:shadow-none active:outline-none md:left-[465px]"
				on:click|preventDefault={() => {
					onAdd(val);
					val = '';
				}}
				><svg
					class="absolute bottom-[-10px] left-[-10px] scale-[0.8] fill-current text-dark-blue active:shadow-none"
					xmlns="http://www.w3.org/2000/svg"
					height="48"
					width="48"
					><path
						d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z"
					/></svg
				></button
			>
		</div>
	</div>
</form>
