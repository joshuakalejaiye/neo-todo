<script lang="ts">
	import TodoItem from '$components/TodoItem.svelte';

	import Hero from './Hero.svelte';
	export let data: {
		todos: Todo[];
		postTodo: (todo: Todo) => void;
		deleteTodo: (todo: Todo) => void;
		checkTodo: (todo: Todo) => void;
	};

	$: ({
		todos: fireTodos,
		postTodo,
		deleteTodo,
		checkTodo
	} = data);

	$: todos = fireTodos;
	let addTodos = (taskText: string) => {
		if (taskText) {
			postTodo({
				id: Math.random().toString(36).substr(2, 9),
				text: taskText,
				completed: false,
				createdAt: new Date()
			});
		}
	};

	$: todos, console.table(todos);
</script>

<Hero {addTodos} />

<div class="mb-8">
	<!-- <div class="">
		<div class="statsTitle">Stats</div>
		<div><p>{`${incompleteTasks} Incomplete Tasks`}</p></div>
		<div><p>{`${completedTasks} Tasks Completed`}</p></div>
	</div> -->

	<div class="mt-8 flex flex-col items-center">
		{#each todos as todo}
			<TodoItem
				text={todo.text}
				completed={todo.completed}
				onCheck={() => checkTodo(todo)}
				onDelete={() => deleteTodo(todo)}
			/>
		{/each}
	</div>
</div>
