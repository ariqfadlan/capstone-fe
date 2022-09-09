<template>
<p>hello from components</p>
</template>
<script lang="ts" setup>
import { useCollectionStore } from '../../store/collections';
const collectionStore = useCollectionStore()

await collectionStore.getAll()
</script>
