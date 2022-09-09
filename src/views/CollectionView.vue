<template>
  <!-- Breadcrumb -->
  <Breadcrumb breadcrumb="Collections" />
  <Suspense>
    <CollectionList />
  </Suspense>
</template>
<script lang="ts" setup>
import CollectionList from "../components/collections/CollectionList.vue";
</script>
