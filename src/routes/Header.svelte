<script lang="ts">
	export let user: string;
</script>

<header class="h-12">
	<nav class="h-full float-right mr-2 text-dark-blue">
		{user.slice(0, 1).toUpperCase() + user.slice(1)}'s Tasks
	</nav>
</header>
