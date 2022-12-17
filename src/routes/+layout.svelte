<script>
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
    import './styles.css'
</script>

<Header />

<main>
    <slot />
</main>

<Footer />

<style>
    main {
        padding: 1rem;
        min-height: 100vh;
    }
</style>