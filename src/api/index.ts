import { invalidate } from '$app/navigation';
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

export async function getTodos() {
	const todosCol = collection(db, 'todos');
	const querySnapshot = await getDocs(todosCol);
	const todos = querySnapshot.docs.map((doc: any) => {
		console.log(doc.id);
		return { id: doc.id, ...doc.data() };
	});
	todos.sort((a, b) => {
		return b.createdAt - a.createdAt;
	});
	todos.sort((a, b) => {
		return a.completed - b.completed;
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
	await updateDoc(doc(todosCol, todo.id), {
		completed: !todo.completed
	});
	invalidate('todos');
}
