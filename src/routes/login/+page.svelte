<script>
	/**
	 * @type {import('./$types').PageData}
	 */
	export let data;
</script>

<div id="login">
	<h1>Login</h1>
	{#if data.error}
		<div class="error">
			<p>Wrong username/password</p>
		</div>
	{/if}
	<form action="" method="post">
		<label for="email">Email</label>
		<input type="email" name="email" id="email" />
		<label for="password">Password</label>
		<input type="password" name="password" id="password" />
		<button type="submit">Login</button>
		<a href="/register">Register new account</a>
	</form>
</div>

<style>
	a {
		margin-top: 1rem;
	}
</style>
