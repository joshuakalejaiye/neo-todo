<script lang="ts">
	import TodoItem from '$components/TodoItem.svelte';
	import Hero from './Hero.svelte';

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
	};

	const checkTodo = (id: number) => {
		const todo = todos.find((todo) => todo.id === id);

		if (todo) {
			todo.completed = !todo.completed;
		}

		todos = todos;
	};

	const deleteTodo = (id: number) => {
		todos = [...todos.filter((todo) => todo.id !== id)];
	};

	$: completedTasks = todos.filter((todo) => todo.completed).length;
	$: incompleteTasks = todos.length - completedTasks;
	$: todos, console.log(todos);
</script>

<Hero {addTodos} />

<div
	style:display="flex"
	style:margin-bottom="10px"
	style:gap="calc((1920px * 0.01))"
>
	<div class="statsContainer">
		<div class="statsTitle">Stats</div>
		<div>{`${incompleteTasks} Incomplete Tasks`}</div>
		<div>{`${completedTasks} Tasks Completed`}</div>
	</div>

	<div class="todoContainer">
		{#each todos as todo}
			<TodoItem
				text={todo.text}
				bind:completed={todo.completed}
				onCheck={() => checkTodo(todo.id)}
				onDelete={() => deleteTodo(todo.id)}
			/>
		{/each}
	</div>
</div>

<style>
	.todoContainer {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: calc((1920px * 0.3));
	}

	.statsContainer {
		display: flex;
		position: absolute;
		flex-direction: column;
		height: 50px;
		border: 1px solid #1b4d7a;
		margin: 10px 0;
		width: calc((1920px * 0.1));
		height: 100px;
		left: 0;
		margin-left: 10vw;
		background-color: #fbf9ee;
	}

	.statsTitle {
		width: 100%;
		text-align: center;
		padding-top: 10px;
	}
</style>
