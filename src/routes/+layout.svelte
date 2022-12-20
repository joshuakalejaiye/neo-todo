<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '../app.css';
	export let data: { user: string };
	$: ({ user } = data);
</script>

<Header {user} />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 100vh;
	}
</style>
