<script lang="ts">
	import SearchBar from '$components/SearchBar.svelte';
	import TodoItem from '$components/TodoItem.svelte';

	let todos = [
		{
			id: 0,
			text: 'first task',
			completed: false
		}
	];

	const addTodos = (taskText: string) => {
		if (!taskText) return;

		todos = [
			...todos,
			{
				id: todos.length,
				text: taskText,
				completed: false
			}
		];

		console.log(todos);
	};

	const checkTodo = (id: number) => {
		todos[id].completed = !todos[id].completed;
	};
</script>

<h1>to-do app</h1>
<SearchBar onAdd={(str) => addTodos(str)} />

{#each todos as todo}
	<TodoItem
		text={todo.text}
		bind:completed={todo.completed}
		onCheck={() => checkTodo(todo.id)}
		onDelete={() => console.log(`Delete ` + todo.id)}
	/>
{/each}
