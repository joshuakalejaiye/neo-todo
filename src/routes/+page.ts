import {
	checkTodo,
	deleteTodo,
	getTodos,
	postTodo
} from '$api';

export const load = ({
	depends
}: {
	depends: (key: string) => void;
}) => {
	depends('todos');
	return {
		todos: getTodos(),
		postTodo,
		deleteTodo,
		checkTodo
	};
};
