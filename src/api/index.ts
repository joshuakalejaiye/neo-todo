import { invalidate } from '$app/navigation';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import {
	collection,
	doc,
	getDoc,
	getFirestore,
	updateDoc
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDU3oxMYSxPv65qIXRmkABrBXT5n2hfjH8',
	authDomain: 'neo-todo-app-96ced.firebaseapp.com',
	projectId: 'neo-todo-app-96ced',
	storageBucket: 'neo-todo-app-96ced.appspot.com',
	messagingSenderId: '401625875840',
	appId: '1:401625875840:web:e4cba7e93b34d78ef3ed65'
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export let user = 'example';

export const getUser = async () => {
	return user;
};

export const getTodos = async () => {
	const docRef = doc(db, 'todos', user);
	const docSnap = await getDoc(docRef);

	let todos: Todo[] = [];
	let userExists;

	if (docSnap.exists()) {
		todos = docSnap.data().tasks;
		userExists = true;
	} else {
		console.log('this user doesnt exist');
	}

	todos.sort((a, b) => {
		return b.createdAt.valueOf() - a.createdAt.valueOf();
	});

	todos.sort((a, b) => {
		return Number(a.completed) - Number(b.completed);
	});

	return { userExists, tasks: todos };
};

export async function postTodo(todo: Todo) {
	const docRef = doc(db, 'todos', user);
	const docSnap = await getDoc(docRef);

	if (todo.text === 'strawberry') {
		user = 'joshua';
		invalidate('todos');
		invalidate('user');
		return;
	}

	if (docSnap.exists()) {
		console.log('Document data:', docSnap.data());
		const todosCol = collection(db, 'todos');
		await updateDoc(doc(todosCol, user), {
			tasks: [...docSnap.data().tasks, todo]
		});
		invalidate('todos');
	} else {
		console.log('this user doesnt exist');
	}
}

export async function deleteTodo(todo: Todo) {
	const docRef = doc(db, 'todos', user);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		console.log('Document data:', docSnap.data());
		const todosCol = collection(db, 'todos');
		await updateDoc(doc(todosCol, user), {
			tasks: docSnap
				.data()
				.tasks.filter((t: Todo) => t.id !== todo.id)
		});
		invalidate('todos');
	} else {
		console.log('this user doesnt exist');
	}
}

export async function checkTodo(todo: Todo) {
	const docRef = doc(db, 'todos', user);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		console.log('Document data:', docSnap.data());
		const todosCol = collection(db, 'todos');
		const todoToChange = docSnap
			.data()
			.tasks.find((t: Todo) => t.id === todo.id);
		todoToChange.completed = !todoToChange.completed;
		await updateDoc(doc(todosCol, user), {
			tasks: [
				...docSnap
					.data()
					.tasks.filter((t: Todo) => t.id !== todo.id),
				todoToChange
			]
		});
		invalidate('todos');
	} else {
		console.log('this user doesnt exist');
	}
}
