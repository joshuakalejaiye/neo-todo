import { checkTodo, deleteTodo, getTodos, postTodo } from '$api';

export const load = ({ depends }: { depends: (key: string) => void }) => {
	const todos = getTodos();
	depends('todos');
	return { todos, postTodo, deleteTodo, checkTodo };
};
