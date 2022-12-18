<script lang="ts">
    let val = '';
    export let onAdd: (text: string) => void;
</script>

<form>
    <input placeholder="Enter a Task..." bind:value={val} />
    <button on:click={(e) => onAdd(val)}>Add</button>
</form>
