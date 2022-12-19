import { invalidate } from '$app/navigation';
import { PUBLIC_FIREBASE_API_KEY } from '$env/static/public';
import { initializeApp } from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	getFirestore,
	updateDoc
} from 'firebase/firestore';

// get firebase api key from .env file
const firebaseConfig = {
	apiKey: PUBLIC_FIREBASE_API_KEY,
	authDomain: 'neo-todo-app-96ced.firebaseapp.com',
	projectId: 'neo-todo-app-96ced',
	storageBucket: 'neo-todo-app-96ced.appspot.com',
	messagingSenderId: '401625875840',
	appId: '1:401625875840:web:e4cba7e93b34d78ef3ed65'
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export async function getTodos() {
	const todosCol = collection(db, 'todos');
	const querySnapshot = await getDocs(todosCol);
	const todos = querySnapshot.docs.map((doc) => {
		console.log(doc.id);
		return { id: doc.id, ...doc.data() };
	});
	return todos;
}

export async function postTodo(todo: Todo) {
	const todosCol = collection(db, 'todos');
	await addDoc(todosCol, todo);
	invalidate('todos');
}

export async function deleteTodo(todo: Todo) {
	const todosCol = collection(db, 'todos');
	await deleteDoc(doc(todosCol, todo.id));
	invalidate('todos');
}

export async function checkTodo(todo: Todo) {
	const todosCol = collection(db, 'todos');
	await updateDoc(doc(todosCol, todo.id), { completed: !todo.completed });
	invalidate('todos');
}
