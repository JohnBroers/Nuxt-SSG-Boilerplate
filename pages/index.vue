<template>
	<div class="flex flex-col justify-center items-center p-8">
		<AppLogo class="mb-4"/>
		<h1 class="text-2xl font-bold uppercase text-teal-700 mb-4">
			<fa icon="code" class="mr-2" width="16"/>
			Nuxt + SSG Boilerplate
		</h1>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: 'Home',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Nuxt + SSG Boilerplate setup'
				}
			]
		}
	}
}
</script>
