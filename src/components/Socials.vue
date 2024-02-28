<template>
	<div class="d-flex justify-content-center gap-4">
		<span class="mb-2" v-for="link in socials">
			<a :href="link.href" referrerpolicy="no-referrer" rel="noopener" :title="link.name">
				<i class="fs-2" :class="link.icon"></i>
			</a>
		</span>
	</div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

export default {
	setup() {
		return {
			socials: computed(() => AppState.socialLinks)
		}
	}
}
</script>

<style lang="scss" scoped></style>