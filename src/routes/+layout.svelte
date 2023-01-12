<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '../app.css';
	export let data: { user: string };
	$: ({ user } = data);
</script>

<Header {user} />

<main class="flex min-h-screen flex-col items-center">
	<slot />
</main>

<Footer />

<style>
</style>
