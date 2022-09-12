<template>
	<div class="flex h-screen bg-gray-200 font-roboto">
		<MainSidebar />

		<div class="flex-1 flex flex-col overflow-hidden">
			<MainHeader />

			<main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
				<div class="container mx-auto px-6 py-8">
					<slot />
				</div>
			</main>
			<MainFooter />
		</div>
	</div>
</template>

<script setup lang="ts">
import MainSidebar from "./MainSidebar.vue";
import MainHeader from "./MainHeader.vue";
import MainFooter from "./MainFooter.vue";
</script>
