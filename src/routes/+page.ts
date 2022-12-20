import {
	checkTodo,
	deleteTodo,
	getTodos,
	postTodo
} from '$api';

export const load = async ({
	depends
}: {
	depends: (key: string) => void;
}) => {
	depends('todos');
	const todos = await getTodos().then(
		(userData) => userData.tasks
	);
	return {
		todos: todos,
		postTodo,
		deleteTodo,
		checkTodo
	};
};
