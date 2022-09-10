<template>
  <!-- Breadcrumb -->
  <Breadcrumb breadcrumb="Collections" />
  <Suspense>
    <CollectionList />
    <template #fallback><CollectionListSkeleton/></template>
  </Suspense>
</template>
<script lang="ts" setup>
import Breadcrumb from "@/partials/Breadcrumb.vue";
import CollectionList from "../components/collections/CollectionList.vue";
import CollectionListSkeleton from "../components/collections/CollectionListSkeleton.vue";
</script>
